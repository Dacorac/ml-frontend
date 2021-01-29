import React from 'react';
import NumberFormat from 'react-number-format';

import fetchItemDetail from '../../services/detail.service'

import { Button } from 'react-bootstrap';
import { useQuery } from "react-query"

import './itemDetail.css'

const useDetail = (query) => {
    return useQuery([ query ], fetchItemDetail);
  };

const ItemDetail = ({id}) => {
    const { data, isLoading, error } = useDetail(id);
    return (
        <div className="detail-container">
            <div className="row">
                <div className="col-8 detail-img__content">
                    <img width="680" alt={data?.id} src={data?.picture} />
                </div>
                <div className="col-4">
                    <div className="padding-t-32 margin-b-16 font-14">
                        <span>{data?.condition} - {data?.sold_quatity} vendidos</span>
                    </div>
                    <div className="detail-specs padding-r-32">
                        <span className="padding-b-32 font-24 bold">
                            {data?.title}
                        </span>
                        <span className="padding-b-32 font-46 bold">
                            <NumberFormat value={data?.price.amount} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={data?.price.currency} />
                        </span>
                        <Button variant="primary" type="button" className="detail-specs_button">Comprar</Button>                    
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8 detail-description__content padding-l-32">
                    <span className="padding-b-32 font-28">Descripción del producto</span>
                    <span className="padding-b-32 font-16">{data?.description}</span>
                </div>
            </div>
        </div>
        );
}
 
export default ItemDetail;