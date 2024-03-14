import React, { useState } from 'react'
import './supplylogin.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { supplierLogin } from '../../../redux/actions/supplierAuthAction';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';

function Supplylogin() {

  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  const { loading } = useSelector((state) => state.supplierAuthReducer);

  const navigate = useNavigate('')
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const supplierLoginData = {
        phoneNo,
        password
      };

      if (!phoneNo || !password) {
        toast.error("All fields are required");
      }
      else if (password.length < 6) {
        toast.error("Password length must be at least 6 characters");
      } else {
        const response = await dispatch(supplierLogin(supplierLoginData, navigate));

        // Clear input fields upon successful login
        if (response && response.success) {
          setPhoneNo("");
          setPassword("");
        }
      }
    } catch (error) {
      console.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
    }
  };

  if (loading) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <PulseLoader color="#FECC00" />
    </div>
  }

  return (
    <div className='container-supplyl4'>
      <div className='img-supplyl4'>
        <img src='/image/div2.jpg' alt='img' />
      </div>
      <div className='login-supplyl4'>
        <div className="pic210l4">
          <div></div>
          <img src="/image/sq.jpg" alt="" />
        </div>

        <div className="bwell4">
          <div>
            <Link to="/" className="back-button">
              <FaArrowLeft className="arrow-icon" />
              Back
            </Link>
          </div>

          <div className='wel-supplyl4'>Welcome!</div>
          <div className='div-supplyl4'>

            <div className='user1l4'>User</div>
            <div className='supply1l4'>Contractor/Supplier</div>
          </div>

          <form>
            <div className='info-supplyl4'>
              <div className='user-logl4'>
                <label>Phone Number</label>
                <input type="tel" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} placeholder='Enter your phone number' />
              </div>

              <div className='user-passl4'>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />
              </div>
            </div>
            <div className='registration1l4'>
              <div >
                <button type='submit' onClick={handleLogin}>Login</button>
              </div>
              <div className='dosulppyl4'> Don't have an account.
                <Link to='/Supplier' className='dkrl4'>Register</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Supplylogin