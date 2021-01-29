import React, { useContext } from 'react';
import ItemContainer from '../../src/components/itemContainer';

import { Context } from "../../src/store/Store";

const ItemsPage = () => {

  const [state, dispatch] = useContext(Context);
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