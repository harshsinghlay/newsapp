import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const apiKey = '18b97f8e-01b5-4ffe-afde-b0d060aeffda';
    const url = `https://content.guardianapis.com/search?q=football&api-key=${apiKey}`

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log("Response is", response.response.results);
        setData(response.response.results)
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
      {data.map((item,index) => (
        <Card
          key={index}
          title={item.pillarName}
          content={item.webTitle}
          img={item.webUrl}
        />
      ))}
    </div> : 
    <div className='h-[70vh] bg-orange-200 flex justify-center items-center text-xl'>No Data found</div>
      }
    </>
  );
}

export default App;
