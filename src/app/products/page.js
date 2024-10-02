'use client'

import React, { useEffect, useState } from 'react'

const Page = () => {
    const fetchProducts = async () => {
        const res = await fetch('/api/products')
        const products = await res.json();
        return products
    }

    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetchProducts().then((products) => {
            setProducts(products)
        })
    }, [])

    console.log("products = ", products)

  return (
    <div>
      <h1>Products</h1>
      {
        products?.map(product => (
            <div key={product?._id}>
                <h2>{product?.name}</h2>
                <h2>{product?.price}</h2>
                <h2>{product?.description}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default Page
