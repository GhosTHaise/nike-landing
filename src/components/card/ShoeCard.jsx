import React from 'react'

const ShoeCard = ({imgUrl,changeBigShoeImage,bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage == imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe )
        }
    }
  return (
    <div
        className={`border-2 rounded-xl
            ${bigShoeImage === imgUrl ? "border-coral-red" : "border-transparent"}
            cursor-pointer max-sm:flex-1 
        `}
        onClick={handleClick}
    >
        Show
        <img 
            src="" 
            alt="" 
            className="" 
        />
    </div>
  )
}

export default ShoeCard