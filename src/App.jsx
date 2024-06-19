import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const apiKey = 'xlQcHfAxU_JbL1qXBsEzfJM-np-Co_HJJ3u2FyqelGQJc3-M';

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesUrl = `https://api.currentsapi.services/v1/available/categories?apiKey=${apiKey}`;

      try {
        const response = await fetch(categoriesUrl);
        const data = await response.json();
        setCategoryOptions(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [apiKey]);

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=en&' +
        `apiKey=${apiKey}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, [selectedCategory, apiKey]);

  return (
    <>
      <h1 className='bg-gray-600 text-white text-center py-4 mb-2'>App is Running </h1>
      <div className='p-4 bg-gray-200 flex justify-between'>
        <div>
          Showing {data?.length} news articles
        </div>
        <div>
          <select className='p-1 rounded-sm' name="" id="" onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All</option>
            {categoryOptions.map((value, index) => (
              <option value={value} key={index}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      {data.length > 0 ? (
        <div className='max-w-[90%] mx-auto mt-10 w-full h-full grid grid-cols-3 gap-4'>
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.description}
              img={item.image}
              category={item.category}
            />
          ))}
        </div>
      ) : (
        <div className='h-[70vh] bg-orange-200 flex justify-center items-center text-xl'>No Data found</div>
      )}
    </>
  );
}

export default App;
