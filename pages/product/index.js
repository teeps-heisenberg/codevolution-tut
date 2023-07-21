import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <>
        <Link href='/'>Home Page</Link>
        <h1>Products</h1>
        <Link href='/product/1'>
            <h3>Product 1</h3>
        </Link>
        
        <Link href='/product/2'>
            <h3 >Product 2</h3>
        </Link>
        
        <Link href='/product/3' replace>
            <h3>Product 3</h3>
        </Link>

    </>
  )
}

export default ProductList