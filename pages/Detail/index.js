import React from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from '../../src/components/itemDetail'

const DetailPage = ({ match, location}) => {

    return ( 
        <Container>
            <ItemDetail id={match.params.id} /> 
        </Container>
     );
}
 
export default DetailPage;