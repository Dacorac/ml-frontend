import React from 'react';
import ItemList from '../itemList'

import withErrorBoundary from '../../hoc/withErrorBoundary'
import withLoading from '../../hoc/withLoading'

const ItemEnhance = withErrorBoundary(withLoading(ItemList));

const ItemComponent = ({ data, isLoading, error }) => {
    return ( 
        <>
        <ItemEnhance data={data} isLoading={isLoading} error={error} />
        </>
    );
}
 
export default ItemComponent;