import React from 'react'
import { useRouter } from 'next/router'
const Review = () => {
    const router = useRouter()
    const productId = router.query.productId;
    return (
    <h1>Reviews for Product {productId} </h1>
  )
}

export default Review