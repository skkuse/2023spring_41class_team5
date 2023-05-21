import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Headercodedino/Header";

const Page = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col items-center justify-end p-[27px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start max-w-[1092px] mt-9 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col justify-start mb-4 w-[85%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                src="images/img_twitter.svg"
                className="h-[68px]"
                alt="twitter"
              />
              <Img
                src="images/img_twitter.svg"
                className="h-[67px] md:ml-[0] ml-[95px]"
                alt="twitter_One"
              />
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[88px] items-center justify-start mb-10 md:ml-[0] ml-[68px] w-[46%] md:w-full"
                style={{ backgroundImage: "url('images/img_group5.png')" }}
              >
                <Img
                  src="images/img_.png"
                  className="h-[88px] md:h-auto object-cover"
                  alt="Three"
                />
              </div>
              <Img
                src="images/img_clock.svg"
                className="h-[49px] md:ml-[0] ml-[85px]"
                alt="clock"
              />
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[88px] mt-1 w-[61%] md:w-full">
              <Img
                src="images/img_twitter.svg"
                className="h-[45px]"
                alt="twitter_Two"
              />
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[204px] mt-[13px] text-[15px] text-black_900 text-center"
                shape="RoundedBorder5"
                size="sm"
                variant="FillWhiteA700"
              >
                로그인하고 매칭 시작하기
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-2 justify-start md:mt-0 mt-[52px] w-[14%] md:w-full">
            <Img
              src="images/img_twitter_cyan_300.svg"
              className="h-[60px] md:ml-[0] ml-[70px]"
              alt="twitter_Three"
            />
            <Img
              src="images/img_settings.svg"
              className="h-[89px] mr-[54px] w-[89px]"
              alt="settings_One"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue_gray_900 flex flex-row font-dnfbitbitotf items-center justify-start outline outline-gray_600 p-5 w-full">
        <div className="flex flex-row items-start justify-between ml-[41px] md:px-5 w-[37%]">
          <Text className="text-center text-white_A700" as="h5" variant="h5">
            서비스 소개
          </Text>
          <Text className="text-center text-white_A700" as="h5" variant="h5">
            내 기록 보기
          </Text>
          <Text className="text-center text-gray_500" as="h5" variant="h5">
            전체 순위 보기(Comming soon)
          </Text>
        </div>
      </div>
      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1017px] mt-[108px] mx-auto md:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[3px]">
          <Text
            className="font-dnfbitbitotf text-teal_A700"
            as="h3"
            variant="h3"
          >
            서비스 소개
          </Text>
          <Text
            className="font-dnfbitbitotf mt-3 text-white_A700"
            as="h2"
            variant="h2"
          >
            <>
              일대일 대결로
              <br />더 재미있게 배우는 코딩
            </>
          </Text>
          <Text
            className="font-pretendard mt-5 text-white_A700"
            as="h4"
            variant="h4"
          >
            CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
          </Text>
        </div>
        <Img
          src="images/img_settings.svg"
          className="h-[84px] mb-[25px] md:ml-[0] ml-[129px] md:mt-0 mt-[55px] w-[85px]"
          alt="settings_Two"
        />
        <div className="h-[146px] md:h-[85px] ml-4 md:ml-[0] md:mt-0 mt-[18px] relative w-[13%] md:w-full">
          <Img
            src="images/img_settings.svg"
            className="absolute bottom-[0] h-[85px] left-[0] w-[85px]"
            alt="settings_Three"
          />
          <Img
            src="images/img_settings.svg"
            className="absolute h-[85px] right-[0] top-[0] w-[85px]"
            alt="settings_Four"
          />
        </div>
        <Img
          src="images/img_settings.svg"
          className="h-[85px] mb-2 md:ml-[0] ml-[70px] md:mt-0 mt-[71px] w-[85px]"
          alt="settings_Five"
        />
        <Img
          src="images/img_settings.svg"
          className="h-[85px] mb-[55px] md:ml-[0] ml-[70px] md:mt-0 mt-6 w-[85px]"
          alt="settings_Six"
        />
      </div>
      <List
        className="flex-col gap-[18.5px] grid items-center max-w-[975px] mt-[84px] mx-auto md:px-5 w-full"
        orientation="vertical"
      >
        <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="bg-blue_gray_100 h-[267px] w-[53%]"></div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-dnfbitbitotf text-teal_A700"
              as="h3"
              variant="h3"
            >
              매칭
            </Text>
            <Text
              className="font-dnfbitbitotf mt-3 text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                지역 기반 매칭, <br />
                이웃과 함께 즐길 수 있어요
              </>
            </Text>
            <Text
              className="font-pretendard mt-5 text-white_A700"
              as="h4"
              variant="h4"
            >
              CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
            </Text>
          </div>
        </div>
        <Line className="self-center h-[3px] bg-white_A700 w-[9%]" />
        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-20 items-center justify-start w-[92%] md:w-full">
          <div className="bg-blue_gray_100 h-[267px] w-[58%]"></div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-dnfbitbitotf text-teal_A700"
              as="h3"
              variant="h3"
            >
              대결
            </Text>
            <Text
              className="font-dnfbitbitotf mt-3 text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                AI와 함께하는 <br />
                든든한 코딩
              </>
            </Text>
            <Text
              className="font-pretendard mt-5 text-white_A700"
              as="h4"
              variant="h4"
            >
              CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
            </Text>
          </div>
        </div>
        <Line className="self-center h-[3px] bg-white_A700 w-[9%]" />
        <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
          <div className="bg-blue_gray_100 h-[267px] w-[54%]"></div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="font-dnfbitbitotf text-teal_A700"
              as="h3"
              variant="h3"
            >
              피드백
            </Text>
            <Text
              className="font-dnfbitbitotf mt-3 text-white_A700"
              as="h2"
              variant="h2"
            >
              <>
                내 코드를 더욱 정밀하게! <br />
                AI로 분석하는 피드백
              </>
            </Text>
            <Text
              className="font-pretendard mt-5 text-white_A700"
              as="h4"
              variant="h4"
            >
              CODE DINO는 일대일 코딩 대결 서비스 입니다.{" "}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

export default Page;
