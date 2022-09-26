import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
//https://picsum.photos/v2/list?page=2&limit=100
//https://picsum.photos/v2/list

const getRandomAPI = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const AgainPhoto = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = useRef({});
  handleLoadMorePhotos.current = async () => {
    try {
      const images = await getRandomAPI(nextPage);
      const newPhotos = [...randomPhotos, ...images];
      setRandomPhotos(newPhotos || "");
      setNextPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadMorePhotos.current();
  }, [handleLoadMorePhotos]);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="grid grid-cols-5 gap-2 px-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={index}>
              <img src={item.download_url} alt={item.author} />
            </div>
          ))}
      </div>
      <button
        className="px-7 py-4 bg-blue-400 text-white rounded-full my-4"
        onClick={handleLoadMorePhotos.current}
      >
        Load more...
      </button>
    </div>
  );
};

export default AgainPhoto;
