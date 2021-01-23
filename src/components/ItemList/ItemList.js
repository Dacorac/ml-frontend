import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css'

import { useQuery } from "react-query"

const ItemList = ({keyword}) => {
    const { data, isLoading, error, status } = useQuery({keyword: keyword});
    return (
        <div>
            <h1>{keyword}</h1>
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
                        price={item.price?.amount}
                        url={item.picture}
                    />
                ))}
                </ul>
            ) : null}
        </div>
    );
}
 
export default ItemList;