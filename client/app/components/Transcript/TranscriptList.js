"use client";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TranscriptItem from "./TranscriptItem";
import axios from "axios";

const TranscriptList = () => {
  const [transcripts, setTranscripts] = useState([]);
  const currentProjectId = useSelector((state) => state.currentProject._id);
  const isEmpty = transcripts.length === 0;

  useEffect(() => {
    axios
      .get("https://lamabackend.onrender.com/transcripts", {
        params: { projectId: currentProjectId },
      })
      .then((response) => {
        setTranscripts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentProjectId]);

  return (
    <div className="w-full rounded-xl border-[1px] shadow-md">
      <div className="flex justify-between text-black font-semibold border-b-[1px] px-8 py-3">
        <div>Name</div>
        <div>Upload Date & Time</div>
        <div>Actions</div>
      </div>
      <div className="flex flex-col justify-between items-center w-full">
        {isEmpty && (
          <div className="p-6 text-neutral-300 text-lg"> No data found for this project</div>
        )}
        {!isEmpty &&
          transcripts.map((item) => <TranscriptItem key={item._id} transcriptData={item} />)}
      </div>
    </div>
  );
};
export default TranscriptList;
