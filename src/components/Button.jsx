import React from 'react'

const Button = ({label,iconUrl,backgroundColor,borderColor,textColor,fullWitdh}) => {
  return (
    <button
        className={`flex justify-center items-center gap-2 
            px-7 py-4 border font-montserrat text-lg leading-none
            ${
              backgroundColor ? 
                `${backgroundColor} ${borderColor} ${textColor}`
                :
                "bg-coral-red  text-white"
            }
            rounded-full ${fullWitdh && "w-full"}
            `}
    >
       {label}
       {
        iconUrl && (
          <img 
            src={iconUrl} 
            alt="arrow" 
            className="ml-2 rounded-full w-5 h-5" 
          />
        )
       }
    </button>
  )
}

export default Button