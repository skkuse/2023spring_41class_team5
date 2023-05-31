import { List, Text } from "components";
import React, { useState } from "react";

const Expansion = ({ history }) => {
  const { status, feedback, code } = history;

  return (
    <div className="flex md:flex-col flex-row gap-[19px] items-center  md:ml-[0] w-[96%] md:w-full">
      <List
        className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-3 w-[100%] md:w-full"
        orientation="horizontal"
      >
        <div className="bg-gray_900 flex flex-col items-start justify-start sm:ml-[0] p-4 rounded-[5px] w-full">
          <Text className="mb-[358px] mt-[3px] text-white_A700" variant="body1">
            {code}
          </Text>
        </div>
        <div className="bg-gray_900 flex flex-col items-start justify-start sm:ml-[0] p-[19px] rounded-[5px] w-full">
          <Text className="mb-[355px] text-white_A700" variant="body1">
            {feedback}
          </Text>
        </div>
        <div className="bg-gray_900 flex flex-col items-start justify-start p-[19px] rounded-[5px] ">
          <Text
            className="mb-[355px] ml-1 md:ml-[0] text-white_A700"
            variant="body1"
          >
            {status}
          </Text>
        </div>
      </List>
    </div>
  );
};

const HistoryRow = ({ history, number }) => {
  const { problem, status, feedback, score, code } = history;
  const num = number;

  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-blue_gray_900_01 flex flex-col font-pretendard items-center justify-start max-w-[1160px] mt-[10px] mx-auto p-[17px] md:px-5 w-full cursor-pointer"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <div className="flex flex-col gap-7 justify-start w-[99%] md:w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[33px] w-[98%] md:w-full">
          <Text className="text-center text-white_A700" variant="body1">
            {num}
          </Text>
          <Text
            className="md:ml-[0] ml-[100px] text-center text-white_A700"
            variant="body1"
          >
            {problem.title}
          </Text>
          <Text
            className="md:ml-[0] ml-[243px] text-center text-white_A700"
            variant="body1"
          >
            {status}
          </Text>
          <Text
            className="md:ml-[0] ml-[121px] text-center text-white_A700"
            variant="body1"
          >
            {score}
          </Text>
          <Text
            className="md:ml-[0] ml-[92px] text-center text-white_A700"
            variant="body1"
          >
            {code}
          </Text>
          <Text
            className="md:ml-[0] ml-[97px] text-center text-white_A700"
            variant="body1"
          >
            {feedback}
          </Text>
        </div>
        {open && <Expansion history={history} />}
      </div>
    </div>
  );
};

export default HistoryRow;
