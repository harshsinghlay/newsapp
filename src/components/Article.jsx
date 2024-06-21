// The api doen't provide an endpont to fetch news by id , So we are using an alternative approach by storing articles into store and then get it from store.

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { defaultNewsPreview } from "../assets/index";

function Article() {
  const { id } = useParams();
  const articles = useSelector((state) => state.articles);
  const [article, setArticle] = useState(null);
  const [imageSrc, setImageSrc] = useState(defaultNewsPreview);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const item = articles?.find((item) => item.id === id);
    setArticle(item);
  }, []);

  useEffect(() => {
    let isMounted = true; // To track if component is mounted

    // Reset state for new image load attempt
    setImageSrc(defaultNewsPreview);
    setImageLoaded(false);

    const imgElement = new Image();
    imgElement.src = article?.image;

    imgElement.onload = () => {
      if (isMounted) {
        setImageSrc(article?.image);
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
  }, [article?.image]);

  function formatDate(inputDateString) {
    const parts = inputDateString.split(" ");
    const datePart = parts[0];
    const dateObj = new Date(datePart);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return article ? (
    <div className="w-full pt-16">
      <div className="py-10 max-w-[91%] mx-auto">
        {/*============ Article Image ============*/}
        <div className="w-full flex justify-center mb-4 relative rounded-sm overflow-hidden">
          <div
            className="h-[80vw] md:h-[35vw] w-full  bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}
          </div>
        </div>
        {/*============ Article Content and Author ========*/}
        <div className="w-full flex-col md:flex-row flex py-4 px-1 gap-5 ">
          <section className="grow">
            <div className="w-full mb-4 ">
              <h1 className="text-2xl font-bold">{article?.title}</h1>
            </div>
            <div>{article?.description}</div>
          </section>
          <section className="min-w-fit">
            <div className="flex flex-row mt-2">
              <div className="w-auto h-auto rounded-full border-2 border-pink-500 min min-w-fit">
                <img
                  className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                  alt="User avatar"
                  src={imageSrc}
                />
              </div>
              <div class="flex flex-col mb-2 ml-4 mt-1">
                <div className="text-gray-600 text-sm font-semibold line-clamp-1">
                  {article?.author}
                </div>
                <div className="flex w-full mt-1">
                  <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                    News Anchor
                  </div>
                  <div className="text-gray-400 font-thin text-xs line-clamp-1">
                    • {formatDate(article?.published)}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : null;
}

export default Article;
