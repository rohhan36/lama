"use client";

import { useState, useEffect } from "react";
import { createProjectActions } from "../store/createProjectSlice";
import { loginModalActions } from "../store/loginModalSlice";
import HomePageEmptyState from "./EmptyStates/HomePageEmptyState";
import HomePageSkeleton from "./EmptyStates/HomePageSkeleton";

import { useDispatch } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import ProjectItem from "./Project/ProjectItem";
import Logo from "./UI/Logo";

const HomePageClient = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    axios
      .get("http://localhost:8080/projects", {
        params: { email: currentUser },
      })
      .then((response) => {
        setProjects(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  const logoutHandler = () => {
    localStorage.removeItem("currentUser");
    location.reload();
  };

  const openLoginModal = () => {
    dispatch(loginModalActions.toggleLoginModal());
  };
  const openCreateProject = () => {
    dispatch(createProjectActions.toggleCreateProject());
  };

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  if (!currentUser) {
    return <HomePageEmptyState onClick={openLoginModal} isLoggedIn={false} />;
  }
  if (projects.length === 0) {
    return (
      <HomePageEmptyState onClick={openCreateProject} isLoggedIn={true} onLogout={logoutHandler} />
    );
  }

  return (
    <div className="h-[100vh] w-full py-7 px-10 flex flex-col items-center justify-start">
      <nav className="flex justify-between px-10 py-5 w-full fixed top-0 ">
        <Logo />
        <button
          onClick={logoutHandler}
          className="bg-black/90 text-white px-3 py-1 rounded-lg shadow-lg">
          Log Out
        </button>
      </nav>
      <div className="flex justify-between w-[80vw] mt-16">
        <div className="text-purple-700 font-bold text-4xl">Projects</div>
        <button
          onClick={openCreateProject}
          className="flex gap-2 justify-center items-center bg-black/90 text-white text-xl px-4 py-2
          rounded-xl">
          <div className="fill-black">
            <AiFillPlusCircle />
          </div>
          <div>Create New Project</div>
        </button>
      </div>
      <div className="w-[80vw] gap-10 mt-10 grid justify-center projectsList">
        {projects.map((item) => {
          return <ProjectItem key={item._id} projectData={item} />;
        })}
      </div>
    </div>
  );
};
export default HomePageClient;
