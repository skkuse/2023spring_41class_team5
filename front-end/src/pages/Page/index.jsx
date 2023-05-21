import React, { useState } from "react";

import { Img, Line, List, Text } from "components";
import Banner from "components/Banner";

const Page = () => {
  const menuArr = [
    { name: "서비스 소개", content: "Tab menu ONE" },
    { name: "내 기록 보기", content: "Tab menu TWO" },
    { name: "전체 순위 보기(Comming soon)", content: "Tab menu THREE" },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const activeCSS = " text-white_A700 border-b-4 ";
  const inActiveCSS = "text-gray_500";
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
      <Banner />
      <div className="bg-blue_gray_900 flex flex-row font-dnfbitbitotf items-center justify-center outline outline-gray_600 w-full">
        <div className="flex flex-row items-start justify-start ml-[41px] md:px-5 w-[1450px] gap-12 ">
          {menuArr.map((el, index) => (
            <Text
              className={`text-center cursor-pointer py-4 ${
                index === currentTab ? activeCSS : inActiveCSS
              }`}
              as="h5"
              variant="h5"
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
            </Text>
          ))}
        </div>
      </div>
      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1017px] mt-[108px] mx-auto md:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[3px]">
          <Text
            className="font-dnfbitbitotf text-teal_A700"
            as="h3"
            variant="h3"
          >
            서비스 소개
          </Text>
          <Text
            className="font-dnfbitbitotf mt-3 text-white_A700"
            as="h2"
            variant="h2"
          >
            <>
              일대일 대결로
              <br />더 재미있게 배우는 코딩
            </>
          </Text>
          <Text
            className="font-pretendard mt-5 text-white_A700"
            as="h4"
            variant="h4"
          >
            CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
          </Text>
        </div>
        <Img
          src="images/img_settings.svg"
          className="h-[84px] mb-[25px] md:ml-[0] ml-[129px] md:mt-0 mt-[55px] w-[85px]"
          alt="settings_Two"
        />
        <div className="h-[146px] md:h-[85px] ml-4 md:ml-[0] md:mt-0 mt-[18px] relative w-[13%] md:w-full">
          <Img
            src="images/img_settings.svg"
            className="absolute bottom-[0] h-[85px] left-[0] w-[85px]"
            alt="settings_Three"
          />
          <Img
            src="images/img_settings.svg"
            className="absolute h-[85px] right-[0] top-[0] w-[85px]"
            alt="settings_Four"
          />
        </div>
        <Img
          src="images/img_settings.svg"
          className="h-[85px] mb-2 md:ml-[0] ml-[70px] md:mt-0 mt-[71px] w-[85px]"
          alt="settings_Five"
        />
        <Img
          src="images/img_settings.svg"
          className="h-[85px] mb-[55px] md:ml-[0] ml-[70px] md:mt-0 mt-6 w-[85px]"
          alt="settings_Six"
        />
      </div>
      <List
        className="flex-col gap-[18.5px] grid items-center max-w-[975px] mt-[84px] mx-auto md:px-5 w-full"
        orientation="vertical"
      >
        <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="bg-blue_gray_100 h-[267px] w-[53%]"></div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-dnfbitbitotf text-teal_A700"
              as="h3"
              variant="h3"
            >
              매칭
            </Text>
            <Text
              className="font-dnfbitbitotf mt-3 text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                지역 기반 매칭, <br />
                이웃과 함께 즐길 수 있어요
              </>
            </Text>
            <Text
              className="font-pretendard mt-5 text-white_A700"
              as="h4"
              variant="h4"
            >
              CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
            </Text>
          </div>
        </div>
        <Line className="self-center h-[3px] bg-white_A700 w-[9%]" />
        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-20 items-center justify-start w-[92%] md:w-full">
          <div className="bg-blue_gray_100 h-[267px] w-[58%]"></div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-dnfbitbitotf text-teal_A700"
              as="h3"
              variant="h3"
            >
              대결
            </Text>
            <Text
              className="font-dnfbitbitotf mt-3 text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                AI와 함께하는 <br />
                든든한 코딩
              </>
            </Text>
            <Text
              className="font-pretendard mt-5 text-white_A700"
              as="h4"
              variant="h4"
            >
              CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
            </Text>
          </div>
        </div>
        <Line className="self-center h-[3px] bg-white_A700 w-[9%]" />
        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
          <div className="bg-blue_gray_100 h-[267px] w-[54%]"></div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-dnfbitbitotf text-teal_A700"
              as="h3"
              variant="h3"
            >
              피드백
            </Text>
            <Text
              className="font-dnfbitbitotf mt-3 text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                내 코드를 더욱 정밀하게! <br />
                AI로 분석하는 피드백
              </>
            </Text>
            <Text
              className="font-pretendard mt-5 text-white_A700"
              as="h4"
              variant="h4"
            >
              CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

export default Page;
