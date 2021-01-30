import { useQuery } from "react-query"
import fetchItemDetail from '../services/detail.service'

const useDetail = (query) => {
    return useQuery([ query ], fetchItemDetail);
};

export default useDetail;