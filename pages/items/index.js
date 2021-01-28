import React, { useContext } from 'react';

import { Context } from "../../src/store/Store";
import ItemList from '../../src/components/itemList'

const ItemsPage = () => {

  const [state, dispatch] = useContext(Context);
    const { searchTerm } = state;

    return ( 
      <div className="bg bg-color-gray-1">
          <ItemList keyword={searchTerm} />
      </div>
     );
}
 
export default ItemsPage;