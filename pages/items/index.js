import React, { useContext } from 'react';
import * as QueryString from "query-string"
import { useQuery } from "react-query"
import { Link } from "react-router-dom";

import { Context } from "../../src/store/Store";

const fetchItems = async (query) => {
    console.log(query.queryKey[0])
    const url = `https://ml-api-test-dc.herokuapp.com/api/items?q=${query.queryKey[0]}`

    return await fetch(url)
        .then(res => res.json())
        .then(response => {
          const data = response.items
          if (Array.isArray(data)) {
              const items = data.map(item => {
                  const { condition, free_shiping, picture, title, price, id } = item
                  return { condition, free_shiping, picture, title, price, id }
              });
              return items
          }
        }
      );
  };

const useItems = (query) => {
    return useQuery([ query ], fetchItems);
  };

const ItemsPage = ({ match, location }) => {

    let parsed = QueryString.parse(location.search);
    
    const { data, isLoading, error } = useItems(parsed.search);

    const [state, dispatch] = useContext(Context);
    const { searchTerm } = state;

    return ( 
        <div>
            <p>
            <strong>Query Params: </strong>
            {parsed.search}
            {data?.map((item) => (
                <div>
                    <Link to={`/items/${item.id}`}>{item.id}</Link>                    
                </div>
            ))}
            {console.log(searchTerm)}
          </p>
        </div>
     );
}
 
export default ItemsPage;