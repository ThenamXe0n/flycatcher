import React,{useEffect, useState} from 'react'

const RangeCount = ({quantity,getRangeValue}) => {
    const [count,setcount] = useState(parseInt(quantity));

    useEffect(()=>{
      getRangeValue(count)
    },[count])
    
   
  return (
    <td className="tp-cart-quantity">
    <div className="tp-product-quantity mt-10 mb-10">
      <span className="tp-cart-minus" onClick={(e)=>{if(count>=0){setcount(count-1)}if(count<=0){setcount(10)}}}>
        <svg
          width={10}
          height={2}
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <input
        className="tp-cart-input"
        type="text"
        defaultValue={quantity}
        value={count}
      />
      <span className="tp-cart-plus" onClick={(e)=>{if(count>=0){setcount(count+1)}if(count>=10){setcount(1)}}}>
        <svg
          width={10}
          height={10}
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 5H9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  </td>
  )
}

export default RangeCount