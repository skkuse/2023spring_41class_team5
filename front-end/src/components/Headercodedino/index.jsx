import React from "react";

import { Img, Text } from "components";

const Headercodedino = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-1.5 items-start justify-center mb-2 md:ml-[0] ml-[60px] md:mt-0 mt-3 w-[11%] md:w-full">
          <Text
            className="font-dnfbitbitotf mt-0.5 text-center text-white_A700"
            as="h3"
            variant="h3"
          >
            {props?.codedino}
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
          {props?.one}
        </Text>
        <Text
          className="font-pretendard md:ml-[0] ml-[37px] mr-[72px] md:mt-0 my-4 text-center text-white_A700"
          variant="body1"
        >
          {props?.two}
        </Text>
      </header>
    </>
  );
};

Headercodedino.defaultProps = {
  codedino: "CODE DINO",
  one: "로그인",
  two: "회원가입",
};

export default Headercodedino;
