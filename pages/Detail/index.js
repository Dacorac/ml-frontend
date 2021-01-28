import React from 'react';
import ItemDetail from '../../src/components/itemDetail'

const DetailPage = ({ match, location}) => {

    return ( 
        <div>
            {console.log(match)}
            <ItemDetail id={match.params.id} /> 
        </div>
     );
}
 
export default DetailPage;