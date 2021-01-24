import React from 'react';
import { Container } from 'react-bootstrap';
import './DetailPage.css'
import ItemDetail from '../../src/components/ItemDetail/ItemDetail'

const DetailPage = () => {
    return ( 
        <div className="bg bg-color-gray-1">
            <Container>
                <ItemDetail id="MLA885089576" />
            </Container>
        </div>
     );
}
 
export default DetailPage;