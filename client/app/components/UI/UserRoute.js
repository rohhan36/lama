"use client";

import { LiaHomeSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";

const UserRoute = () => {
  const params = useSearchParams();
  const router = useRouter();
  const state = params.get("state");

  let step = "Upload";

  if (state === "widget-configuration") step = "Widget Configuration";

  if (state === "edit") step = "Transcript";

  const currentProjectName = useSelector((state) => state.currentProject.name);
  return (
    <div className="flex text-xl font-extrabold items-center gap-2 p-5 text-purple-700">
      <div onClick={() => router.push("/")}>
        <LiaHomeSolid className="text-2xl cursor-pointer" stroke="10" />
      </div>
      <span>/</span>
      <div>{currentProjectName}</div>
      <span>/</span>
      <div>{step}</div>
    </div>
  );
};
export default UserRoute;
