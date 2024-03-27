import React from 'react'
import { Link } from 'react-router-dom'
const FormButton = ({name,NavigateTo,type,size}) => {
  return (
    <button className="tp-login-bottom" style={{width:`${size}`}} type={type}>
    <p className="tp-login-btn w-100">
      {name}
    </p>
  </button>
  )
}

export default FormButton