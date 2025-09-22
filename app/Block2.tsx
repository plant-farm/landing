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
              <p className={"font-black text-4xl pt-10 pb-5 text-center"}>프로젝트 배경</p>
              <div className={"flex flex-col space-y-2"}>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={1} />
                  <p>WHO는 가공육을 1급 발암물질, 적색육을 2급 발암물질로 분류했어요.</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={2} />
                  <p>한국 사회에서 비건·식물성 식품은 접근성·인지도가 낮아요.</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={3} />
                  <p>기존 이커머스에서는 비건 제품이 비싸거나 선택지가 제한적이에요.</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={4} />
                  <p>비건 식당 수도 부족하며, 소비자가 쉽게 찾기 어려워요.</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={5} />
                  <p>사회적으로 비건에 대한 오해·편견이 존재해요.</p>
                </div>
                <p className={"font-black text-4xl pb-5 pt-15 text-center"}>문제 해결</p>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={1} />
                  <p>식물성 식품 전용 이커머스</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={2} />
                  <p>탄소 절감 점수 + 건강 점수 제공</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={3} />
                  <p>랭킹 기능 → 환경 기여도 게이미피케이션 + 식당 홍보 연계</p>
                </div>
                <div className={"flex items-center space-x-2"}>
                  <NumberBlock number={4} />
                  <p>비건 식당 지도 서비스 → 100%/80% 라벨링 포함</p>
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