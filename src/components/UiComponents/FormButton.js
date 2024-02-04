import React from 'react'
import { Link } from 'react-router-dom'
const FormButton = ({name,NavigateTo}) => {
  return (
    <div className="tp-login-bottom">
    <Link to={`${NavigateTo}`} className="tp-login-btn w-100">
      {name}
    </Link>
  </div>
  )
}

export default FormButton