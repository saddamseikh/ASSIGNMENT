import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../component/ImageCard";
export default function HomePage() {
  const [data, setDate] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
    );
    const allPhotosData = response.data.photos;
    console.log(allPhotosData);
    setDate(allPhotosData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="parent" className=" grid  gap-4 ml-6 mr-6 mt-4 mb-4 grid-cols-3">
      {data?.map((e, i) => {
        return <ImageCard imageUrl={e.url} id={e.id} key={i} />;
      })}
    </div>
  );
}
