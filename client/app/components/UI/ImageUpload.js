import PrimaryButton from "./PrimaryButton";
import { BiUpload } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState } from "react";
import Image from "next/image";

const ImageUpload = ({ onChange, value }) => {
  const imageRef = useRef(null);
  const [iconImage, setIconImage] = useState("");

  const imgContent = iconImage ? (
    <Image src={URL.createObjectURL(iconImage)} alt="bot icon" height="65" width="65" />
  ) : (
    <div className="h-16 w-16 bg-neutral-200 rounded-full"></div>
  );

  const uploadLabel = (
    <div className="flex items-center gap-1">
      <div>Upload Image</div>
      <BiUpload className="text-xl" />
    </div>
  );

  const uploadHandler = (e) => {
    e.preventDefault();
    imageRef.current.click();
  };

  const imageChangeHandler = async (e) => {
    const file = e.target.files[0];
    setIconImage(file);
    const base64 = await convertToBase64(file);
    onChange(base64);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="h-16 w-16 rounded-full overflow-hidden flex">{imgContent}</div>
        <div className="flex flex-col gap-1">
          <input
            type="file"
            accept=".jpeg ,.jpg ,.png"
            ref={imageRef}
            className="hidden"
            onChange={imageChangeHandler}
          />
          <PrimaryButton label={uploadLabel} onClick={uploadHandler} />
          <div className="text-sm text-neutral-500">Recomended Size: 48x48px</div>
        </div>
      </div>
      <div>
        {iconImage && (
          <button
            onClick={() => {
              setIconImage("");
              onChange("");
            }}
            className="border-2 py-1 flex gap-2 items-center px-3 rounded-lg border-neutral-400">
            {iconImage.name}
            <AiOutlineClose />
          </button>
        )}
      </div>
    </>
  );
};
export default ImageUpload;

const convertToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
