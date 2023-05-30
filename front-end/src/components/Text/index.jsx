import React from "react";

const variantClasses = {
  h1: "font-normal text-5xl sm:text-[38px] md:text-[44px]",
  h2: "font-normal sm:text-4xl md:text-[38px] text-[40px]",
  h3: "font-normal text-xl",
  h4: "font-normal text-base",
  h5: "font-normal text-[15px]",
  h6: "font-normal text-sm",
  body1: "font-normal text-[13px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
