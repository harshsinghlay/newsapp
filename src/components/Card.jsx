import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { defaultNewsPreview } from "../assets/index";

function Card({ id = "", title = "", content = "", img = "", category = "" }) {
  const [imageSrc, setImageSrc] = useState(defaultNewsPreview);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // To track if component is mounted

    // Reset state for new image load attempt
    setImageSrc(defaultNewsPreview);
    setImageLoaded(false);

    const imgElement = new Image();
    imgElement.src = img;

    imgElement.onload = () => {
      if (isMounted) {
        setImageSrc(img);
        setImageLoaded(true);
      }
    };

    imgElement.onerror = () => {
      if (isMounted) {
        setImageLoaded(true); // Mark as loaded to stop loading indicator
      }
    };

    // Cleanup function to handle unmounting
    return () => {
      isMounted = false;
    };
  }, [img]);

  return (
    <div className="w-full h-full group">
      <div className="w-full h-full rounded overflow-hidden flex flex-col">
        {/*============= Article Image =============*/}
        <div
          className="relative h-[50%] overflow-hidden rounded-tl-sm rounded-tr-sm bg-cover bg-center group-hover:scale-110 duration-300"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
          )}
          <div className="overflow-hidden ">
            <p className="text-sm absolute top-0 right-0 min-w-[30%] max-w-[40%] bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 lg:hover:bg-white lg:hover:text-indigo-600 transition duration-500 ease-in-out">
              <span className="  line-clamp-1 text-center">{category}</span>
            </p>
          </div>
        </div>
        {/*============= Article Content =============*/}
        <div className="h-[50%] mx-auto w-[92%]">
          <div className="pt-4 flex flex-col gap-2">
            <p className=" line-clamp-2 font-medium text-xl lg:hover:text-indigo-600 transition duration-500 ease-in-out ">
              {title}
            </p>
            <p className="text-gray-500 lg:hover:text-gray-700 text-md line-clamp-4 cursor-pointer">
              <Link to={`article/${id}`}>{content}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
