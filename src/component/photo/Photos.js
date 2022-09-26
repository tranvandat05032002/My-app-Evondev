import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
//https://picsum.photos/v2/list
//https://picsum.photos/v2/list?page=2&limit=100
const getListPhoto = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const Photos = () => {
  const [randomPhoto, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = useRef({});

  handleLoadMorePhotos.current = async () => {
    const images = await getListPhoto(nextPage);
    const newPhotos = [...randomPhoto, ...images];
    setRandomPhoto(newPhotos);
    setNextPage((prev) => prev + 1);
  };
  useEffect(() => {
    handleLoadMorePhotos.current();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhoto.length > 0 &&
          randomPhoto.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white shadow-md rounded-lg w-[300px] h-[300px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <button
        className="bg-cyan-400 text-white px-8 py-4 rounded-full"
        onClick={handleLoadMorePhotos.current}
      >
        Load more ...
      </button>
    </div>
  );
};

export default Photos;
