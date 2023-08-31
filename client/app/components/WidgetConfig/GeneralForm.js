"use client";

import FormInput from "./FormInput";
import PrimaryButton from "../UI/PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const GeneralForm = () => {
  const currentProjectId = useSelector((state) => state.currentProject._id);
  const [chatbotName, setChatbotName] = useState("");
  const [welcomeMessage, setWelcomeMsg] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [options, setOptions] = useState(null);

  useEffect(() => {
    axios
      .get("https://lamabackend.onrender.com/generalconfigs", {
        params: {
          projectId: currentProjectId,
        },
      })
      .then((response) => {
        setOptions(response.data[0]);
        setChatbotName(response.data[0].chatbotName);
        setWelcomeMsg(response.data[0].welcomeMessage);
        setInputPlaceholder(response.data[0].inputPlaceholder);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentProjectId]);

  console.log("general", options);

  const submitHandler = (e) => {
    e.preventDefault();

    if (chatbotName.trim() === "") {
      toast.error("Chatbot name can't be empty");
      return;
    }
    if (welcomeMessage.trim() === "") {
      toast.error("Welcome message name can't be empty");
      return;
    }
    if (inputPlaceholder.trim() === "") {
      toast.error("Input Placeholder name can't be empty");
      return;
    }

    const formData = {
      chatbotName,
      welcomeMessage,
      inputPlaceholder,
      projectId: currentProjectId,
    };
    if (!options) {
      axios
        .post("https://lamabackend.onrender.com/generalconfigs", { ...formData })
        .then((response) => {
          toast.success("Configurations updated");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Faild to update");
        });
      return;
    }

    axios
      .patch(`https://lamabackend.onrender.com/generalconfigs/${options._id}`, { ...formData })
      .then(() => {
        toast.success("Configurations updated");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Faild to update");
      });
    return;
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col gap-5 max-w-4xl">
        <FormInput
          label="Chatbot Name"
          note="This name will be visible to your customers"
          type="text"
          value={chatbotName}
          onChange={(e) => {
            setChatbotName(e.target.value);
          }}
        />
        <FormInput
          label="Welcome Message"
          note="Your customers will be greeted with this welcome message"
          type="text"
          value={welcomeMessage}
          onChange={(e) => {
            setWelcomeMsg(e.target.value);
          }}
        />
        <FormInput
          label="Input Placeholder"
          note="Write a placeholder for your input box, ( Example: ' Type message.. ' )"
          type="text"
          value={inputPlaceholder}
          onChange={(e) => {
            setInputPlaceholder(e.target.value);
          }}
        />
        <div className="self-end">
          <PrimaryButton label="Save" />
        </div>
      </form>
    </>
  );
};
export default GeneralForm;
