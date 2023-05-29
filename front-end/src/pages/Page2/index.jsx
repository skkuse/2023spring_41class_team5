import React, { useEffect } from "react";

import { Text } from "components";

const Page2 = () => {
  useEffect(() => {
    alert("hello world");
  }, []);
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
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
      </div>
    </>
  );
};

export default Page2;
