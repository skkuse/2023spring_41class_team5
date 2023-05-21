import React from "react";

import { Button, Img, Text } from "components";
import Column from "components/Column";

const Page3 = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-5 items-center justify-end w-full">
          <Column
            className="bg-gray_900 flex flex-col items-start justify-end outline outline-gray_600 p-2 w-full"
            codedino="CODE DINO"
          />
          <div className="flex flex-col items-start justify-start max-w-[1160px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row font-dnfbitbitotf gap-5 items-center justify-between w-full">
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-row gap-4 items-center justify-start p-[17px] rounded-[5px]">
                <Text
                  className="ml-3.5 mt-0.5 text-center text-white_A700"
                  as="h2"
                  variant="h2"
                >
                  -10:43
                </Text>
                <Text
                  className="text-center text-white_A700"
                  as="h3"
                  variant="h3"
                >
                  (+19:17)
                </Text>
              </div>
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid h-20 rounded-[5px] w-3/4"></div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col gap-3.5 items-start justify-start p-[18px] rounded-[5px]">
                <Text
                  className="font-dnfbitbitotf md:ml-[0] ml-[7px] text-teal_A700"
                  as="h3"
                  variant="h3"
                >
                  Problem
                </Text>
                <Text
                  className="font-pretendard mb-[316px] md:ml-[0] ml-[7px] text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
                </Text>
              </div>
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col gap-3.5 items-start justify-center p-[21px] sm:px-5 rounded-[5px]">
                <Text
                  className="font-dnfbitbitotf mt-[3px] text-teal_A700"
                  as="h3"
                  variant="h3"
                >
                  Solution
                </Text>
                <Text
                  className="font-pretendard mb-[307px] text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-dnfbitbitotf gap-5 items-center justify-between mt-5 w-full">
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col gap-3.5 items-start justify-start p-6 sm:px-5 rounded-[5px]">
                <Text
                  className="font-dnfbitbitotf text-teal_A700"
                  as="h3"
                  variant="h3"
                >
                  Hint
                </Text>
                <Text
                  className="font-pretendard mb-[74px] text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
                </Text>
              </div>
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col gap-3.5 items-start justify-center p-[21px] sm:px-5 rounded-[5px]">
                <Text
                  className="font-dnfbitbitotf mt-[3px] text-teal_A700"
                  as="h3"
                  variant="h3"
                >
                  Testcase
                </Text>
                <Text
                  className="font-pretendard mb-[77px] text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
                </Text>
              </div>
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex md:flex-1 flex-col gap-3.5 items-center justify-start p-4 rounded-[5px] w-[16%] md:w-full">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[145px] text-center text-white_A700 text-xl"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillBlue70001"
                >
                  Testcase
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] mb-[46px] min-w-[145px] text-center text-white_A700 text-xl"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillTealA700"
                >
                  SUBMIT
                </Button>
              </div>
            </div>
            <div className="flex flex-row font-dnfbitbitotf gap-1.5 items-start justify-start md:ml-[0] ml-[78px] mt-[940px] w-[12%] md:w-full">
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
              className="font-pretendard md:ml-[0] ml-[78px] mt-2 text-gray_500_01"
              as="h6"
              variant="h6"
            >
              참여 인원 : 강창우, 권보성, 김민지, 김민재, 김태환, 이제영
            </Text>
            <Text
              className="font-pretendard md:ml-[0] ml-[78px] mt-[105px] text-gray_500_01"
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

export default Page3;
