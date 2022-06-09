import React from 'react'
import "../styles/ProductReviews.css";
import ProductReviewCard from './ProductReviewCard';

const ProductReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
        {
            productReviews.map((item,index) => (
                <ProductReviewCard image={item.image} review={item.review} name={item.name} price={item.price} key={item.image} index={index} />
                
            ))
        }
    </div>
  )
}

export default ProductReviews