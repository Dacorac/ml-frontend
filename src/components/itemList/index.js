import React from 'react';
import { Container  } from 'react-bootstrap'

import Item from '../item'
import { useQuery } from "react-query"
import fetchItems from '../../services/items.service';

const useItems = (query) => {
    return useQuery([ query ], fetchItems);
  };
const ItemList = ({ keyword }) => {
    
    const { data, isLoading, error } = useItems(keyword);

    return (
        <div>
            {isLoading ? (
                <span>Loading...</span>
            ) : error ? (
                <span>Error: {error.message}</span>
            ) : data ? (
                <Container>
                {data?.map((item) => (
                    <div className="col-12">
                        <Item 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            shipping={item.free_shiping}
                            price={item.price?.amount}
                            condition={item.condition}
                            url={item.picture}
                        />
                    </div>
                ))}
                </Container>
            ) : null}
        </div>
    );
}
 
export default ItemList;