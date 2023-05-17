import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NotFound.css"
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found">
        <h1 className="not_found_heading m-0 mb-1">Lost your way?</h1>
        <p className="not_found_text">Sorry, we can't find that page. You will find lots to explore on the home page.</p>
        <button className="not_found_button" onClick={()=>{navigate("/home")}}>Home</button>
        <div className="not_found_error_text">Error Code - <span className="font-bold">404</span></div>
    </div>
  )
}

export default NotFound