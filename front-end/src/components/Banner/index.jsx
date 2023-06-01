import { Button, Img } from "components";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const isLoggedIn = localStorage.getItem("token");
  const loginBtn = (
    <Link to="page5">
      <Button
        className="cursor-pointer font-bold leading-[normal] min-w-[204px] mt-[13px] text-[15px] text-black_900 text-center"
        shape="RoundedBorder5"
        size="sm"
        variant="FillWhiteA700"
      >
        로그인하고 매칭 시작하기
      </Button>
    </Link>
  );
  const matchingBtn = (
    <Link to="page2">
      <Button
        className="cursor-pointer font-bold leading-[normal] min-w-[204px] mt-[13px] text-[15px] text-black_900 text-center"
        shape="RoundedBorder5"
        size="sm"
        variant="FillWhiteA700"
      >
        매칭 시작하기
      </Button>
    </Link>
  );
  return (
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
            {isLoggedIn ? matchingBtn : loginBtn}
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
  );
};

export default Banner;
