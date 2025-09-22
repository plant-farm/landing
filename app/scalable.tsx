"use client";

import React, {useRef, useState} from "react";

type Props = {
  scale: string;
  duration: number;
  onTap: () => void;
  outerSetTapDown?: (tapDown: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

const Scalable = ({ scale = "0.9", duration = 100, onTap, outerSetTapDown, children, className }: Props) => {

  const ref = useRef<HTMLDivElement>(null);
  const [tapDown, setTapDown] = useState<boolean>(false);
  const [tapCancel, setTapCancel] = useState<boolean>(false);

  const scaleDown = (forward: boolean) => {
    if (ref.current) {
      if (forward) {
        ref.current.style.scale = scale;
        setTapDown(true);
        if (outerSetTapDown) {
          outerSetTapDown(true);
        }
      } else {
        ref.current.style.scale = "1.0";
        setTapDown(false);
        if (outerSetTapDown) {
          outerSetTapDown(false);
        }
      }
    }
  }

  const onMouseDown = () => {
    setTapCancel(false);
    scaleDown(true);
  }

  const onMouseUp = () => {
    scaleDown(true);
    if (!tapCancel) {
      // 함수 실행
      onTap();
    }
    setTimeout(() => {
      scaleDown(false);
    }, duration)
  }

  const onMouseLeave = () => {
    if (tapDown) {
      setTapCancel(true);
      scaleDown(true);
      setTimeout(() => {
        scaleDown(false);
      }, duration)
    }
  }

  return (<>
    <div className={`cursor-pointer ${tapDown ? "ease-out duration-100" : "ease-in-out duration-100"} ${className}`} ref={ref} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  </>);
}

export default Scalable;