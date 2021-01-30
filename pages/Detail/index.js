import React from 'react';
import { Container } from 'react-bootstrap';

import DetailContainer from '../../src/components/detailContainer'

const DetailPage = ({ match, location}) => {

    return ( 
        <Container>
            <DetailContainer id={match.params.id}/>
        </Container>
     );
}
 
export default DetailPage;