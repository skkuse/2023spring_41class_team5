import React from "react";

import { Img, Text } from "components";
import Column from "components/Column";

const Page2 = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
        <Column
          className="bg-gray_900 flex flex-col items-start justify-end outline outline-gray_600 p-2 w-full"
          codedino="CODE DINO"
        />
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[710px] items-center justify-start max-w-[1160px] mt-5 mx-auto p-20 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group8.svg')" }}
        >
          <div className="bg-gray_900 flex flex-col items-center justify-start mb-[50px] outline outline-[0.5px] outline-gray_700 p-[39px] sm:px-5 rounded-[5px] w-[77%] md:w-full">
            <Text
              className="font-dnfbitbitotf text-yellow_A200"
              as="h3"
              variant="h3"
            >
              매칭 중
            </Text>
            <Text
              className="font-dnfbitbitotf mt-[31px] text-center text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                위치기반 매칭으로 <br />
                가까운 사람과 대결해요!
              </>
            </Text>
            <div className="bg-gray_700_01 border border-gray_400 border-solid h-[15px] mt-[41px] rounded-[7px] w-[88%]"></div>
            <Text
              className="font-pretendard mt-2.5 text-center text-white_A700"
              as="h4"
              variant="h4"
            >
              링 위를 닦는 중...
            </Text>
            <div className="bg-blue_gray_900 flex flex-col font-pretendard gap-[7px] items-center justify-start mb-2.5 mt-[52px] p-[17px] rounded-[5px]">
              <Text className="text-white_A700" as="h4" variant="h4">
                <>&lt; 배틀 안내사항 &gt;</>
              </Text>
              <Text
                className="leading-[200.00%] mb-[5px] text-white_A700"
                as="h4"
                variant="h4"
              >
                <>
                  제한 시간은 30분 입니다. <br />
                  힌트는 2회 사용가능 합니다.{" "}
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-[940px] md:px-10 sm:px-5 px-[138px] w-full">
          <div className="flex flex-col items-start justify-end w-[57%] md:w-full">
            <div className="flex flex-row font-dnfbitbitotf gap-1.5 items-start justify-start w-1/4 md:w-full">
              <Text
                className="mt-0.5 text-center text-gray_500_01"
                as="h3"
                variant="h3"
              >
                CODE DINO
              </Text>
              <Img
                src="images/img_settings.svg"
                className="h-[30px] w-[30px]"
                alt="settings_One"
              />
            </div>
            <Text
              className="font-pretendard mt-2 text-gray_500_01"
              as="h6"
              variant="h6"
            >
              참여 인원 : 강창우, 권보성, 김민지, 김민재, 김태환, 이제영
            </Text>
            <Text
              className="font-pretendard mt-[105px] text-gray_500_01"
              as="h6"
              variant="h6"
            >
              * ‘코드다이노’는 성균관대학교 소프트웨어학과 이은석 교수님의
              [소프트웨어공학개론] 프로젝트 입니다.{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
