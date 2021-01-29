import React from 'react';
import ItemComponent from '../itemComponent';

import useItems from '../../hooks/useItems'

const ItemContainer = ({searchTerm}) => {

    const { data, isLoading, error } = useItems(searchTerm);
  
    return (  
        <ItemComponent 
            data={data}
            isLoading={isLoading}
            error={error}
        />
    );
}
 
export default ItemContainer;