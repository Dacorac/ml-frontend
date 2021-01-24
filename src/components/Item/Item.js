import React from 'react';
import './Item.css'

const Item = ({id, title, shipping, condition, price, url}) => {
    return ( 
        <div className="card">
            <div className="card-image margin-16">
                <img alt={title} src={url} />
            </div>
            <div className="margin-16">
                <div className="price-box padding-32">
                    <h1 className="font-24 ft-color-black">$ {price}</h1>
                    { shipping ? <img alt="shipping" src="/icon/shipping@2x.png"/> : null }
                </div>
                <p className="font-18 ft-color-black">{title}</p>
            </div>
            <div className="condition-box margin-16">
                <p className="ft-color-gray-3">{condition}</p>
            </div>
        </div>
     );
}
 
export default Item;