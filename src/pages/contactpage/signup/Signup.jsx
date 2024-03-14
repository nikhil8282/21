import React from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { userRegister } from "../../../redux/actions/userAuthAction";
import { toast } from 'react-toastify';
import validator from 'validator';

function RegisterationForm() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.userReducer);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const userRegisterData = {
        email,
        userName,
        password,
      };

      if (!email || !userName || !password) {
        toast.error("All fields are required");
      }
      else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        toast.error("Invalid Email")
      }
      else if (!validator.isEmail(email)) {
        toast.error("Invalid Email");
      }
      else if (password.length < 6) {
        toast.error("Password length must be at least 6 characters");
      } else {
        const response = await dispatch(userRegister(userRegisterData, navigate));

        // Clear input fields upon successful registration
        if (response && response.success) {
          setEmail("");
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
      <div className="container-supplyl2">
        <div className="img-supplyl2">
          {/* <img src='/image/div2.jpg' alt='img' /> */}
          <img src="/image/div1.jpg" alt="img" />
        </div>
        <form className="login-supplyl2">
          <div className="pic210l2">
            <div></div>
            <img
              src="/image/sq.jpg"
              alt=""
            ></img>
          </div>
          <div className="bwell2">
            <div className="wel-supplyl2">Welcome!</div>
            <div className="div-supplyl2">
              <Link to="/login" className="user1l2">
                User
              </Link>
              <Link to="/supplier" className="supply1l2">
                Contractor/Supplier
              </Link>
            </div>
            <div className="info-supplyl2">
              <div className="user-logl2">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="user-log2l2">
                <label>User name</label>
                <input
                  type="text"
                  placeholder="Enter your User name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="user-passl2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="registration1l2">
              <Link to="" className="butlerl2">
                <button onClick={handleRegister} type="submit">
                  Sign Up
                </button>
              </Link>
              <div className="dosulppyl2">
                {" "}
                Already have an account.
                <Link to="/" className="dkrl2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterationForm;
