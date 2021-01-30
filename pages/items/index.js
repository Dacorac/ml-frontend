import React from 'react';
import ItemContainer from '../../src/components/itemContainer';

import { useAppContext } from "../../src/store/Store";

const ItemsPage = () => {

  const [state, dispatch] = useAppContext();
  const { searchTerm } = state;

  return ( 
    <div className="bg bg-color-gray-1">
        <ItemContainer 
          searchTerm={searchTerm} 
        />
    </div>
    );
}
 
export default ItemsPage;