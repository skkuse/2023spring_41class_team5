import React, { useState } from "react";

import { Img, Line, List, Text } from "components";
import Banner from "components/Banner";
import ServiceIntro from "components/Home/ServiceIntro";
import HistoryTable from "components/Home/Histories/HistoryTable";

const Page = () => {
  const menuArr = [
    { name: "서비스 소개", content: <ServiceIntro /> },
    { name: "내 기록 보기", content: <HistoryTable /> },
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
      {menuArr[currentTab].content}
    </>
  );
};

export default Page;
