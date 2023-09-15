import React from 'react'
import { star } from '../../assets/icons'

const ReviewCard = ({
    imgURL,
    customerName,
    rating,
    feedback
}) => {
  return (
    <div
        className='flex justify-center items-center flex-col'
    >
        <img 
            src={imgURL} 
            alt={customerName} 
            className="rounded-full object-cover w-[120px] h-[120px]" />
        <p
            className='info-text'
        >
            {feedback}
        </p>
        <div
            className=''
        >
            <img 
                src={star} 
                alt="star" 
                width={24} 
                height={24} 
                className='object-contain m-0' />
            <p
                className=''
            >
                ({rating})
            </p>
        </div>
    </div>
  )
}

export default ReviewCard