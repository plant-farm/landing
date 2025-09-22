import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {Courgette} from "next/font/google";

type block2_type = {
  selectedBlock: number;
  setSelectedBlock: (block: number) => void;
}

const courgette = Courgette({
  subsets: ["latin"],         // 필요한 문자셋
  weight: ["400"],     // 사용할 굵기
});

const Block2 = ({ selectedBlock, setSelectedBlock }: block2_type) => {
  return <motion.div className={"fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/30 z-20"}>
    {
      selectedBlock === 2 &&
      <motion.div className={"w-[60vw] h-fit bg-white/80 backdrop-brightness-150 backdrop-blur-2xl backdrop-contrast-200 z-30 p-10 pb-20 rounded-2xl max-h-[80vh] overflow-y-scroll"} layoutId="box-2" key={"block-2r"}>
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
                <div className={"flex space-x-2.5 items-center"}>
                  <button
                    className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                    onClick={() => {
                      setSelectedBlock(1);
                    }}
                  >
                    <Image src={"arrow-left.svg"} alt={"x-mark"} width={17} height={17} />
                  </button>
                  <div className={"font-bold text-xl text-gray-600"}>2 / 3</div>
                  <button onClick={() => {
                    setSelectedBlock(3);
                  }}
                          className={"w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"}
                  >
                    <Image src={"arrow-right.svg"} alt={"x-mark"} width={17} height={17} />
                  </button>
                </div>
              </div>
              <p className={"text-3xl " + courgette.className}>Green Bite</p>
              <div className={"flex flex-col space-y-2 font-bold text-gray-700 text-xl items-center"}>
                <div className={"flex justify-center pt-10 w-full items-center"}>
                  <Image src={"triangle.svg"} alt={""} width={30} height={30} />
                  <div className={"w-fit mr-10 text-black font-black text-4xl ml-3"}>문제</div>
                  <div className={"w-fit flex flex-col"}>
                    <p>· WHO 가공육 1급 발암물질, 적색육 2급 발암물질로 분류</p>
                    <p>· 한국 사회에서 비건·식물성 식품 접근성·인지도 낮음</p>
                    <p>· 기존 이커머스에서는 비건 제품 가격 부담·선택지 제한</p>
                    <p>· 비건 식당 수 부족, 소비자가 찾기 어려움</p>
                    <p>· 사회적으로 비건에 대한 오해·편견</p>
                  </div>
                </div>
                <p className={"font-black text-6xl pb-5 pt-5 text-center text-gray-700"}>↓</p>
                <div className={"flex space-x-5"}>
                  <SolutionBlock text={"식물성 식품 전용 이커머스"} index={1} />
                  <SolutionBlock text={"탄소 절감 점수 + 건강 점수 제공"} index={2} />
                  <SolutionBlock text={"랭킹 기능, 식당 홍보 연계"} index={3} />
                  <SolutionBlock text={"비건 식당 지도 서비스"} index={4} />
                </div>
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    }
  </motion.div>;
}

export default Block2;

type numberBlockType = {
  number: number
}
const NumberBlock = ({number}: numberBlockType) => {
  return <div className={"flex items-center justify-center w-7 h-7 bg-gray-200 font-bold text-[#517A51] rounded-lg"}>
    <p>{number}</p>
  </div>
}

type solutionBlockType = {
  index: number;
  text: string
}

const SolutionBlock = ({ index, text }: solutionBlockType) => {
  return <div className={"flex flex-col space-y-2.5 w-40 aspect-square text-black bg-gray-100 break-keep rounded-2xl font-bold p-5 text-lg justify-center"}>
    <div className={"flex items-center justify-center w-7 text-white aspect-square bg-gray-800 rounded-full font-bold text-sm"}>{index}</div>
    <p>{text}</p>
  </div>
}