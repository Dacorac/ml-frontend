import React from 'react';
import { Container } from 'react-bootstrap';

import DetailContainer from '../../src/components/detailContainer'

const DetailPage = ({ match, location}) => {

    return ( 
        <Container className="margin-t-16 margin-b-16">
            <DetailContainer id={match.params.id}/>
        </Container>
     );
}
 
export default DetailPage;