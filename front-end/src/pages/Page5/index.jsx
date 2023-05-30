import React from "react";
import { LoginForm, Text } from "components";

const Page5 = () => {
  return (
    <div className="bg-white flex flex-col font-dnfbitbitotf items-center justify-center mx-auto w-full h-screen">
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center max-w-[1160px] mx-auto md:px-5 w-full">
          <Text variant="h1" className="text-blue_gray_900 text-center font-extrabold mb-20">로그인</Text>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Page5;
