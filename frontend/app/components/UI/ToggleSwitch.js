import { useState } from "react";

const ToggleSwitch = ({ onChange, value }) => {
  return (
    <div
      onClick={onChange}
      className={`h-7 p-1 w-12 relative rounded-full transition-all duration-150 cursor-pointer
      ${value ? "bg-purple-700" : "bg-neutral-500"}`}>
      <div
        className={`h-5 w-5 bg-white rounded-full top-1 transition-all duration-150
        ${value ? "ml-[20px] " : "ml-[1px]"}`}></div>
    </div>
  );
};
export default ToggleSwitch;
