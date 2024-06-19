import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const apiKey = 'xlQcHfAxU_JbL1qXBsEzfJM-np-Co_HJJ3u2FyqelGQJc3-M';
    let url = 'https://api.currentsapi.services/v1/latest-news?' +
    'language=en&' +
    `apiKey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log("Response is", response);
        setData(response.news)
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
          {data?.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.description}
              img={item.image}
            />
          ))}
        </div> :
        <div className='h-[70vh] bg-orange-200 flex justify-center items-center text-xl'>No Data found</div>
      }
    </>
  );
}

export default App;
