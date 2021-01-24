import React from 'react';

import { useQuery } from "react-query"

async function fetchItemDetail({ query }) {
    console.log(query)
    const url = `https://ml-api-test-dc.herokuapp.com/api/${query}`

    const response = await fetch(url)
    const results = await response.json();
    return results; 
  };
const useDetail = (id) => {
    return useQuery(["detail", { id }], fetchItemDetail);
  };

const ItemDetail = ({id}) => {
    const { data, isLoading, error } = useDetail(id);
    return ( 
        <div>
            <h1>{id}</h1>
            {console.log(data)}
        </div>
     
    );
}
 
export default ItemDetail;