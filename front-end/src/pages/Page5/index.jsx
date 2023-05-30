import React from "react";
import { SignupForm } from "components";

const Page5 = () => {
  return (
    <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
      <div className="flex flex-col gap-5 items-center justify-end w-full">
        <div className="flex flex-col items-start justify-start max-w-[1160px] mx-auto md:px-5 w-full">
          <h2 className="text-white_A700 text-center">Sign Up</h2>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Page5;
