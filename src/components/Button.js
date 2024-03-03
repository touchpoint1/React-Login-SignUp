import React from "react";

const Button = ({ btnName }) => {
  return (
    <button class="text-black font-bold bg-emerald-200 border-0 py-2 px-8 focus:outline-none hover:bg-green-300 rounded text-lg">
      {btnName}
    </button>
  );
};

export default Button;
