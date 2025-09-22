import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

type block3_type = {
  selectedBlock: number;
  setSelectedBlock: (block: number) => void;
}

const Block3 = ({ selectedBlock, setSelectedBlock }: block3_type) => {
  return <motion.div className={"fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/30 z-20"}>
    {
      selectedBlock === 3 &&
      <motion.div className={"w-[60vw] h-fit bg-white/80 backdrop-brightness-150 backdrop-blur-2xl backdrop-contrast-200 z-30 p-10 pb-20 rounded-2xl"} layoutId="box-3" key={"block-3r"}>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)"
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)"
          }}
          transition={{
            delay: 0.2
          }}
        >
          <AnimatePresence>
            <div className={"flex flex-col items-center w-full"}>
              <div className={"flex justify-between w-full"}>
                <button onClick={() => {
                  setSelectedBlock(-1);
                }}
                        className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                >
                  <Image src={"x-mark.svg"} alt={"x-mark"} width={17} height={17} />
                </button>
                <div className={"flex space-x-2.5 items-center"}>
                  <button onClick={() => {
                    setSelectedBlock(2);
                  }}
                          className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                  >
                    <Image src={"arrow-left.svg"} alt={"x-mark"} width={17} height={17} />
                  </button>
                  <div className={"font-bold text-xl text-gray-600"}>3 / 3</div>
                  <button onClick={() => {}}
                          className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                  >
                    <Image src={"arrow-right.svg"} alt={"x-mark"} width={17} height={17} />
                  </button>
                </div>
              </div>
              <p className={"font-black text-4xl pb-20 text-center"}>식물농장에서 함께 일하고 있어요</p>
              <div className={"flex w-full space-x-5 relative justify-center text-center"}>
                <div className={"flex flex-col items-center w-40"}>
                  <div className={"bg-black w-40 aspect-square rounded-full relative"}>
                    <Image src={"/ttuttu.jpeg"} alt={""} fill className={"rounded-full object-cover"} />
                  </div>
                  <p className={"text-2xl font-bold mt-7"}>뚜뚜</p>
                  <p className={"text-gray-700"}>엔진</p>
                </div>
                <div className={"flex flex-col items-center w-40"}>
                  <div className={"bg-black w-40 aspect-square rounded-full relative"}>
                    <Image src={"/yangteol.jpeg"} alt={""} fill className={"rounded-full object-cover"} />
                  </div>
                  <p className={"text-2xl font-bold mt-7"}>양털</p>
                  <p className={"text-gray-700"}>에어백</p>
                </div>
                <div className={"flex flex-col items-center w-40"}>
                  <div className={"bg-black w-40 aspect-square rounded-full relative"}>
                    <Image src={"/dodari.jpeg"} alt={""} fill className={"rounded-full object-cover"} />
                  </div>
                  <p className={"text-2xl font-bold mt-7"}>도다리</p>
                  <p className={"text-gray-700"}>브레이크</p>
                </div>
                <div className={"flex flex-col items-center w-40"}>
                  <div className={"bg-gray-200 flex items-center justify-center font-bold text-6xl text-gray-400 w-40 aspect-square rounded-full relative"}>
                    <Image src={"/wheel.avif"} alt={""} fill className={"rounded-full object-cover"} />
                  </div>
                  <p className={"text-2xl font-bold mt-7"}>???</p>
                  <p className={"text-gray-700 break-keep"}>속력을 붙여줄 바퀴를 구합니다.</p>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    }
  </motion.div>;
}

export default Block3;