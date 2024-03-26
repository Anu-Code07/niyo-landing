import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 w-[100%] flex justify-center items-center h-[100%] z-10 bg-[#00000057]">
      <div className="loader z-10 opacity-100"></div>
    </div>
  );
};

export default Loader;
