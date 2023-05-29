import { Button, Img, Text } from "components";
import React from "react";

const Battle = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start max-w-[1156px] mx-auto md:px-5 w-full mt-5">
        <div className="flex md:flex-col flex-row font-dnfbitbitotf md:gap-5 items-start justify-start w-full">
          <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex md:flex-1 flex-row gap-[11px] items-start justify-start mb-[9px] p-1.5 rounded-[5px] w-[24%] md:w-full">
            <Text
              className="ml-2.5 text-center text-white_A700"
              as="h4"
              variant="h4"
            >
              남은 시간
            </Text>
            <Text
              className="mb-3 mt-4 text-center text-white_A700"
              as="h2"
              variant="h2"
            >
              19:17
            </Text>
          </div>
          <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col gap-[5px] justify-start mb-[9px] ml-5 md:ml-[0] pb-4 px-4 rounded-[5px]">
            <Text
              className="ml-0.5 md:ml-[0] text-center text-white_A700"
              as="h4"
              variant="h4"
            >
              상대 진행률
            </Text>
            <Text
              className="md:ml-[0] ml-[71px] mr-[92px] text-center text-white_A700"
              as="h2"
              variant="h2"
            >
              62%
            </Text>
          </div>
          <div className="sm:h-[253px] md:h-[88px] h-[89px] md:ml-[0] ml-[57px] relative w-[46%] md:w-full">
            <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col h-full items-start justify-end ml-auto mr-[62px] my-auto p-0.5 rounded-[5px] w-[23px]">
              <Text className="mt-[3px] text-teal_A700_01" variant="body1">
                C{" "}
              </Text>
            </div>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col items-center justify-start  px-[11px] rounded-[5px] w-full">
                <div className="flex flex-col gap-1.5 justify-start mb-1 w-full">
                  <Text
                    className="md:ml-[0] ml-[22px] text-teal_A700_01"
                    as="h3"
                    variant="h3"
                  >
                    Hint{" "}
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="bg-blue_700 flex flex-col items-start justify-end p-2.5 rounded-[5px]">
                      <Text
                        className="ml-4 md:ml-[0] text-white_A700"
                        as="h3"
                        variant="h3"
                      >
                        질문?
                      </Text>
                    </div>
                    <Text
                      className="bg-blue_700 h-11 justify-center pl-[27px]  sm:px-5 py-2.5 rounded-[5px] text-white_A700 w-[147px]"
                      as="h3"
                      variant="h3"
                    >
                      먹물 30초
                    </Text>
                    <Text
                      className="bg-blue_700 h-11 justify-center pb-2 pl-[21px] pt-[13px] sm:px-5 rounded-[5px] text-white_A700 w-[147px]"
                      as="h3"
                      variant="h3"
                    >
                      다음 줄 작성
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-dnfbitbitotf md:gap-[57px] items-start justify-between mt-[11px] w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
            <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col font-dnfbitbitotf items-start justify-start p-[18px] rounded-[5px] w-full">
              <Text
                className="mb-[260px] md:ml-[0] ml-[7px] text-teal_A700_01"
                as="h3"
                variant="h3"
              >
                Problem
              </Text>
            </div>
            <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col gap-[35px] items-start justify-center mt-[18px] p-8 sm:px-5 rounded-[5px] w-full">
              <Text
                className="font-dnfbitbitotf mt-1 text-teal_A700_01"
                as="h3"
                variant="h3"
              >
                코드 실행 결과
              </Text>
              <Text
                className="font-pretendard mb-[118px] text-white_A700 w-[96%] sm:w-full"
                as="h4"
                variant="h4"
              >
                <>
                  입력값 〉&quot;HelloWorld!&quot;기댓값
                  〉&quot;HelloWorld!&quot;실행 결과 〉Output size differs
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-5 justify-start w-[46%] md:w-full">
            <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col items-start justify-start p-4 rounded-[5px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-24 ml-3.5 md:ml-[0] w-[82%] md:w-full">
                <div className="flex flex-row font-dnfbitbitotf items-start justify-between w-full">
                  <Text className="text-teal_A700_01" as="h3" variant="h3">
                    Solution
                  </Text>
                  <Text className="text-white_A700" as="h3" variant="h3">
                    python
                  </Text>
                </div>
                <Text
                  className="font-pretendard text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  <>
                    #include &lt;stdio.h&gt;
                    <br />
                    #define LEN_INPUT 1000001
                    <br />
                    <br />
                    int main(void) &#123;
                    <br /> char s1[LEN_INPUT];
                    <br /> scanf(&quot;%s&quot;, s1);
                    <br />
                    <br /> return 0;
                    <br />
                    &#125;
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[55px] items-start justify-end md:ml-[0] ml-[109px] w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-0.5">
                <Text
                  className="bg-blue_700 h-11 justify-center sm:px-5 pl-[34px] py-2.5 rounded-[5px] text-white_A700 w-[151px]"
                  as="h3"
                  variant="h3"
                >
                  코드 실행
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-0.5 w-[43%]">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-xl"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillTealA70001"
                >
                  제출
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Battle;
