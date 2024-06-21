import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DummyCard from "./DummyCard";
import Card from "./Card";
import { HiBars3 } from "react-icons/hi2";

function ListArticles({ toggleFilter }) {
  const articles = useSelector((state) => state.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const itemsOnCurrPage = articles.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles?.length > 0) {
      setLoading(false);
    }
  }, [articles?.length]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-6">
      {/*=========== Sort By Buttons ===========*/}
      <div className="bg-gray-100 flex justify-end sm:justify-between items-center py-7 px-4 sm:px-6 font-poppins text-gray-800">
        <div className="hidden sm:block">
          Showing {itemsOnCurrPage.length} of {articles?.length} items
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center text-sm px-3 sm:px-5 md:text-base py-3 gap-1 sm:gap-4 rounded-full bg-gray-600 sm:font-light text-white  "
            onClick={toggleFilter}
          >
            <span>
              <HiBars3 className="text-xl sm:4xl " />{" "}
            </span>
            <span className="tracking-wider">Filters</span>
          </button>
        </div>
      </div>

      {/*=============== Articles Listing ===============*/}
      <div>
        {!loading ? (
          itemsOnCurrPage?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {itemsOnCurrPage?.map((item) => (
                <div
                  key={item.id}
                  className="h-[450px] shadow-gray-400 shadow-md border-black overflow-hidden rounded-sm bg-white  lg:hover:scale-105 transition-transform duration-300 "
                >
                  <Card
                    title={item.title}
                    id={item.id}
                    category={item.category[0]}
                    content={item.description}
                    img={item.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[10vh] xl:min-h-[30vh] flex justify-center items-center text-center text-xl text-gray-500 tracking-wider">
              No Items Found
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: 10 })?.map((item, index) => (
              <div key={index}>
                <DummyCard />
              </div>
            ))}
          </div>
        )}
      </div>

      {/*=============== Pagination Buttons ===============*/}
      <div>
        <div className=" bg-gray-100 flex flex-col gap-3 lg:flex-row justify-between items-center py-5 px-6 font-poppins text-gray-800 text-sm text-normal sm:text-base">
          <div>
            Showing {currentPage}-{totalPages} of {articles?.length} items
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevPage}
              className="p-4 bg-white rounded-sm active:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={nextPage}
              className="p-4 bg-white rounded-sm active:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListArticles;
