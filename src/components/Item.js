import React from 'react';

const Item = ({id, title, description, price, url}) => {
    return ( 
        <div>
            <img alt={title} src={url} />
            <h1>{price}</h1>
            <p>{description}</p>
        </div>
     );
}
 
export default Item;