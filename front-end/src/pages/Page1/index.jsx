import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";
import Footer from "components/Footer";
import Headercodedino from "components/Headercodedino";

const Page1 = () => {
  const tableData = React.useRef([
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
    {
      no: "1",
      fifty: "고양이 목에 방울 걸기",
      fiftyOne: "2",
      fiftyTwo: "100",
      fiftyThree: "-20:22",
      fiftyFour: "승",
      fiftyFive: "23.03.02",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("no", {
        cell: (info) => (
          <Text
            className="pb-[-1px] sm:pl-5 pl-[31px] pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[220px] sm:pl-5 pl-[23px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            NO.
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fifty", {
        cell: (info) => (
          <Text
            className="pb-[-1px] pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[334px] sm:pl-5 pl-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            문제명
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fiftyOne", {
        cell: (info) => (
          <Text
            className="pb-[-1px] pl-5 pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[149px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            힌트 사용
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fiftyTwo", {
        cell: (info) => (
          <Text
            className="pb-[-1px] pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[114px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            점수
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fiftyThree", {
        cell: (info) => (
          <Text
            className="pb-[-1px] pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[132px] pl-[9px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            시간
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fiftyFour", {
        cell: (info) => (
          <Text
            className="pb-[-1px] pl-[5px] pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[108px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            승패
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fiftyFive", {
        cell: (info) => (
          <Text
            className="pb-[-1px] pt-[35px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[103px] pl-[15px] text-center text-white_A700"
            as="p"
            variant="body1"
          >
            날짜
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Headercodedino
            className="bg-gray_900 flex flex-row items-center justify-center outline outline-gray_600 md:px-5 w-full"
            codedino="CODE DINO"
            one="로그인"
            two="회원가입"
          />
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
          <Line className="bg-white_A700 h-[3px] md:ml-[0] ml-[184px] w-[7%]" />
          <div className="overflow-auto font-pretendard md:ml-[0] ml-[60px] mt-10 md:px-5 w-[91%]">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass="border-b border-white_A700"
            />
          </div>
          <Footer className="bg-gray_900 flex items-center justify-center mt-[180px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Page1;
