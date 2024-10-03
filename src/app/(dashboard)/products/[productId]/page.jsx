'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProductDetailsPage = ({ params }) => {
    const [product, setProduct] = useState(null);
    const productId = params.productId;

    // console.log("productId = ", productId)

    const fetchProductDetails = async () => {
        const res = await fetch(`/api/products/${productId}`);
        const productData = await res.json();
        setProduct(productData);
    };

    useEffect(() => {
        if (productId) {
            fetchProductDetails();
        }
    }, [productId]);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            {product ? (
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 p-6">
                        <Image
                            src={product.img}
                            width={600}
                            height={500}
                            alt={product.name}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <p className="text-xl text-gray-600 mt-2">Price: ${product.price}</p>
                            <p className="text-gray-700 mt-4">{product.description}</p>
                        </div>
                        <div className="mt-6">
                            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                Add to Cart
                            </button>
                            <button className="w-full mt-2 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-lg text-gray-500">Loading product details...</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsPage;
