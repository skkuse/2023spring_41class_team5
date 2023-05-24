import React, { useState } from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import HistoryRow from "components/Home/Histories/HistoryRow";

const Page4 = () => {
  const expansion = () => {
    return (
      <div className="flex md:flex-col flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[50px] w-[96%] md:w-full">
        <List
          className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[73%] md:w-full"
          orientation="horizontal"
        >
          <div className="bg-gray_900 flex flex-col items-start justify-start sm:ml-[0] p-4 rounded-[5px] w-full">
            <Text
              className="mb-[358px] mt-[3px] text-white_A700"
              variant="body1"
            >
              내 코드
            </Text>
          </div>
          <div className="bg-gray_900 flex flex-col items-start justify-start sm:ml-[0] p-[19px] rounded-[5px] w-full">
            <Text className="mb-[355px] text-white_A700" variant="body1">
              피드백
            </Text>
          </div>
        </List>
        <div className="bg-gray_900 flex flex-col items-start justify-start p-[19px] rounded-[5px]">
          <Text
            className="mb-[355px] ml-1 md:ml-[0] text-white_A700"
            variant="body1"
          >
            힌트 내용
          </Text>
        </div>
      </div>
    );
  };
  const table = () => {
    return (
      <>
        <div className="flex sm:flex-col flex-row font-pretendard sm:gap-5 items-center justify-start max-w-[1072px] mt-[43px] mx-auto md:px-5 w-full">
          <Text className="text-center text-white_A700" variant="body1">
            NO.
          </Text>
          <Text
            className="sm:ml-[0] ml-[213px] text-center text-white_A700"
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
        <div className="bg-blue_gray_900_01 flex flex-col font-pretendard items-center justify-start max-w-[1160px] mt-[31px] mx-auto p-[17px] md:px-5 w-full">
          <div className="flex flex-col gap-7 justify-start w-[99%] md:w-full">
            <HistoryRow />
          </div>
        </div>
      </>
    );
  };
  const row = () => {
    const [open, setOepn] = useState(false);
    return (
      <>
        <div
          className="flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[33px] w-[98%] md:w-full"
          onClick={() => {
            setOepn((prev) => !prev);
          }}
        >
          <Text className="text-center text-white_A700" variant="body1">
            1
          </Text>
          <Text
            className="md:ml-[0] ml-[183px] text-center text-white_A700"
            variant="body1"
          >
            고양이 목에 방울 걸기!!!!!!!!!
          </Text>
          <Text
            className="md:ml-[0] ml-[243px] text-center text-white_A700"
            variant="body1"
          >
            2
          </Text>
          <Text
            className="md:ml-[0] ml-[121px] text-center text-white_A700"
            variant="body1"
          >
            100
          </Text>
          <Text
            className="md:ml-[0] ml-[92px] text-center text-white_A700"
            variant="body1"
          >
            -20:22
          </Text>
          <Text
            className="md:ml-[0] ml-[97px] text-center text-white_A700"
            variant="body1"
          >
            승
          </Text>
          <Text
            className="md:ml-[0] ml-[91px] text-center text-white_A700"
            variant="body1"
          >
            23.03.02
          </Text>
        </div>
        {open && expansion()}
      </>
    );
  };
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-gray_900 flex md:flex-col flex-row md:gap-5 items-center justify-center outline outline-gray_600 md:px-5 w-full">
            <div className="flex md:flex-1 flex-row font-dnfbitbitotf gap-1.5 items-start justify-center mb-2 md:ml-[0] ml-[60px] md:mt-0 mt-3 w-[11%] md:w-full">
              <Text
                className="mt-0.5 text-center text-teal_A700_01"
                as="h3"
                variant="h3"
              >
                CODE DINO
              </Text>
              <Img
                src="images/img_settings.svg"
                className="h-[30px] w-[30px]"
                alt="settings"
              />
            </div>
            <Text
              className="font-pretendard md:ml-[0] ml-[893px] md:mt-0 my-4 text-center text-white_A700"
              variant="body1"
            >
              로그인
            </Text>
            <Text
              className="font-pretendard md:ml-[0] ml-[37px] mr-[72px] md:mt-0 my-4 text-center text-white_A700"
              variant="body1"
            >
              회원가입
            </Text>
          </header>
          <div className="bg-gray_900 flex flex-col items-center justify-end p-9 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1090px] mt-[30px] mx-auto md:px-5 w-full">
              <Img
                src="images/img_cut.svg"
                className="h-[81px] md:mt-0 mt-14 w-[81px]"
                alt="cut"
              />
              <Img
                src="images/img_cut.svg"
                className="h-[81px] md:ml-[0] ml-[45px] md:mt-0 mt-[108px] w-[81px]"
                alt="cut_One"
              />
              <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start mb-[7px] md:ml-[0] ml-[106px] w-2/5 md:w-full">
                <Text
                  className="font-dnfbitbitotf text-center text-white_A700"
                  as="h1"
                  variant="h1"
                >
                  <>
                    일대일 대결로
                    <br />더 재미있게 배우는 코딩!
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-normal font-pretendard leading-[normal] min-w-[218px] text-center text-lg text-white_A700"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineWhiteA700"
                >
                  로그인하고 매칭 시작하기
                </Button>
              </div>
              <Img
                src="images/img_settings.svg"
                className="h-[84px] md:ml-[0] ml-[115px] md:mt-0 mt-[89px] w-[85px]"
                alt="settings_One"
              />
              <div className="h-[146px] md:h-[85px] ml-4 md:ml-[0] md:mt-0 mt-[52px] relative w-[12%] md:w-full">
                <Img
                  src="images/img_settings.svg"
                  className="absolute bottom-[0] h-[85px] left-[0] w-[85px]"
                  alt="settings_Two"
                />
                <Img
                  src="images/img_settings.svg"
                  className="absolute h-[85px] right-[0] top-[0] w-[85px]"
                  alt="settings_Three"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue_gray_900 flex flex-row items-center justify-start outline outline-gray_600 p-5 w-full">
            <div className="flex flex-row items-start justify-between ml-[41px] md:px-5 w-[37%]">
              <Text
                className="text-center text-white_A700"
                as="h5"
                variant="h5"
              >
                서비스 소개
              </Text>
              <Text
                className="text-center text-white_A700"
                as="h5"
                variant="h5"
              >
                내 기록 보기
              </Text>
              <Text className="text-center text-gray_500" as="h5" variant="h5">
                전체 순위 보기(Comming soon)
              </Text>
            </div>
          </div>

          {table()}
          <List
            className="flex-col font-pretendard gap-[5px] grid items-center max-w-[1160px] mt-3 mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
            <Line className="self-center h-px bg-white_A700 w-full" />
            <div className="bg-blue_gray_900_01 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[18px] w-full">
              <Text
                className="ml-3 sm:ml-[0] text-center text-white_A700"
                variant="body1"
              >
                1
              </Text>
              <Text
                className="sm:ml-[0] ml-[183px] text-center text-white_A700"
                variant="body1"
              >
                고양이 목에 방울 걸기
              </Text>
              <Text
                className="sm:ml-[0] ml-[243px] text-center text-white_A700"
                variant="body1"
              >
                2
              </Text>
              <Text
                className="sm:ml-[0] ml-[121px] text-center text-white_A700"
                variant="body1"
              >
                100
              </Text>
              <Text
                className="sm:ml-[0] ml-[92px] text-center text-white_A700"
                variant="body1"
              >
                -20:22
              </Text>
              <Text
                className="sm:ml-[0] ml-[97px] text-center text-white_A700"
                variant="body1"
              >
                승
              </Text>
              <Text
                className="sm:ml-[0] ml-[91px] text-center text-white_A700"
                variant="body1"
              >
                23.03.02
              </Text>
            </div>
          </List>
          <Footer className="bg-gray_900 flex items-center justify-center mt-[180px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Page4;
