import React from 'react';
import ItemList from './../../src/components/ItemList/ItemList'

const Home = () => {
    return ( 
        <div className="bg bg-color-gray-1">
            <ItemList keyword="Motorola g" />
        </div>
     );
}
 
export default Home;