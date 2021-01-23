import React from 'react';
import Item from './Item'
import { useQuery } from "react-query"

const fetchUsers = async () => {
    return fetch("https://ml-api-test-dc.herokuapp.com/api/items?q=Motorola")
        .then(res => res.json())
        .then(response => {
          const data = response.results
          if (Array.isArray(data)) {
              const items = data.map(item => {
                  const { thumbnail, title, price, id } = item
                  return { thumbnail, title, price, id }
              });
              return items
          }
        }
      );
  };

const ItemList = () => {
    const { data, isLoading, error, status } = useQuery("items", fetchUsers);
    return (
        <div>
            <p>Results:</p>
            {isLoading ? (
                <span>Loading...</span>
            ) : error ? (
                <span>Error: {error.message}</span>
            ) : data ? (
                <ul>
                <p></p>
                {data?.map((item) => (
                    <Item 
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.title}
                        price={item.price}
                        url={item.thumbnail}
                    />
                ))}
                </ul>
            ) : null}
            {console.log(data)}
        </div>
    );
}
 
export default ItemList;