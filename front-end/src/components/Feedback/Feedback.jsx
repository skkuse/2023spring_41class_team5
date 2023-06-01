import { Button, Text } from "components";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Result from "./Result";
import { useNavigate } from "react-router";
import MDEditor from "@uiw/react-md-editor";
const Feedback = ({ code, feedback, isWin }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  return !isClicked ? (
    <Result
      isWin={isWin}
      onClickFeedback={() => {
        setIsClicked(true);
      }}
    />
  ) : (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
        <div className="md:h-[1460px] h-[710px] sm:h-[730px] max-w-[1160px] mt-5 mx-auto md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-1/2 md:w-full">
                <div className="bg-blue_gray_900_01 h-[410px] rounded-[5px] w-full"></div>
                <div className="bg-blue_gray_900_01 h-[280px] rounded-[5px] w-full"></div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-1/2 md:w-full">
                <div className="bg-blue_gray_900_01 h-20 rounded-[5px] w-full"></div>
                <div className="bg-blue_gray_900_01 h-[410px] rounded-[5px] w-full"></div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="bg-blue_gray_900_01 h-[180px] rounded-[5px] w-[66%]"></div>
                  <div className="bg-blue_gray_900_01 h-[180px] rounded-[5px] w-[32%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_900 flex flex-col inset-x-[0] items-center justify-end mx-auto outline outline-[0.5px] outline-gray_700 p-[15px] rounded-[5px] top-[11%] w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start mt-[5px] w-[99%] md:w-full">
              <div className="flex md:flex-col gap-5  w-full">
                <div className="basis-3/6 bg-blue_gray_900_01 flex flex-col gap-[15px] items-start outline outline-[0.5px] outline-blue_gray_900 p-[15px] rounded-[5px]">
                  <Text
                    className="font-dnfbitbitotf ml-1.5 md:ml-[0] mt-[9px] text-teal_A700_01"
                    as="h3"
                    variant="h3"
                  >
                    나의 코드
                  </Text>
                  <CodeEditor
                    disabled
                    className="w-[90%]"
                    value={code}
                    language="js"
                    placeholder="Please enter JS code."
                    padding={15}
                    style={{
                      fontSize: 14,
                      backgroundColor: "#202020",
                      fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    }}
                  />
                </div>
                <div className="basis-3/6 bg-blue_gray_900_01 flex flex-col gap-[15px] items-start justify-center outline outline-[0.5px] outline-blue_gray_900 p-[15px] rounded-[5px]">
                  <Text
                    className="font-dnfbitbitotf ml-1.5 md:ml-[0] mt-[9px] text-teal_A700_01"
                    as="h3"
                    variant="h3"
                  >
                    피드백
                  </Text>
                  <MDEditor.Markdown
                    className="bg-neutral-800 p-4 font-pretendard mb-[67px] ml-1.5 md:ml-[0] text-white_A700"
                    source={feedback}
                  />
                </div>
              </div>
              <Button
                className="bg-blue_700 h-11 justify-center sm:px-5 px-[35px] py-2.5 rounded-[5px] text-white_A700 w-[145px]"
                as="h3"
                variant="h3"
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
