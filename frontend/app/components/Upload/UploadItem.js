"use client";

import { useDispatch } from "react-redux";
import { uploadProjectActions } from "../../store/uploadProjectSlice";
import Icon from "../UI/Icon";

const UploadItem = ({ icon, name, bg }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(uploadProjectActions.toggleUploadProject());
    dispatch(uploadProjectActions.setTitle(name));
  };
  return (
    <div
      onClick={clickHandler}
      className="md:w-64 w-52 md:p-5 p-3 border-1 border-neutral-300 border-[1px] shadow-md rounded-xl cursor-pointer hover:bg-neutral-50">
      <div className="flex items-center gap-5">
        <Icon bg={bg} icon={icon} />
        <div className="font-semibold text-neutral-700 text-sm md:text-lg">
          <div>Upload</div>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
};
export default UploadItem;
