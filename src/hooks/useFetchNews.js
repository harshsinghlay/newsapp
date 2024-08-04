import React from 'react'
import { useQuery } from 'react-query'
import { fetchNews } from '../api/api'

function useFetchNews(category) {
    return useQuery({
        queryKey : ["news",category],
        queryFn : () => fetchNews(category),
        enabled : true,
       })
}

export default useFetchNews