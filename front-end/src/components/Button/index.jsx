import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder5: "rounded-[5px]" };
const variants = {
  OutlineWhiteA700:
    "outline outline-[0.5px] outline-white_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillBlue70001: "bg-blue_700_01 text-white_A700",
  FillTealA700: "bg-teal_A700 text-white_A700",
};
const sizes = { sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""
        } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "OutlineWhiteA700",
    "FillWhiteA700",
    "FillBlue70001",
    "FillTealA700",
  ]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
