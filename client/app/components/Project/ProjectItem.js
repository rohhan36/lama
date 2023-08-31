"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { currentProjectActions } from "../../store/currentProjectSlice";

const ProjectItem = ({ projectData }) => {
  const { _id, name, createdAt, updatedAt, email } = projectData;
  const router = useRouter();
  const dispatch = useDispatch();

  const pfp = name[0].toUpperCase() + name[1].toUpperCase() || "";
  const date = new Date(updatedAt).getTime();
  const today = new Date().getTime();
  const diffInDays = Math.round((today - date) / (1000 * 3600 * 24));

  const clickHandler = () => {
    dispatch(
      currentProjectActions.setCurrentProject({
        _id,
        name,
        createdAt,
        updatedAt,
        email,
      })
    );
    router.push(`projects/?state=project`);
  };

  let lastUpdated;
  if (diffInDays === 0) {
    lastUpdated = "today";
  } else if (diffInDays <= 7) {
    lastUpdated = "few days ago";
  } else if (diffInDays > 7 && diffInDays < 31) {
    lastUpdated = "few weeks ago";
  } else if (diffInDays > 31 && diffInDays < 365) {
    lastUpdated = "few months ago";
  } else {
    lastUpdated = "few years ago";
  }

  return (
    <div
      onClick={clickHandler}
      className="cursor-pointer border-[1px] rounded-xl p-2 shadow-lg flex flex-row gap-2 hover:bg-neutral-100">
      <div className="h-20 w-20 bg-purple-700 rounded-lg flex justify-center items-center text-4xl text-white font-bold">
        {pfp}
      </div>
      <div className="flex justify-between flex-col">
        <div className="text-purple-700 font-extrabold mt-2">{name}</div>
        <div className="text-xs text-neutral-500 mb-1">Last edited {lastUpdated}</div>
      </div>
    </div>
  );
};
export default ProjectItem;
