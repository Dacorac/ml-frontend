import React from 'react';
import { Container  } from 'react-bootstrap'

import Item from '../item'

import withErrorBoundary from '../../hoc/withErrorBoundary'
import withLoading from '../../hoc/withLoading'

const ItemComponent = ({ data, isLoading, error }) => {
    return ( 
        <Container className="margin-t-16 margin-b-16">
        {data?.map((item) => (
            <div key={item.id} className="row">
                <div  key={item.id}className="col-12">
                    <Item 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        shipping={item.free_shiping}
                        price={item.price?.amount}
                        condition={item.condition}
                        url={item.picture}
                    />
                </div>
            </div>
        ))}
        </Container>
    );
}
 
export default withErrorBoundary(withLoading(ItemComponent));