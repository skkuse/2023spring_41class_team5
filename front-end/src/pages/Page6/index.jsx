import React from "react";
import { Button, Input } from "components";

const Page6 = () => {
  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-dnfbitbitotf items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-5 items-center justify-end w-full">
          <div className="flex flex-col items-start justify-start max-w-[1160px] mx-auto md:px-5 w-full">
            <h2 className="text-white_A700 text-center">Sign Up</h2>
            <form className="flex flex-col gap-4 w-full">
              <Input
                className="border border-gray_600 border-solid rounded-[5px] text-white_A700 p-[10px]"
                placeholder="Username"
                required
              />
              <Input
                className="border border-gray_600 border-solid rounded-[5px] text-white_A700 p-[10px]"
                placeholder="Password"
                type="password"
                required
              />
              <Button
                className="cursor-pointer font-normal leading-[normal] text-center text-white_A700 text-xl"
                shape="RoundedBorder5"
                size="sm"
                variant="FillBlue70001"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
