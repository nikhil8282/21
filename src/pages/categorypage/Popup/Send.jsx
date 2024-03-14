import React, { useState, useEffect } from 'react'
import './send.css'

function Send({ band }) {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])
    const handle = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="wrapperdd" onClick={band}></div>
            <form className="qmaindd" onSubmit={(e) => handle}>
                <div className="qq0dd"> <h1>Send Enquiry</h1>  <span onClick={band} className="material-symbols-outlined">
                    close
                </span></div>
                <div className="qq1dd">
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='nam' placeholder='Name'></input>
                    <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} className='mob' placeholder='Phone'></input>
                </div>
                <div className="qq2">
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='email' placeholder='Email'></input>
                </div>
                <textarea id="area" value={msg} onChange={(e) => setMsg(e.target.value)} rows="4" cols="50" placeholder='Your Message'></textarea><br />
                <button type='text' className='btnsend'>Send</button>
            </form>
        </>
    )
}

export default Send;