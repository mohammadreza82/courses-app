import { notFound } from 'next/navigation';
import React from 'react'

interface IProduct {
    params: { categoryId: string, id: string };
    searchParams: {};
}

const Product = ({ params }: IProduct) => {
    console.log(params.categoryId, params.id);
    // parseInt => change str to num
    if (parseInt(params.id) > 100) {
return notFound()
    }
    return (
        <div>Product {params.categoryId} , {params.id}</div>
    )
}

export default Product 