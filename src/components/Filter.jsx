import React, { useState, useEffect } from "react";
import { setArticles } from "../redux/articleSlice";
import { useDispatch } from "react-redux";
import useFetchNews from "../hooks/useFetchNews";
import useFetchCategories from "../hooks/useFetchCategories";

function Filter() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: fetchedCategoryOptions, isError: categoriesFetchingError } =
    useFetchCategories();

  const { data: fetchedNews, isError: fetchedNewsError } =
    useFetchNews(selectedCategory);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const resetFilters = () => {
    setSelectedCategory("");
  };

  useEffect(() => {
    if (fetchedNews && !fetchedNewsError) {
      dispatch(setArticles(fetchedNews?.news));
    } else {
      dispatch(setArticles([]));
    }
  }, [fetchedNews]);

  return (
    <section className="">
      <div className=" flex flex-col gap-5 lg:gap-7 ">
        <section className="font-poppins bg-white border-[1px] border-gray-200 ">
          <p className="bg-gray-100 text-base xl:text-lg py-3 px-4">
            Filter By Categories
          </p>
          {/*================ Filter Options ==================*/}
          <section className="px-4 py-3 border-b-2 border-gray-200">
            <div>
              <ul className="bg-white py-2 space-y-2">
                {fetchedCategoryOptions &&
                  !categoriesFetchingError &&
                  fetchedCategoryOptions?.categories?.map((category, index) => (
                    <li
                      key={index}
                      className={`${
                        selectedCategory === category
                          ? "text-orange-500"
                          : "text-black"
                      } flex gap-3 items-center text-lg cursor-pointer`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span>{category}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          {/*=============== Button to Reset Filters ===============*/}
          <section className="px-4 py-3 border-b-2 border-gray-200">
            <section className="font-poppins flex gap-6">
              <button
                onClick={resetFilters}
                className=" px-4 py-1  xl:px-7  xl:py-2 bg-gray-300  rounded-sm active:bg-gray-400"
              >
                Reset{" "}
              </button>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Filter;
