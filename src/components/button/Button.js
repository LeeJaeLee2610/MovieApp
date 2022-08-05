import React from "react";

const Button = ({ onClick, className, children, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize bg-primary text-white w-full mt-auto hover:bg-blue-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
