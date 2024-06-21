import React, { useState, useEffect } from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://euaa.europa.eu/sites/default/files/styles/width_600px/public/default_images/news-default-big.png?itok=NNXAZZTc';

function Card({ title = "null", content = "null", date = "null", img = "null" }) {
    const [imageSrc, setImageSrc] = useState(DEFAULT_PLACEHOLDER_IMAGE);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true; // To track if component is mounted

        // Reset state for new image load attempt
        setImageSrc(DEFAULT_PLACEHOLDER_IMAGE);
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
        <div className='w-full h-full group'>
            <div className="w-full h-full rounded overflow-hidden flex flex-col">
                {/* Blog Image */}
                <div className="relative h-[50%] overflow-hidden rounded-tl-sm rounded-tr-sm bg-cover bg-center group-hover:scale-110 duration-300"
                     style={{ backgroundImage: `url(${imageSrc})` }}>
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                    )}
                </div>
                {/* Blog Content */}
                <div className='flex flex-col justify-between h-[50%] mx-auto w-[92%] overflow-hidden'>
                    <div className="pt-4">
                        <p className=" line-clamp-2 pb-1 font-medium text-xl lg:hover:text-indigo-600 transition duration-500 ease-in-out ">
                            {title}
                        </p>
                        <p className="text-gray-500 text-md line-clamp-4">
                            {content}
                        </p>
                    </div>
                    <div className="pt-3 pb-2 flex flex-row items-center justify-between">
                        <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                            <span className="ml-1">{date}</span>
                        </span>
                        <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center lg:hover:text-indigo-600">
                            <span className="ml-1">Read More.</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
