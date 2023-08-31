"use client";

import { AiOutlineClose } from "react-icons/ai";
import { loginModalActions } from "../../store/loginModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginModal = () => {
  const isLoginModalOpen = useSelector((state) => state.loginModal.isLoginModalOpen);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [res, setRes] = useState([]);
  const [error, serError] = useState(null);
  const router = useRouter();

  const closeHandler = (e) => {
    dispatch(loginModalActions.toggleLoginModal());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    axios
      .get(`https://lamabackend.onrender.com/users/${email}`)
      .then((response) => {
        const user = response.data;
        if (!user[0]) {
          axios
            .post("https://lamabackend.onrender.com/users", {
              email,
              projects: [],
            })
            .catch((error) => {
              console.log(error);
              serError(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        serError(error);
      });

    if (!res)
      if (error) {
        toast.error("Something went wrong");
        return;
      }
    router.refresh();
    toast.success("Login Successfull");
    localStorage.setItem("currentUser", email);
    dispatch(loginModalActions.toggleLoginModal());
  };

  if (!isLoginModalOpen) {
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
        <div className="text-2xl font-bold">Login</div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
            }}
            placeholder="Enter your email before you start"
            value={email}
            id="name"
            type="email"
            className="p-2 border-[1px] h-8 border-neutral-400 rounded"
          />
        </div>
        <button className="self-end px-5 py-1 text-white rounded-lg bg-neutral-800">Login</button>
      </form>
    </div>
  );
};

export default LoginModal;
