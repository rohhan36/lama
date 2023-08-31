"use client";

import EditButton from "../UI/EditButton";
import DeleteButton from "../UI/DeleteButton";
import { useDispatch } from "react-redux";
import { currentTranscriptActions } from "../../store/currentTranscriptSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const TranscriptItem = ({ transcriptData }) => {
  const { name, description, createdAt, updatedAt, projectId, _id } = transcriptData;

  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  const dispatch = useDispatch();
  const router = useRouter();

  const editHandler = () => {
    dispatch(
      currentTranscriptActions.setCurrentTranscript({
        name,
        description,
        updatedAt,
        projectId,
        _id,
      })
    );

    router.push("projects/edit?state=edit");
  };

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8080/transcripts/${_id}`)
      .then((response) => {
        toast.success("Deleted Successfully");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete");
        location.reload();
      });
  };

  return (
    <div className="flex justify-between items-center text-sm border-b-[1px] px-8 py-2 w-full transition-all duration-100 hover:bg-neutral-100 ">
      <div className="w-1/3 flex justify-start">{name}</div>
      <div className="w-1/3 flex justify-center text-center">{`${day} ${months[month]} ${year} | ${hour}:${min}`}</div>
      <div className="flex justify-end items-center text-xs w-1/3 ">
        <EditButton onClick={editHandler} />
        <DeleteButton onClick={deleteHandler} />
      </div>
    </div>
  );
};
export default TranscriptItem;
