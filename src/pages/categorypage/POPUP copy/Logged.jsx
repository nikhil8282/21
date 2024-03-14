import React, { useState } from 'react'
import './logged.css'
import Edit from './Edit'

function Logged({ logged0 }) {

    const [edited, setEdited] = useState(false)
    const edited1 = () => setEdited(true)
    const edited0 = () => setEdited(false)



    return (
        <>
            <div className="lwrapper" onClick={logged0} ></div>
            <div className="Lmain">
                <div className="pro"><span className="material-symbols-outlined">
                    account_circle
                </span>
                    <div className="comp">
                        <h4>Shubham Construction Co.</h4>
                        <p className='sme'>Greater Noida</p>
                    </div>
                </div>
                <div className="uright">
                    <p>City-Noida</p>
                    <p>State-Uttar Pradesh</p>
                </div>
                <div className="editnum">
                    <button type='submit' className='numbtn2'> +91 9284736542</button>
                    <button type='submit' onClick={edited1} className='edit0'><span className='tct'>Edit</span>   <span className="material-symbols-outlined">
                        edit_document
                    </span></button>
                    {edited && <Edit edited0={edited0} />}
                </div>
            </div>
        </>
    )
}

export default Logged;