import React from 'react'
import { useQuery } from 'react-query';
import { fetchCategories } from '../api/api';

function useFetchCategories() {
   return useQuery({
    queryKey : ["categoryOptions"],
    queryFn : fetchCategories,
    enabled : true,
   })
}

export default useFetchCategories