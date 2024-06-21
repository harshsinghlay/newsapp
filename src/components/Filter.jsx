import React, { useState, useEffect } from 'react'
import { setArticles } from '../redux/articleSlice';
import { useDispatch } from 'react-redux'

function Filter() {
    const dispatch = useDispatch()
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const apiKey = 'xlQcHfAxU_JbL1qXBsEzfJM-np-Co_HJJ3u2FyqelGQJc3-M';

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const resetFilters = () => {
        setSelectedCategory("")
    }

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
                dispatch(setArticles(data?.news))
                console.log("Response is", data?.news);
            } catch (error) {
                dispatch(setArticles([]))
                console.error('Error fetching news:', error.message);
            }
        };

        fetchData();
    }, [selectedCategory, apiKey]);


    return (
        <section className=''>
            <div className=' flex flex-col gap-5 lg:gap-7 '>

                <section className='font-poppins bg-white border-[1px] border-gray-200 '>
                    <div className='bg-gray-100 text-base xl:text-lg py-3 px-4'>Filter By Categories</div>

                    <section className='px-4 py-3 border-b-2 border-gray-200'>
                        <div>
                            <ul className='bg-white py-2 space-y-2'>
                                {categoryOptions?.map((category, index) => (
                                    <li key={index} className='flex gap-3 items-center text-md'>
                                        <input
                                            id={category}
                                            type="radio"
                                            name="category"
                                            value={category}
                                            checked={selectedCategory === category}
                                            onChange={handleCategoryChange}
                                        />
                                        <label htmlFor={category} className='select-none'>{category}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className='px-4 py-3 border-b-2 border-gray-200'>
                        <section className='font-poppins flex gap-6'>
                            <button onClick={resetFilters} className=' px-4 py-1  xl:px-7  xl:py-2 bg-gray-300 rounded-sm '>Reset </button>
                        </section>
                    </section>

                </section>
            </div>
        </section>
    )
}

export default Filter