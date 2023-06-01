import { Button, Img, Text } from "components";
import React, { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Feedback from "components/Feedback/Feedback";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "api";
const Battle = () => {
  const user = useSelector((state) => state.user);

  const socket = io(`${API_BASE_URL}`, {
    cors: {
      origin: "*",
    },
  });

  const location = useLocation();
  const navigate = useNavigate();
  const match = location.state;
  const [submitResult, setSubmitResult] = useState(null);
  const [opponentScore, setOpponentScore] = useState(0);
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const now = new Date();
  const matchingTime = new Date(match.createdAt);

  const serverRemainingTime =
    (matchingTime.getTime() + 60 * 30 - now.getTime()) / 1000;
  const [remainingTime, setRemainingTime] = useState(serverRemainingTime);

  const healthCheck = async () => {
    try {
      console.log("health checking...");
      const res = await axios.get(
        `${API_BASE_URL}/match/${match.id}/health-check`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`, // 토큰 값 사용
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const timeCounter = () => {
    const intervalId = setInterval(() => {
      setRemainingTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    timeCounter();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await healthCheck();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    socket.on("SCORE_UPDATED", (socket) => {
      const { uid: updatedId, score } = socket;
      if (user.id === updatedId) return;
      setOpponentScore(score);
      console.log(socket, user.id, updatedId);
    });
    socket.on("MATCH_ENDED", (socket) => {
      console.log(socket);
    });
  });

  useEffect(() => {
    if (match === null) {
      navigate("/", { replace: true });
    } else {
      console.log(match);
      socket.on("connect", () => {
        socket.emit("JOIN_ROOM", match.id);
      });
      socket.connect();
    }
  }, [match, navigate]);

  const onSubmitCode = () => {
    axios
      .post(
        `${API_BASE_URL}/match/${match.id}/submit`,
        { code: `${code}` },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`, // 토큰 값 사용
          },
        }
      )
      .then(({ data }) => {
        setSubmitResult(data.score);
      });
  };
  const feedback = `<>
                      알고리즘 부분:                      <br />                      코드의 실행 시간이 상당히 오래 걸렸습니다. 특히 입력
                      크기가 큰 경우에는 성능이 저하될 수 있습니다.
                      <br />
                      일부 반복문이 중복되거나 비효율적으로 작성되었습니다. 이로
                      인해 코드가 더 길어지고 가독성이 떨어집니다.
                      <br />
                      코드 간결성 부분:
                      <br />
                      변수명이 명확하지 않거나 일관성이 없습니다. 변수 이름을 더
                      명확하고 의미 있는 단어로 선택하는 것이 좋습니다.
                      <br />
                      코드가 길고 복잡해 보입니다. 불필요한 중첩이나 복잡한
                      조건문을 줄이고, 코드를 간결하게 리팩토링하는 것이
                      좋습니다.
                    </>`;
  const [isGameOver, setIsGameOver] = useState(false);
  return isGameOver ? (
    <Feedback code={code} feedback={feedback} />
  ) : (
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
              {`${Math.trunc(remainingTime / 60)}:${String(
                Math.trunc(remainingTime % 60)
              ).padStart(2, "0")}`}
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
              {opponentScore}%
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
                    <Button
                      className="bg-blue-700 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="FillTealA70001"
                    >
                      질문
                    </Button>
                    <Button
                      className="bg-blue-700 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="FillTealA70001"
                    >
                      먹물 30초
                    </Button>
                    <Button
                      className="bg-blue-700 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="FillTealA70001"
                    >
                      다음 줄 작성
                    </Button>
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
                className="mb-[10px] md:ml-[0] ml-[7px] text-teal_A700_01"
                as="h3"
                variant="h3"
              >
                Problem {match?.problem.title}
              </Text>
              <Text
                className="font-pretendard mb-[118px] text-white_A700 w-[96%] sm:w-full"
                as="h4"
                variant="h4"
              >
                {match?.problem.description}
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
                {submitResult !== null ? `${submitResult} 점` : "코드 제출 전!"}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-5 justify-start w-[46%] md:w-full">
            <div className="bg-blue_gray_900_01 border border-gray_600 border-solid flex flex-col items-start justify-start p-4 rounded-[5px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-24 ml-3.5 md:ml-[0] w-full md:w-full">
                <div className="flex flex-row font-dnfbitbitotf items-start justify-between w-full">
                  <Text className="text-teal_A700_01" as="h3" variant="h3">
                    Solution
                  </Text>
                  <Text className="text-white_A700 mr-3.5" as="h3" variant="h3">
                    javascript
                  </Text>
                </div>
                <CodeEditor
                  className="w-[90%]"
                  value={code}
                  language="js"
                  placeholder="Please enter JS code."
                  onChange={(evn) => setCode(evn.target.value)}
                  padding={15}
                  style={{
                    fontSize: 14,
                    backgroundColor: "#202020",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-[55px] items-start justify-end md:ml-[0] ml-[109px] w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-0.5">
                <Button
                  className="bg-blue-500 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillTealA70001"
                  onClick={() => {
                    console.log(socket);
                  }}
                >
                  코드 실행
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start mb-0.5 w-[43%]">
                <Button
                  className="bg-green-500 cursor-pointer font-normal leading-[normal] min-w-[151px] text-center text-white_A700 text-l"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="FillTealA70001"
                  onClick={() => {
                    onSubmitCode();
                  }}
                  // onClick={() => {
                  //   setIsGameOver(true);
                  // }}
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
