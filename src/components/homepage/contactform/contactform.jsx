import React, { useState } from 'react'
import './contactform.css'
import { useDispatch } from 'react-redux';
import { setGetInTouch } from '../../../redux/actions/getintouchAction'
// import axios from 'axios';

const Contactform = () => {
    const dispatch = useDispatch('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setNumber] = useState('')
    const [msg, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setGetInTouch(name, email, phone, msg))
        // axios.post('http://localhost:8000/api/auth/get-in-touch-with-us', { name, email, phone, msg })
    }
    return (
        <div>
            <div className='contactform-main'>
                <p className='cf-p1'>Get in touch with us</p>
                <div className='contactform-inner'>
                    <form onSubmit={handleSubmit}>
                        <div id='cf-inner'>
                            <div className='cf-inner-two'>
                                <input className='my-r' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
                                <input className='my-r-resp' type='number' placeholder='Phone no.' onChange={(e) => setNumber(e.target.value)}></input>
                            </div>
                            <div className='cf-inner-two'>
                                <input className='cf-mail' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className='cf-inner-two'>
                                <textarea className="cf-message" type="text" cols="30" rows="3"
                                    placeholder="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button type='submit' className='contact-form-btn'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactform;
