'use client'

import Image from "next/image";
import Scalable from "@/app/scalable";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import { Courgette } from "next/font/google";
import Block3 from "@/app/Block3";
import Block1 from "@/app/Block1";
import Block2 from "@/app/Block2";
import DotGrid from "@/app/DotGrid";

const courgette = Courgette({
  subsets: ["latin"],         // 필요한 문자셋
  weight: ["400"],     // 사용할 굵기
});

export default function Home() {

  const [scrollVal, setScrollVal] = useState(0);
  const [selectedBlock, setSelectedBlock] = useState(-1);

  return (
    <div className={"relative w-screen h-screen"} onWheel={(e)=>{
      if (selectedBlock === -1) {
        if (scrollVal + e.deltaY < 0) {
          setScrollVal(0);
        } else {
          if (scrollVal + e.deltaY > 500) {
            setScrollVal(500);
          } else {
            setScrollVal(scrollVal + e.deltaY);
          }
        }
      }
    }}>
      <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 bg-white fixed w-full">

        { selectedBlock == 1 && <Block1 selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} /> }
        { selectedBlock == 2 && <Block2 selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} /> }
        { selectedBlock == 3 && <Block3 selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} />}

        <motion.div className={`flex flex-col items-center max-w-[1200px] h-screen w-[70%] duration-400 ${(selectedBlock == -1) ? "scale-100" : "scale-90 blur-lg"} ${scrollVal > 150 ? "scale-90 blur-lg contrast-100 saturate-100" : "scale-100"}`}>
          <div className={"w-screen h-screen absolute -z-20"}>
            <DotGrid
              dotSize={5}
              gap={20}
              baseColor="#f2f2f2"
              activeColor="#798c78"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
          <div className={"mt-24 text-6xl font-black text-black text-center"}>
            <p className={"mb-10 text-7xl " + courgette.className}>Green Bite</p>
            <p>사람과 지구가</p>
            <p>함께 건강해지는 세상을 만듭니다.</p>
          </div>
          <div className={"mt-10 text-lg text-center"}>건강한 식습관을 확산시키며, 모두의 건강을 지키고 지속 가능한 식문화를 만들어 갑니다.</div>
          <div className={"relative w-full"}>
            <FirstBlock selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} scrollVal={scrollVal} />
          </div>
        </motion.div>
      </div>
      {
        scrollVal > 150 && <motion.div className={"fixed w-screen h-screen overflow-y-scroll bg-white flex flex-col px-30 py-20"}
          layoutId={"box-center"} initial={{ borderRadius: "2rem", bottom: "-100vh" }} animate={{ borderRadius: "none", bottom: "0" }}
        >
          <motion.div className={"text-black"}
            initial={{
              opacity: 0,
              translateY: "20px",
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              translateY: "0",
              filter: "blur(0px)"
            }}
            transition={{
              delay: 0.1
            }}
          >
            <p className={"text-5xl font-black"}>솔루션</p>
            <p></p>
          </motion.div>
        </motion.div>
      }
    </div>
  );
}

type firstBlockType = {
  selectedBlock: number;
  setSelectedBlock: (x: number) => void;
  scrollVal: number;
}

const FirstBlock = ({ selectedBlock, setSelectedBlock, scrollVal }: firstBlockType) => {
  return <div className={"mt-16 flex space-x-5 w-full h-[500px]"}>
    <div className={"flex-1 w-full h-full space-y-5 flex flex-col"}>
      <motion.div className={`bg-gray-100 rounded-2xl flex-1 flex items-center justify-center p-5 cursor-pointer z-10`} layoutId="box-1" onClick={() => {
        setSelectedBlock(1);
      }}>
        {
          selectedBlock != 1 &&
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.2
            }}
            className={"flex flex-col items-center justify-center w-full space-y-5 break-keep text-center"}>
            <Image src={"/sdgs.png"} alt={"sdgs"} width={70} height={70} />
            <p className={"font-bold text-2xl"}>지속가능성</p>
            <p className={"text-sm text-gray-700"}>개인과 지구 모두의 건강을 지키며 지속 가능한 식문화를 만들기 위해 노력해요.</p>
          </motion.div>
        }
      </motion.div>
      <motion.div className={`bg-gray-100 rounded-2xl flex-1 flex items-center justify-center p-5 cursor-pointer z-10`} layoutId="box-2" onClick={() => {
        setSelectedBlock(2);
      }}>
        {
          selectedBlock != 2 &&
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.2
            }}
            className={"flex flex-col items-center justify-center space-y-5"}>
            <p className={"text-3xl " + courgette.className}>Green Bite</p>
            <p className={"font-bold text-2xl"}>프로젝트 소개</p>
            <div className={"text-sm text-center text-gray-700"}>건강한 식습관을 확산시키며, 모두의 건강을 지키고 지속 가능한 식문화를 만들어 갑니다.</div>
          </motion.div>
        }
      </motion.div>
    </div>
    <div className={"flex-2 h-full"}>
      <motion.div className={"h-full rounded-2xl relative"}>
        <Image src={"/plant.jpg"} alt={"plant"} fill className={"object-cover rounded-3xl"} />
      </motion.div>
    </div>

    <div className={"flex-1 h-full space-y-5 flex flex-col"}>
      <div className={"rounded-2xl flex-1 text-white flex flex-col justify-between relative h-full"}>
        <Scalable scale={"0.9"} duration={200} onTap={() => {
          window.open("https://map.naver.com/")
        }} className={"h-full"}>
          <div className={"rounded-2xl flex flex-col justify-between p-10 relative h-full"}>
            <Image src={"/map-ex.png"} alt={""} fill className={"object-cover rounded-2xl"} />
            <div className={"rounded-2xl w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-[#2C402B95]"}></div>
            <p className={"font-bold text-2xl z-10 break-keep"}>비건 식당 찾아보기</p>
            <p className={"text-sm z-10 break-keep"}>우리 동네 비건 식당을 손쉽게 찾아보세요.</p>
            <button className={"flex space-x-2.5 items-center z-10"}>
              <div className={"font-bold"}>지도 보기</div>
              <Image src={"arrow-right-circle.svg"} alt={"right arrow"} width={20} height={20} />
            </button>
          </div>
        </Scalable>
      </div>
      <motion.div className={`bg-gray-100 rounded-2xl flex-1 flex items-center justify-center p-5 cursor-pointer`} layoutId="box-3" onClick={() => {
        setSelectedBlock(3);
      }}>
        {
          selectedBlock != 3 &&
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.2
            }}
            className={"flex flex-col items-center justify-center space-y-5"}>
            <div className={"flex -space-x-2.5"}>
              <div className={"rounded-full w-10 h-10 bg-gray-800 relative border-2 border-gray-800"}>
                <Image src={"/ttuttu.jpeg"} alt={""} fill className={"object-cover rounded-full"} />
              </div>
              <div className={"rounded-full w-10 h-10 bg-gray-800 relative border-2 border-gray-800"}>
                <Image src={"/yangteol.jpeg"} alt={""} fill className={"object-cover rounded-full"} />
              </div>
              <div className={"rounded-full w-10 h-10 bg-gray-800 relative border-2 border-gray-800"}>
                <Image src={"/dodari.jpeg"} alt={""} fill className={"object-cover rounded-full"} />
              </div>
            </div>
            <p className={"font-bold text-2xl"}>식물농장 팀원</p>
            <div className={"text-sm text-center text-gray-700 break-keep"}>식물농장을 가꾸어나가고 있어요.</div>
          </motion.div>
        }
      </motion.div>
    </div>
  </div>;
}