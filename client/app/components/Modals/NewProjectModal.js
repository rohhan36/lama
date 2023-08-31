"use client";

import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { createProjectActions } from "../../store/createProjectSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const NewProjectModal = () => {
  const currentUser = localStorage.getItem("currentUser");
  const isCreateProjectOpen = useSelector((state) => state.createProject.isCreateProjectOpen);
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");

  const closeHandler = () => {
    dispatch(createProjectActions.toggleCreateProject());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (projectName.trim() === "") {
      toast.error("Project Name can not be empty");
      return;
    }

    console.log(currentUser);
    axios
      .post("http://localhost:8080/projects", {
        name: projectName,
        projectList: [],
        email: currentUser,
      })
      .then(() => {
        toast.success("Project created successfully");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Project creation failed");
      });
    setProjectName("");
    closeHandler();
  };

  if (!isCreateProjectOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 z-30 h-[100vh] w-full bg-neutral-600/20 flex justify-center items-center ">
      <form
        onSubmit={submitHandler}
        className="relative shadow-lg sm:w-2/5 w-full max-w-[780px] bg-white rounded-2xl border-2 flex flex-col p-5 gap-4">
        <button type="button" onClick={closeHandler} className="absolute top-5 right-7 text-lg">
          <AiOutlineClose />
        </button>
        <div className="text-2xl font-bold">Create New Project</div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Project name
          </label>
          <input
            maxLength="60"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            placeholder="Enter the name of project"
            value={projectName}
            id="name"
            type="text"
            className="p-2 border-[1px] h-8 border-neutral-400 rounded"
          />
        </div>
        <button className="self-end px-5 py-1 text-white rounded-lg bg-neutral-800">Create</button>
      </form>
    </div>
  );
};
export default NewProjectModal;
