import React from "react";

import { Img, Text } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "store/reducer";

const Headercodedino = (props) => {
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameBox = (
    <>
      <Text
        className="font-pretendard md:ml-[0] ml-[893px] md:mt-0 my-4 text-center text-white_A700"
        variant="body1"
      >
        안녕하세요 {userName}
      </Text>
      <Text
        className="cursor-pointer font-pretendard md:ml-[0] ml-[37px] mr-[72px] md:mt-0 my-4 text-center text-white_A700"
        variant="body1"
        onClick={() => {
          dispatch(logout());
          navigate("/", { replace: true });
        }}
      >
        로그아웃
      </Text>
    </>
  );
  const loginBox = (
    <>
      <Link to="page5">
        <Text
          className="font-pretendard md:ml-[0] ml-[893px] md:mt-0 my-4 text-center text-white_A700"
          variant="body1"
        >
          {props?.one}
        </Text>
      </Link>
      <Link to="page6">
        <Text
          className="font-pretendard md:ml-[0] ml-[37px] mr-[72px] md:mt-0 my-4 text-center text-white_A700"
          variant="body1"
        >
          {props?.two}
        </Text>
      </Link>
    </>
  );
  return (
    <>
      <header className={props.className}>
        <Link
          to="/"
          className="flex flex-row gap-1.5 items-start justify-center mb-2 md:ml-[0] ml-[60px] md:mt-0 mt-3 w-[11%] md:w-full"
        >
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
        </Link>
        {userName ? userNameBox : loginBox}
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
