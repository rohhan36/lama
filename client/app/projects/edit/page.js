"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import PrimaryButton from "../../components/UI/PrimaryButton";
import SecondaryButton from "../../components/UI/SecondaryButton";
import { toast } from "react-hot-toast";

const EditPage = () => {
  const currentTranscript = useSelector((state) => state.currentTranscript);
  const router = useRouter();
  console.log(currentTranscript);

  const submitHandler = () => {
    if (transcriptName.trim() === "") {
      toast.error("Name can't be empty");
      return;
    }
    if (transcript.trim() === "") {
      toast.error("Description can't be empty");
      return;
    }

    axios
      .patch(`http://localhost:8080/transcripts/${currentTranscript._id}`, {
        name: transcriptName,
        description: transcript,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Updated Successfully");
        router.back();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Faild to update");
      });
  };

  const [transcriptName, setTranscriptName] = useState("");
  const [transcript, setTranscript] = useState("");
  useEffect(() => {
    setTranscriptName(currentTranscript.name);
    setTranscript(currentTranscript.description);
  }, [currentTranscript.description, currentTranscript.name]);

  return (
    <div className="p-8 flex flex-col gap-5 md:w-[70vw] max-w-4xl">
      <div className="text-4xl text-purple-700 font-bold ">Edit Transcript</div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-bold">
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
        <label htmlFor="name" className="font-bold ">
          Description
        </label>
        <textarea
          type="text"
          resize="none"
          onChange={(e) => {
            setTranscript(e.target.value);
          }}
          value={transcript}
          className="p-2 border-[1px] border-neutral-400 rounded h-[50vh] overflow-y-auto focus:outline-purple-700"></textarea>
      </div>
      <div className="self-end flex gap-3">
        <SecondaryButton
          label="Cancel"
          onClick={() => {
            router.back();
          }}
        />
        <PrimaryButton label="Save" onClick={submitHandler} />
      </div>
    </div>
  );
};
export default EditPage;
