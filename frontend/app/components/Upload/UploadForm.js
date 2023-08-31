"use client";

import { icons } from "./Upload";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { uploadProjectActions } from "../../store/uploadProjectSlice";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Icon from "../UI/Icon";

const UploadForm = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.uploadProject.title);
  const isFormOpen = useSelector((state) => state.uploadProject.isUploadProjectOpen);
  const currentProject = useSelector((state) => state.currentProject);

  const [transcriptName, setTranscriptName] = useState("");
  const [transcript, setTranscript] = useState("");

  const closeHandler = () => {
    dispatch(uploadProjectActions.toggleUploadProject());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (transcriptName.trim() === "") {
      toast.error("Name can't be empty");
      return;
    }

    if (transcript.trim() === "") {
      toast.error("Description can't be empty");
      return;
    }

    axios
      .post("http://localhost:8080/transcripts", {
        name: transcriptName,
        description: transcript,
        projectId: currentProject._id,
      })
      .then((response) => {
        toast.success("Uploaded Successfully");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to upload");
      });

    setTranscript("");
    setTranscriptName("");
    closeHandler();
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 z-30 h-[100vh] w-full bg-neutral-600/20 flex justify-center items-center ">
      <form
        onSubmit={submitHandler}
        className="relative shadow-lg sm:w-2/3 w-full max-w-[780px] bg-white rounded-2xl border-2 flex flex-col p-5 gap-4">
        <button type="button" onClick={closeHandler} className="absolute top-5 right-7 text-lg">
          <AiOutlineClose />
        </button>
        <div className="flex gap-3 items-center">
          {title && <Icon bg={icons[title].bg} icon={icons[title].icon} />}
          <div className="text-2xl font-bold">Upload {title}</div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            maxLength="70"
            onChange={(e) => {
              setTranscriptName(e.target.value);
            }}
            id="name"
            type="text"
            value={transcriptName}
            className="p-2 border-[1px] h-8 border-neutral-400 rounded focus:outline-purple-700"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Description
          </label>
          <textarea
            type="text"
            onChange={(e) => {
              setTranscript(e.target.value);
            }}
            value={transcript}
            className="p-2 border-[1px] border-neutral-400 rounded h-56 overflow-y-auto focus:outline-purple-700"></textarea>
        </div>
        <button className="self-end px-5 py-1 text-white rounded-lg bg-neutral-800">Upload</button>
      </form>
    </div>
  );
};
export default UploadForm;
