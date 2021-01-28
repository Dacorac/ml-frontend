import React from 'react';
import fetchItemDetail from '../../services/detail.service'

import { useQuery } from "react-query"

const useDetail = (query) => {
    return useQuery([ query ], fetchItemDetail);
  };

const ItemDetail = ({id}) => {
    const { data, isLoading, error } = useDetail(id);
    return ( 
        <div>
            <h1>{id}</h1>
            <h1>DETAIL</h1>
        </div>
     
    );
}
 
export default ItemDetail;