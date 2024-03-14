import React from 'react'
import './aflogged.css'

function AfLogged({ out0 }) {
  return (
    <>
      <div className="afwrapper" onClick={out0}></div>
      <div className="Lmain5">
        <div className="pro6"><span className="material-symbols-outlined">
          account_circle
        </span>
          <div className="comp7">
            <h4>Shubham Construction Co.</h4>
            <p className='smer'>Greater Noida</p>
          </div>
        </div>
        <div className="uright8">
          <p>City-Noida</p>
          <p>State-Uttar Pradesh</p>
        </div>
        <div className="editnum9">
          <button type='submit' className='numbtn210'> +91 9284736542</button>
          <button type='submit' className='edit011'><span className='tmt'>Edit</span>   <span className="material-symbols-outlined">
            edit_document
          </span></button>
        </div>
        <button type='submit' className='logout01'>Logout</button>
      </div>
    </>
  )
}

export default AfLogged;