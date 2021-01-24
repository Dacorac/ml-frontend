import React from 'react';
import { Container  } from 'react-bootstrap'
import './ItemList.css'

import Item from '../Item/Item'
import { useQuery } from "react-query"
import fetchItems from '../../services/items.service';

const useItems = (query) => {
    return useQuery(["items", { query }], fetchItems);
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
                            id={item.id}
                            key={item.id}
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