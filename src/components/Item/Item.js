import React from 'react';
import styles from './Item.module.css'

const Item = ({id, title, description, price, url}) => {
    return ( 
        <div className={styles.card}>
            <div className={styles.cardImage}>
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