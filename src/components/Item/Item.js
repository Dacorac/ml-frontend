import React from 'react';
import './Item.css'

const Item = ({id, title, description, price, url}) => {
    return ( 
        <div className="card">
            <div className="card-image">
                <img alt={title} src={url} />
            </div>
            <div>
                <h1>{price}</h1>
                <p>{description}</p>
            </div>
        </div>
     );
}
 
export default Item;