import React from "react";
import HistoryRow from "./HistoryRow";
import { Text } from "components";

const HistoryTable = () => {
  return (
    <>
      <div className="flex sm:flex-col flex-row font-pretendard sm:gap-5 items-center justify-start max-w-[1072px] mt-[43px] mx-auto md:px-5 w-full">
        <Text className="text-center text-white_A700" variant="body1">
          NO.
        </Text>
        <Text
          className="sm:ml-[0] ml-[150px] text-center text-white_A700"
          variant="body1"
        >
          문제명
        </Text>
        <Text
          className="sm:ml-[0] ml-[262px] text-center text-white_A700"
          variant="body1"
        >
          힌트 사용
        </Text>
        <Text
          className="sm:ml-[0] ml-[100px] text-center text-white_A700"
          variant="body1"
        >
          점수
        </Text>
        <Text
          className="sm:ml-[0] ml-[100px] text-center text-white_A700"
          variant="body1"
        >
          시간
        </Text>
        <Text
          className="sm:ml-[0] ml-[100px] text-center text-white_A700"
          variant="body1"
        >
          승패
        </Text>
        <Text
          className="sm:ml-[0] ml-[100px] text-center text-white_A700"
          variant="body1"
        >
          날짜
        </Text>
      </div>
      <HistoryRow />
      <HistoryRow />
      <HistoryRow />
    </>
  );
};

export default HistoryTable;