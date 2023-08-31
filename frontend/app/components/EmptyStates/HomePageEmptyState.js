"use client";

import HomePageSVG from "../../../public/assets/HomePageSVG";
import { AiFillPlusCircle } from "react-icons/ai";
import Logo from "../UI/Logo";

const HomePageEmptyState = ({ onClick, isLoggedIn, onLogout }) => {
  return (
    <div className="w-full flex justify-center items-center p-5">
      {isLoggedIn && (
        <nav className="flex justify-between px-10 py-5 w-full fixed top-0 ">
          <Logo />
          <button
            onClick={onLogout}
            className="bg-black/90 text-white px-3 py-1 rounded-lg shadow-lg">
            Log Out
          </button>
        </nav>
      )}
      <div className="flex flex-col justify-center items-center gap-5 h-[100vh] w-full  max-w-4xl">
        <div className="text-purple-700 font-bold text-3xl md:text-4xl">
          {isLoggedIn ? "Create a New Project" : "Login to Create Project"}
        </div>
        <div className="md:h-[420px] md:w-[520px] h-[260px] w-[360px] lg:w-[620px] lg:h-[520px]">
          <HomePageSVG />
        </div>
        <div className="text-neutral-400 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </div>
        <button
          onClick={onClick}
          className="flex gap-2 justify-center items-center bg-black/90 text-white text-xl px-4 py-2
          rounded-xl">
          {isLoggedIn ? (
            <>
              <div className="fill-black">
                <AiFillPlusCircle />
              </div>
              <div>Create New Project</div>
            </>
          ) : (
            <div>Click here to Login</div>
          )}
        </button>
      </div>
    </div>
  );
};
export default HomePageEmptyState;
