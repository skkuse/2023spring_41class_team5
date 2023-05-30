import React from "react";
import Headercodedino from ".";

const Header = () => {
  return (
    <Headercodedino
      className="bg-gray_900 flex flex-row items-center justify-center outline outline-gray_600 md:px-5 w-full"
      codedino="CODE DINO"
      one="로그인"
      two="회원가입"
    />
  );
};

export default Header;
