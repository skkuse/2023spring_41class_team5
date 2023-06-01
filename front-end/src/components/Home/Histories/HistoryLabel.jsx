import { List, Text } from "components";
import React, { useState } from "react";


const HistoryLabel = () => {
    return (
        <div
            className=" flex flex-col font-pretendard items-center justify-start max-w-[1160px] mt-[10px] p-[17px] md:px-5 w-full cursor-pointer"
        >
            <div className="flex flex-col gap-7 justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[33px] w-[98%] md:w-full">
                    <Text className="text-center text-white_A700" variant="body1">
                        NO.
                    </Text>
                    <Text
                        className="md:ml-[0] ml-[100px] text-center text-white_A700"
                        variant="body1"
                    >
                        문제명
                    </Text>
                    <Text
                        className="md:ml-[0] ml-[243px] text-center text-white_A700"
                        variant="body1"
                    >
                        승패
                    </Text>
                    <Text
                        className="md:ml-[0] ml-[121px] text-center text-white_A700"
                        variant="body1"
                    >
                        점수
                    </Text>
                    <Text
                        className="md:ml-[0] ml-[92px] text-center text-white_A700"
                        variant="body1"
                    >
                        코드
                    </Text>
                    <Text
                        className="md:ml-[0] ml-[97px] text-center text-white_A700"
                        variant="body1"
                    >
                        피드백
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default HistoryLabel;
