import React from "react";
import { useNavigate } from "react-router-dom";
export default function ImageCard({ imageUrl, id }) {
  const navigate = useNavigate();
  const redirectToPage = () => {
    navigate(`/${id}`);
  };
  return (
    <div className=" flex justify-center">
      <img
        className="rounded-lg w-full h-full cursor-pointer"
        src={imageUrl}
        onClick={redirectToPage}
        alt=""
      />
    </div>
  );
}
