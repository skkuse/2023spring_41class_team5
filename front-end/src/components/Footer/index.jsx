import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <ul className="flex flex-col items-center justify-center mb-[81px] ml-[138px] mr-[579px] mt-[41px] w-[44%] md:w-full common-column-list">
          <li>
            <div className="flex flex-row gap-1.5 items-start justify-start">
              <Text
                className="font-dnfbitbitotf mt-0.5 text-center text-gray_500_01"
                as="h3"
                variant="h3"
              >
                CODE DINO
              </Text>
              <Img
                src="images/img_settings.svg"
                className="h-[30px] w-[30px]"
                alt="settings_Four"
              />
            </div>
          </li>
          <li>
            <Text
              className="font-pretendard mt-2 text-gray_500_01"
              as="h6"
              variant="h6"
            >
              참여 인원 : 강창우, 권보성, 김민지, 김민재, 김태환, 이제영
            </Text>
          </li>
          <li>
            <Text
              className="font-pretendard mt-[105px] text-gray_500_01"
              as="h6"
              variant="h6"
            >
              * ‘코드다이노’는 성균관대학교 소프트웨어학과 이은석 교수님의
              [소프트웨어공학개론] 프로젝트 입니다.{" "}
            </Text>
          </li>
        </ul>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
