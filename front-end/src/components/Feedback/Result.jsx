import { Button, Img, Text } from "components";
import React from "react";

const Result = ({ onClickFeedback, isWin }) => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[710px] items-center justify-start max-w-[1160px] mt-5 mx-auto p-20 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group16.svg')" }}
        >
          <div className="bg-gray_900 h-[500px] md:h-[510px] sm:h-[990px] mb-[50px] outline outline-[0.5px] outline-gray_700 p-5 relative rounded-[5px] w-[77%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[95%]">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="bg-blue_gray_900_01 h-[460px] outline outline-[0.5px] outline-blue_gray_900 rounded-[5px] w-[49%]"></div>
                <div className="bg-blue_gray_900_01 h-[460px] outline outline-[0.5px] outline-blue_gray_900 rounded-[5px] w-[49%]"></div>
              </div>
            </div>
            <div className="absolute bg-gray_900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[47px] md:px-10 sm:px-5 rounded-[5px] w-3/4">
              <Text className="text-yellow_A200" as="h3" variant="h3">
                대결 결과
              </Text>
              <Text
                className="my-9 text-center text-white_A700"
                as="h1"
                variant="h1"
              >
                {isWin ? "YOU WIN !!" : "YOU LOSE.."}
              </Text>
              <Button
                className="bg-blue-500 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
                shape="RoundedBorder5"
                size="sm"
                variant="FillTealA70001"
                onClick={() => {
                  onClickFeedback();
                }}
              >
                FeedBack
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
