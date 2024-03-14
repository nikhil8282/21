import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { userLogin } from "../../../redux/actions/userAuthAction";
import { toast } from 'react-toastify';

function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.userReducer);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const userLoginData = {
        userName,
        password,
      };

      if (!userName || !password) {
        toast.error("All fields are required");
      }
      else if (password.length < 6) {
        toast.error("Invalid Credentials");
      } else {
        const response = await dispatch(userLogin(userLoginData, navigate));

        // Clear input fields upon successful registration
        if (response && response.success) {
          setUserName("");
          setPassword("");
        }
      }
    } catch (error) {
      console.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
      // toast.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
    }
  }

  if (loading) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <PulseLoader color="#A6A9AC" />
    </div>
  }

  return (
    <>
      <div className="container-supplyl1">
        <div className="img-supplyl1">
          {/* <img src='/image/div2.jpg' alt='img' /> */}
          <img src="/image/div1.jpg" alt="img" />
        </div>
        <div className="login-supplyl1">
          <div className="pic210l1">
            <div></div>
            <img
              src="/image/sq.jpg"
              alt=""
            ></img>
          </div>
          <form className="bwell1">
            <div className="wel-supplyl1">Welcome!</div>
            <div className="div-supplyl1">
              <Link to="/login" className="user1l1">
                User
              </Link>
              <Link to="/supplier" className="supply1l1">
                Contractor/Supplier
              </Link>
            </div>
            <div className="info-supplyl1">
              <div className="user-logl1">
                <label>User name</label>
                <input
                  type="text"
                  placeholder="Enter your User name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              {/* <div className='user-log2'>
                <label>User name</label>
                <input type="text" placeholder='Enter your User name' />
              </div> */}
              <div className="user-passl1">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="checkforl1">
              <div className="checkedl1">
                <input type="checkBox" />
                <label> Remember me</label>
              </div>
              <div className="forgetl1">Forget Password?</div>
            </div>
            <div className="registration1l1">
              <button onClick={handleLogin} type="submit">
                Login
              </button>
              <div className="dosulppyl1">
                {" "}
                Don't have an account.
                <Link to="/Signup" className="dkrl1">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
