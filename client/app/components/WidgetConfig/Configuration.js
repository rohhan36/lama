import ConfigOption from "./ConfigOption";
import { useState, useEffect } from "react";
import GeneralForm from "./GeneralForm";
import AdvanceForm from "./AdvanceForm";
import axios from "axios";
import { useSelector } from "react-redux";

const Configuration = () => {
  const [option, setOption] = useState("general");

  const optionClickHandler = (id) => {
    setOption(id);
  };

  let form = <GeneralForm />;

  if (option === "advance") {
    form = <AdvanceForm />;
  }

  return (
    <div className="flex flex-col gap-8 w-[70vw]">
      <div className="font-bold text-4xl text-purple-700">Configuration</div>
      <div className="flex gap-8 border-b-2">
        <ConfigOption label="General" option={option} id="general" onClick={optionClickHandler} />
        <ConfigOption label="Advance" option={option} id="advance" onClick={optionClickHandler} />
      </div>
      {form}
    </div>
  );
};

export default Configuration;
