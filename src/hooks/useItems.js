import { useQuery } from "react-query"
import fetchItems from '../services/items.service';

const useItems = (query) => {
    console.log(query)
    return useQuery([ query ], fetchItems);
};

export default useItems;