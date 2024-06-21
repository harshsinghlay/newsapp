import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ListArticles from "./ListArticles.jsx";

function Home() {
  const [showToggleFilter, setShowToggleFilter] = useState(false);

  const toggleFilter = () => {
    setShowToggleFilter(!showToggleFilter);
  };

  useEffect(() => {
    if (showToggleFilter) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showToggleFilter]);

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="max-w-[91%] mx-auto grid grid-cols-12 gap-7 py-8">
        {/*============== Filter Options ==============*/}
        <section className="hidden lg:block  col-span-3 ">
          <Filter />
        </section>

        {/*============== News Articles ==============*/}
        <section className="col-span-12 lg:col-span-9 ">
          <ListArticles toggleFilter={toggleFilter} />
        </section>
      </div>

      {/*============ Filter Options for Smaller devices ============*/}
      <div
        className={`overflow-scroll  border-y-[1px] border-gray-400  h-screen w-[60%]  sm:w-[50%] md:w-[40%] bg-white px-4 pt-24 pb-14 duration-500 absolute overflow-y-auto top-0 ${
          showToggleFilter ? "left-0" : "left-[-100%] "
        }`}
      >
        <Filter />
      </div>
    </section>
  );
}

export default Home;
