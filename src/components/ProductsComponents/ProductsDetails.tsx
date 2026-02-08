import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProduct} from "../../servises/api.service";
import {IProduct} from "../../models/api.Model";
const ProductsDetails = () => {
    let{id}= useParams();
    const [product, setProduct] = useState<IProduct| null>()
    useEffect(() => {
        if(id) {
            getProduct(id).then(value => setProduct(value))

        }

    })
    return (
        <div>
            {product?.title}<br/>
            {product?.description}<br/>
            {product?.brand}<br/>
            {product?.category}<br/>
            {product?.discountPercentage}<br/>
            {product?.price}<br/>
            {product?.weight}<br/>
        </div>
    );
};

export default ProductsDetails;