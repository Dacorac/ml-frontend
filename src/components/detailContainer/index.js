import React from 'react';

import useDetail from '../../hooks/useDetail'
import DetailComponent from '../detailComponent'

const DetailContainer = ({ id }) => {
    const { data, isLoading, error } = useDetail(id);

    return ( 
        <DetailComponent 
            data={data}
            isLoading={isLoading}
            error={error}
        />
     );
}
 
export default DetailContainer;