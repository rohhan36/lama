"use client";

import { FaRss, FaYoutube, FaSpotify } from "react-icons/fa";
import { useSelector } from "react-redux";
import UploadItem from "./UploadItem";

export const icons = {
  "Youtube Video": {
    icon: <FaYoutube className="text-4xl text-white" />,
    bg: "bg-rose-600",
  },
  "Spotify Podcast": {
    icon: <FaSpotify className="text-7xl text-green-400" />,
    bg: "bg-black",
  },
  "RSS Feed": {
    icon: <FaRss className="text-3xl text-white translate-x-[1px] -translate-y-[1px] " />,
    bg: "bg-orange-500",
  },
};

const Upload = () => {
  const currentProjectName = useSelector((state) => state.currentProject.name);

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-4xl text-purple-700">{currentProjectName}</div>
      <div className="grid items-start gap-10 grid-cols-2 lg:grid-cols-3">
        <div>
          <UploadItem icon={icons["Youtube Video"].icon} name="Youtube Video" bg="bg-rose-600" />
        </div>
        <div>
          <UploadItem icon={icons["Spotify Podcast"].icon} name="Spotify Podcast" bg="bg-black" />
        </div>
        <div>
          <UploadItem icon={icons["RSS Feed"].icon} name="RSS Feed" bg="bg-orange-500" />
        </div>
      </div>
    </div>
  );
};
export default Upload;
