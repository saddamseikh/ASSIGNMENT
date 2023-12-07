import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SinglePage.css";

export default function SinglePhoto() {
  const [data, setData] = useState();
  const { id } = useParams();
  const getData = async () => {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const singlePhoto = response.data.photo;
    setData(singlePhoto);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="bg" className="flex m-10 bg-blue-400 rounded-xl items-center">
      <div
        id="photo"
        className="w-1/2 m-8 ring ring-offset-slate-50 dark:ring-offset-slate-900 rounded-3xl"
      >
        <img
          className="rounded-3xl w-full h-full shadow-neutral-200 "
          src={data?.url}
        />
      </div>

      <div className=" text-white items-center m-8 justify-center">
        <h1 className="font-bold text-5xl pl-10 pr-14 pb-9">{data?.title}</h1>
        <p className="text-2xl pl-10 pr-14">{data?.description}</p>
      </div>
    </div>
  );
}
