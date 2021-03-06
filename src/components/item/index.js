import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import './item.css'

const Item = ({id, title, shipping, condition, price, url}) => {
    return ( 
        <Link className="link" to={`/items/${id}`}>
            <div className="card">
                <div className="card-image margin-16">
                    <img alt={title} src={url} />
                </div>
                <div className="card-content margin-16">
                    <div className="price-box padding-bt-32">
                        <span className="font-24 ft-color-black">
                            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} />
                        </span>
                        <span>
                            { shipping ? <img alt="shipping" src="/icon/shipping@2x.png"/> : null }
                        </span>
                    </div>
                    <p className="font-18 ft-color-black">{title}</p>
                </div>
                <div className="condition-box margin-16">
                    <p className="ft-color-gray-3">{condition}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default Item;