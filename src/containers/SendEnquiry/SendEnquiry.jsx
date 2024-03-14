import React, { useState } from 'react'
import './sendenquiry.css'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

function Send({ open, setOpen }) {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSendEnquiry = (e) => {
        e.preventDefault()
    }

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth={true} // Set to true to make the dialog take up the full width
            maxWidth="sm"
        >
            <DialogContent>
                <form className="send-enquery-form">
                    <div className="se-popup-heading">
                        <h1>Send Enquiry</h1>
                    </div>
                    <div className="sep-text-field">
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'></input>
                        <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone'></input>
                    </div>
                    <div className="sep-text-field">
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='email' placeholder='Email'></input>
                    </div>
                    <div className="sep-textarea">
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message'></textarea>
                    </div>
                    <button className='sep-send-btn' onClick={handleSendEnquiry}>Send</button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Send;