import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

type block1_type = {
  selectedBlock: number;
  setSelectedBlock: (block: number) => void;
}

const Block1 = ({ selectedBlock, setSelectedBlock }: block1_type) => {
  return <motion.div className={"fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/30 z-20"}>
    {
      selectedBlock === 1 &&
      <motion.div className={"w-[60vw] h-fit bg-white/80 backdrop-brightness-150 backdrop-blur-2xl backdrop-contrast-200 z-30 p-10 pb-20 rounded-2xl"} layoutId="box-1" key={"block-1r"}>
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
          className={"flex flex-col items-center relative space-y-5"}
        >
          <AnimatePresence>
            <div className={"flex flex-col w-full items-center"}>
              <div className={"flex justify-between w-full"}>
                <button onClick={() => {
                  setSelectedBlock(-1);
                }}
                        className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                >
                  <Image src={"x-mark.svg"} alt={"x-mark"} width={17} height={17} />
                </button>
                <div className={"flex space-x-5 items-center"}>
                  <button
                    className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                  >
                    <Image src={"arrow-left.svg"} alt={"x-mark"} width={17} height={17} />
                  </button>
                  <div className={"font-bold text-xl text-gray-600"}>1 / 3</div>
                  <button onClick={() => {
                    setSelectedBlock(2);
                  }}
                          className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                  >
                    <Image src={"arrow-right.svg"} alt={"x-mark"} width={17} height={17} />
                  </button>
                </div>
              </div>
              <Image src={"/sdgs.png"} alt={"sdgs"} width={70} height={70} />
              <p className={"font-black text-4xl pb-20 text-center pt-10"}>우리는 지속가능한 세상을 만들기 위해 일하고 있어요.</p>
              <div className={"flex flex-col w-full px-30 space-x-5 relative justify-center text-center"}>
                <div className={"flex-1 space-y-10 break-keep"}>
                  <div className={"flex space-x-10 text-center"}>
                    <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                      <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                        <Image src={"sdg3.svg"} alt={""} fill className={"rounded-2xl"} />
                      </div>
                      <p>가공육 · 적색육 대체, 건강한 식습관 확산</p>
                    </div>
                    <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                      <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                        <Image src={"sdg12.svg"} alt={""} fill className={"rounded-2xl"} />
                      </div>
                      <p>지속 가능한 식품 유통망 구축</p>
                    </div>
                    <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                      <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                        <Image src={"sdg13.svg"} alt={""} fill className={"rounded-2xl"} />
                      </div>
                      <p>탄소 절감 효과 데이터화</p>
                    </div>
                    <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                      <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                        <Image src={"sdg17.svg"} alt={""} fill className={"rounded-2xl"} />
                      </div>
                      <p>비건 식당 · 푸드 기업과 협력 생태계 구축</p>
                    </div>
                  </div>
                </div>
                <div className={"w-full mt-20"}>
                  <p className={"break-keep text-lg text-black font-semibold"}>건강한 식습관을 확산시키고, 식물성 식품의 접근성을 높이며, 개인과 지구 모두의 건강을 지키며 지속 가능한 식문화를 만들기 위해 노력하고 있어요.</p>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    }
  </motion.div>;
}

export default Block1;