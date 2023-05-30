import React from "react";

import { Img, Text } from "components";

const Column = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[52px] mt-1 w-[11%] md:w-full">
          <div className="flex flex-row gap-1.5 items-start justify-between w-full">
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
        </div>
      </div>
    </>
  );
};

Column.defaultProps = { codedino: "CODE DINO" };

export default Column;
