import React, {useEffect, useState} from 'react';
import {getProducts} from "../../servises/api.service";
import {IProduct} from "../../models/api.Model";
import Product from "../../product/product";

const ProductsComponents = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts().then(value => setProducts(value));

    })
    return (
        <div>
            {products.map((product, i) => (<Product item={product} key={product.id}/>))}
        </div>
    );
};

export default ProductsComponents;