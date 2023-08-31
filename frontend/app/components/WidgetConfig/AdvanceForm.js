"use client";

import FormInput from "./FormInput";
import PrimaryButton from "../UI/PrimaryButton";
import ToggleSwitch from "../UI/ToggleSwitch";
import ImageUpload from "../UI/ImageUpload";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdvanceForm = () => {
  const currentProjectId = useSelector((state) => state.currentProject._id);

  const [options, setOptions] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [chatHeight, setChatHeight] = useState(0);
  const [showSources, setShowSources] = useState(false);
  const [chatIconSize, setChatIconSize] = useState("48");
  const [position, setPosition] = useState("48");
  const [bottomDistance, setBottomDistance] = useState(0);
  const [horizontalDistance, setHorizontalDistance] = useState(0);
  const [botIcon, setBotIcon] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/advanceconfigs", {
        params: {
          projectId: currentProjectId,
        },
      })
      .then((response) => {
        console.log(response.data);
        setOptions(response.data[0]);
        setPrimaryColor(response.data[0].primaryColor);
        setFontColor(response.data[0].fontColor);
        setFontSize(response.data[0].fontSize);
        setChatHeight(response.data[0].chatHeight);
        setShowSources(response.data[0].showSources);
        setChatIconSize(response.data[0].chatIconSize);
        setPosition(response.data[0].position);
        setBottomDistance(response.data[0].bottomDistance);
        setHorizontalDistance(response.data[0].horizontalDistance);
        setBotIcon(response.data[0].botIcon);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentProjectId]);

  const imageChangeHandler = (base64Img) => {
    setBotIcon(base64Img);
  };

  const toggleHandler = () => {
    setShowSources((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      primaryColor,
      fontColor,
      fontSize,
      chatHeight,
      showSources,
      chatIconSize,
      position,
      bottomDistance,
      horizontalDistance,
      projectId: currentProjectId,
    };
    if (!options) {
      axios
        .post("http://localhost:8080/advanceconfigs", { ...formData })
        .then(() => {
          toast.success("Configurations updated ");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to update");
        });
      return;
    }
    axios
      .put(`http://localhost:8080/advanceconfigs/${options._id}`, { ...formData })
      .then(() => {
        toast.success("Configurations updated ");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update");
      });
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col gap-5 max-w-4xl">
        <FormInput
          label="Primary Color"
          note="Enter the HEX code of your primary color"
          type="text"
          value={primaryColor}
          onChange={(e) => {
            setPrimaryColor(e.target.value);
          }}
        />
        <FormInput
          label="Font Color"
          note="Enter the HEX code of your font color"
          type="text"
          value={fontColor}
          onChange={(e) => {
            setFontColor(e.target.value);
          }}
        />
        <FormInput
          label="Font Size (in px)"
          note="Enter the font size in px"
          type="number"
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
          }}
        />
        <FormInput
          label="Chat Height (in % of total screen)"
          note="Enter the height of the chat box in terms of screen %"
          type="number"
          value={chatHeight}
          onChange={(e) => {
            setChatHeight(e.target.value);
          }}
        />
        <div className="w-full flex justify-between items-center">
          <div>
            <div className="font-bold">Show Sources</div>
            <div className="text-sm text-neutral-500">Set your prefrences</div>
          </div>
          <ToggleSwitch onChange={toggleHandler} value={showSources} />
        </div>
        <hr />
        <div className="text-purple-700 font-bold">Chat Icon</div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="icon-size" className="font-bold">
              Chat Icon Size
            </label>
            <select
              onChange={(e) => setChatIconSize(e.target.value)}
              className="border-2 focus:outline-purple-700 p-1 rounded-lg">
              <option value="48" defaultValue={chatIconSize === "48"}>
                Small (48x48 px)
              </option>
              <option value="56" defaultValue={chatIconSize === "56"}>
                Medium (56x56 px)
              </option>
              <option value="64" defaultValue={chatIconSize === "64"}>
                Large (64x64 px)
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="icon-size" className="font-bold">
              Position on Screen
            </label>
            <select
              onChange={(e) => setPosition(e.target.value)}
              className="border-2 focus:outline-purple-700 p-1 rounded-lg ">
              <option value="br" defaultValue={position === "br"}>
                Bottom Right
              </option>
              <option value="bl" defaultValue={position === "bl"}>
                Bottom Left
              </option>
              <option value="tr" defaultValue={position === "tr"}>
                Top Right
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-5 flex-col sm:flex-row sm:gap-10">
          <FormInput
            label="Distance from Bottom (in px)"
            note="Enter the diatance from bottom in px"
            type="number"
            value={bottomDistance}
            onChange={(e) => {
              setBottomDistance(e.target.value);
            }}
          />
          <FormInput
            label="Horizontal Distance (in px)"
            note="Enter the horizontal distance in px"
            type="number"
            value={horizontalDistance}
            onChange={(e) => {
              setHorizontalDistance(e.target.value);
            }}
          />
        </div>
        <hr />
        <div className="text-purple-700 font-bold">Bot Icon</div>
        <ImageUpload const onChange={imageChangeHandler} value={botIcon} />
        <div className="self-end">
          <PrimaryButton label="Save" />
        </div>
      </form>
    </>
  );
};
export default AdvanceForm;
