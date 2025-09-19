import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 bg-white">
      <div className={"fixed top-0 w-full h-20 bg-white flex items-center justify-center px-6 z-20"}>
        <div className={"flex space-x-10 font-black text-2xl"}>
          Green Bite
        </div>
        <div className={"absolute right-10"}>
          <button className={"rounded-full px-5 py-3 border-[1px] border-[#527B50] text-[#527B50] text-sm font-bold"}>써 보기</button>
        </div>
      </div>
      <div className={"flex flex-col items-center max-w-[1200px] h-screen w-[70%]"}>
        <div className={"mt-40 text-6xl font-black text-black text-center"}>
          <p>사람과 지구가</p>
          <p>함께 건강해지는 세상을 만듭니다.</p>
        </div>
        <div className={"mt-10 text-lg text-center"}>건강한 식습관을 확산시키며, 모두의 건강을 지키고 지속 가능한 식문화를 만들어 갑니다.</div>
        {/*<button className={"rounded-full px-7 py-5 bg-[#517A51] text-white font-bold mt-10"}></button>*/}
        <div className={"mt-16 flex space-x-30 w-full h-[500px]"}>
          <div className={"flex-1 w-full h-full space-y-20 flex flex-col"}>
            <div className={"bg-gray-800 rounded-2xl flex-2 text-white flex flex-col items-center justify-center p-5"}>
              <p className={"font-bold text-2xl text-center"}>100%</p>
              <p className={"font-bold text-xl text-center"}>Satisfied clients</p>
              <p className={"text-center mt-10 text-sm"}>People were sdfsdfsdfs dfasdfawqe wfwaeef</p>
            </div>
            <div className={"bg-gray-100 rounded-2xl flex-1 flex flex-col items-center justify-center"}>
              <p className={"font-bold text-2xl text-center"}>24,000+</p>
              <p className={"text-center text-sm"}>Active reader</p>
            </div>
          </div>
          <div className={"flex-2 h-full"}>
            <div className={"h-full rounded-2xl relative"}>
              <Image src={"/plant.jpg"} alt={"plant"} fill className={"object-cover rounded-3xl"} />
            </div>
          </div>
          <div className={"flex-1 h-full space-y-20 flex flex-col"}>
            <div className={"bg-[#527B50] rounded-2xl flex-2 text-white flex flex-col justify-between p-10 relative"}>
              <div className={"absolute bottom-0 right-0 bg-blue-200 w-20 h-20"}></div>
              <p className={"font-bold text-4xl"}>70%</p>
              <p className={"text-sm"}>People were sdfsdfsdfs dfasdfawqe wfwaeef</p>
              <div className={"flex space-x-2.5 items-center"}>
                <div className={""}>Our review</div>
                <Image src={"arrow-right-circle.svg"} alt={"right arrow"} width={20} height={20} />
              </div>
            </div>
            <div className={"bg-gray-100 rounded-2xl flex-1"}></div>
          </div>
        </div>
      </div>
      <div className={"w-screen bg-[#F6F6F6] p-36"}>
        <div className={"min-w-[1200px] flex-col space-y-36"}>
          <div className={"flex space-x-30 items-center"}>
            <div className={"flex-4"}>
              <div className={"h-80 w-full bg-white rounded-2xl relative"}>
                <Image src={"/vegan_food.jpg"} alt={""} fill className={"rounded-2xl object-cover"} />
              </div>
            </div>
            <div className={"flex-6 space-y-10"}>
              <p className={"text-4xl font-black"}>맛있는 비건 · 플랜트 베이스드 식품을 찾아보세요.</p>
              <div className={"flex space-x-10"}>
                <button className={"rounded-full px-7 py-5 bg-[#517A51] text-white text-xl font-bold"}>구경하러 가기</button>
                <button className={"rounded-full px-7 py-5 text-black text-xl font-bold flex space-x-3"}>
                  <div className={"text-gray-700"}>비건 · 플랜트 베이스드 식품이 무엇인가요?</div>
                  <Image src={"arrow-right.svg"} alt={"right arrow"} width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
          <div className={"flex space-x-30"}>
            <div className={"flex-6"}>
              <div className={"h-full w-full"}>
                <p className={"text-4xl font-black"}>우리는 지속가능한 세상을 만들기 위해 일합니다.</p>
                <p className={"mt-10"}>Events, Campaigns, and Projects for Environmental Sustainability. 플랜트 베이스드 식품은 이런거고, 저런거고, 사실 나도 잘 모름.</p>
              </div>
            </div>
            <div className={"flex-4 space-y-10"}>
              <div className={"flex space-x-10 text-center"}>
                <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                  <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                    <Image src={"sdg3.svg"} alt={""} fill className={"rounded-2xl"} />
                  </div>
                  <p>건강과 웰빙</p>
                </div>
                <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                  <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                    <Image src={"sdg12.svg"} alt={""} fill className={"rounded-2xl"} />
                  </div>
                  <p>책임 있는 소비와 생산</p>
                </div>
                <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                  <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                    <Image src={"sdg13.svg"} alt={""} fill className={"rounded-2xl"} />
                  </div>
                  <p>기후 행동</p>
                </div>
                <div className={"flex flex-col w-full h-full space-y-5 items-center"}>
                  <div className={"aspect-square w-full bg-white rounded-2xl relative"}>
                    <Image src={"sdg17.svg"} alt={""} fill className={"rounded-2xl"} />
                  </div>
                  <p>파트너십</p>
                </div>
              </div>
            </div>
          </div>
          <div className={"flex space-x-10"}>
            <div className={"flex-1 bg-[#E5EAE4] rounded-2xl p-10 flex items-center"}>
              <div className={"flex flex-col w-[60%]"}>
                <p className={"text-3xl font-bold"}>Cleaning up the plant</p>
                <p className={"text-lg mt-10"}>Our team ins actively working to clean up the plant from pollution in order to restore its natural beauty.</p>
                <button className={"flex space-x-2.5 mt-20"}>
                  <p className={"font-bold"}>Read More</p>
                  <Image src={"arrow-right.svg"} alt={"right arrow"} width={20} height={20} />
                </button>
              </div>
            </div>
            <div className={"w-full flex-1 flex flex-col space-y-10"}>
              <div className={"flex-1 bg-[#527B50] rounded-2xl text-white p-10 flex flex-col justify-center"}>
                <div className={"flex flex-col w-[60%]"}>
                  <p className={"text-2xl font-bold"}>Cleaning up the plant</p>
                  <p className={"text-sm mt-3"}>Our team ins actively working to clean up the plant from pollution in order to restore its natural beauty.</p>
                  <button className={"flex space-x-2.5 mt-10"}>
                    <p className={"font-bold"}>Read More</p>
                    <Image src={"arrow-right-circle.svg"} alt={"right arrow"} width={20} height={20} />
                  </button>
                </div>
              </div>
              <div className={"flex-1 bg-[#010101] rounded-2xl text-white p-10 flex flex-col justify-center"}>
                <div className={"flex flex-col w-[60%]"}>
                  <p className={"text-2xl font-bold"}>Cleaning up the plant</p>
                  <p className={"text-sm mt-3"}>Our team ins actively working to clean up the plant from pollution in order to restore its natural beauty.</p>
                  <button className={"flex space-x-2.5 mt-10"}>
                    <p className={"font-bold"}>Read More</p>
                    <Image src={"arrow-right-circle.svg"} alt={"right arrow"} width={20} height={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex flex-col items-center max-w-[1200px]"}>
        <p className={"font-black text-4xl p-36"}>Comprehensive Tutorials, Resourceful Insights, and Everyday Tips</p>
        <div className={"grid w-full h-[500px] grid-cols-3 space-x-2.5 bg-blue-200 relative"}>
          <div className={"bg-black"}></div>
          <div className={"bg-black"}></div>
          <div className={"bg-black"}></div>
        </div>
      </div>
    </div>
  );
}
