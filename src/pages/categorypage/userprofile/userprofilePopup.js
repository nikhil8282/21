import React, { useState, useRef, useEffect } from 'react';
import './userprofilePopup.css';
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaRegCheckSquare } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePasswordUser} from '../../../redux/actions/userAction';
import { logout } from '../../../redux/reducers/userReducer';
import { loggedUser } from '../../../redux/actions/userAction';

function UserProfilePopup() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(changePasswordUser({email,userName, password, confirm_password}));
    console.log("Password Changed Successfully");
  };

  const handleLogout = async () => {
    dispatch(logout);
    console.log("Logout Successfully")
  };

  const [isOpen, setIsOpen] = useState(false);
  const [notOpen, setNotOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setNotOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup1 = (e) => {
    // Prevent the event from propagating to the parent elements
    e.stopPropagation();
    setNotOpen(!notOpen);
  };
  //fetch data  by Api
  async function Fetch_api() {
    dispatch(loggedUser());
}

  return (
    <div>
      <button onClick={togglePopup}>User</button>
      {isOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <p><CgProfile /></p>
            <p>${data[i].userName}</p>
          </div>
          <div className='modalemail'>${data[i].email}</div>
          <div className='modalprofile'>
            <p><FaRegEdit /></p>
            <button onClick={togglePopup1}>Edit Profile
              {notOpen && (
                <div className="modal1" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-content1">
                    <form onSubmit={handleSubmit}>
                    <div className='modalprofile'>
                      <p><FaRegEdit /></p>
                      <p>Edit Profile</p>
                    </div>
                    <div className='modal1email'>
                      <div className='modal2'>
                        Email Address/Phone no
                        <input type='text' placeholder='Enter your Email Address' onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className='modal21'>
                        User name
                        <input type='text' placeholder='Enter your User name' onChange={(e) => setUserName(e.target.value)} />
                      </div>
                      <div className='modal21'>
                        New Password
                        <input type='password' placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className='modal21'>
                        Confirm Password
                        <input type='password' placeholder='Enter your Password' onChange={(e) => setConfirm_password(e.target.value)} />
                      </div>
                    </div>
                    <div className='modal1-btn'> <button onClick={handleSubmit} type='submit'>Save</button></div>
                    </form>
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className='modalprofile'>
            <p><GoHeart /></p>
            <p>Favourites</p>
          </div>
          <div className='modalprofile'>
            <p><FaRegCheckSquare /></p>
            <p>Enquired</p>
          </div>
          <div className='modal-btn'> <button onClick={handleLogout}>Logout</button></div>
        </div>
      )}
    </div>
  );
}

export default UserProfilePopup;
