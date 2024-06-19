import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const apiKey = 'ff1ae913181341d7b9e376a80f1dca1d';
    const url = `https://newsapi.org/v2/top-headlines?country=${'in'}&category=${"general"}&apiKey=${apiKey}&page=${1}&pageSize=${5}`

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log("Response is", response.articles);
        setData(response.articles)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
    <h1 className='bg-gray-600 text-white text-center py-4 mb-2'>App is Running</h1>
      {data?.length > 0 ? 
      <div className='w-full h-full grid grid-cols-3 gap-4'>
      {data.map((item) => (
        <Card
          title={item.title}
          content={item.description}
          img={item.urlToImage}
        />
      ))}
    </div> : 
    <div className='h-[70vh] bg-orange-200 flex justify-center items-center text-xl'>No Data found</div>
      }
    </>
  );
}

export default App;
