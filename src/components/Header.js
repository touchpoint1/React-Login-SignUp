import React from "react";

const Header = ({ text }) => {
  return (
    <div>
      <h2 class="text-emerald-400 text-center text-2xl font-bold title-font mb-5">{text}</h2>
    </div>
  );
};

export default Header;
