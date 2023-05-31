import { List, Text } from "components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const expansion = () => {
  return (
    <div className="flex md:flex-col flex-row gap-[19px] items-center  md:ml-[0] w-[96%] md:w-full">
      <List
        className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-3 w-[100%] md:w-full"
        orientation="horizontal"
      >
        <div className="bg-gray_900 flex flex-col items-start justify-start sm:ml-[0] p-4 rounded-[5px] w-full">
          <Text className="mb-[358px] mt-[3px] text-white_A700" variant="body1">
            내 코드
          </Text>
        </div>
        <div className="bg-gray_900 flex flex-col items-start justify-start sm:ml-[0] p-[19px] rounded-[5px] w-full">
          <Text className="mb-[355px] text-white_A700" variant="body1">
            피드백
          </Text>
        </div>
        <div className="bg-gray_900 flex flex-col items-start justify-start p-[19px] rounded-[5px] ">
          <Text
            className="mb-[355px] ml-1 md:ml-[0] text-white_A700"
            variant="body1"
          >
            힌트 내용
          </Text>
        </div>
      </List>
    </div>
  );
};

const HistoryRow = () => {
  const [historyData, setHistoryData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:3000/match/history', {
          headers: {
            Authorization: "3948abcd",
          },
        });

        if (response.data) {
          setHistoryData(response.data.history);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div
      className="bg-blue_gray_900_01 flex flex-col font-pretendard items-center justify-start max-w-[1160px] mt-[10px] mx-auto p-[17px] md:px-5 w-full cursor-pointer"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      {historyData.map((data, index) => (
        <div key={index} className="flex flex-col gap-7 justify-start w-[99%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[33px] w-[98%] md:w-full">
            <Text className="text-center text-white_A700" variant="body1">
              {data.id}
            </Text>
            <Text
              className="md:ml-[0] ml-[100px] text-center text-white_A700"
              variant="body1"
            >
              {data.problem.title}
            </Text>
            <Text
              className="md:ml-[0] ml-[243px] text-center text-white_A700"
              variant="body1"
            >
              {data.status}
            </Text>
            <Text
              className="md:ml-[0] ml-[121px] text-center text-white_A700"
              variant="body1"
            >
              {data.score}
            </Text>
            <Text
              className="md:ml-[0] ml-[92px] text-center text-white_A700"
              variant="body1"
            >
              {data.code}
            </Text>
            <Text
              className="md:ml-[0] ml-[97px] text-center text-white_A700"
              variant="body1"
            >
              {data.feedback}
            </Text>
          </div>
          {open && expansion()}
        </div>
      ))}
    </div>
  );
};

export default HistoryRow;