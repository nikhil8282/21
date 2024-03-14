import React, { useRef, useState } from 'react'
import './supplier.css'
import { Link, useNavigate } from 'react-router-dom'
import Contractor1 from '../popup/Contractor1';
// import { registerS } from '../../../REDUX/Actions/supplierAction';
import { supplierRegister } from '../../../redux/actions/supplierAuthAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import ServicesSidebar from '../../../containers/ServicesSidebar/ServicesSidebar';

function Supplier() {

  const inputRef = useRef(null)
  const [profilePic, setProfilePic] = useState('');

  const handleimg = () => {
    inputRef.current.click()

  }
  const changeimg = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setProfilePic(event.target.files[0])
    setImage(event.target.value)
  }


  const [serviced, setServiced] = useState(false)
  const service1 = () => setServiced(true)
  const service0 = () => {
    setServiced(false)
    setService(sessionStorage.getItem('opts'));

  }

  const [service, setService] = useState("null");
  const [name, setName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  // const[serviced,setServiced]=useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.supplierAuthReducer);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      const supplierRegisterData = {
        name,
        phoneNo,
        service,
        address,
        city,
        state,
        image: profilePic,
        password
      };

      if (!name || !phoneNo || !service || !address || !city || !state || !password) {
        toast.error("All fields are required");
      }
      else if (password.length < 6) {
        toast.error("Password length must be at least 6 characters");
      } else {
        const response = await dispatch(supplierRegister(supplierRegisterData, navigate));

        // Clear input fields upon successful registration
        if (response && response.success) {
          setName("");
          setPhoneNo("");
          setService("");
          setAddress("");
          setCity("");
          setState("");
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

  // const [serviced, setServiced] = useState(false);

  const openServiceSidebar = () => {
    setServiced(true);
  };

  const closeServiceSidebar = () => {
    setServiced(false);
    setService(sessionStorage.getItem('opts'));
  };


  return (
    <>
      <div className='container-supplyl3'>
        <div className='img-supplyl3'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <div className='login-supplyl3'>
          <div className="pic210l3">
            <div></div>
            <img src="/image/sq.jpg" alt=''></img>
          </div>

          <form className="bwell3">
            <div className='wel-supplyl3'>Welcome!</div>
            <div className='div-supplyl3'>

              <Link to='/login' className='user1l3'>User</Link>
              <Link to='/supplier' className='supply1l3'>Contractor/Supplier</Link>
            </div>
            <div className='info-supplyl3'>
              <div className="Bhrl3">

                <div className="bhrl3">
                  <div className='user-logl3'>
                    <label htmlFor="mmr" >Name</label>
                    <input id='mmr' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter you name of  your company' />
                  </div>
                  <div className="honeservl3">
                    <div className="pn1l3">
                      <label htmlFor="mmr1">Phone no</label>
                      <input id="mmr1" type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder='Enter your phone no' />

                    </div>
                    <div className="pn2l3"  >

                      <label htmlFor='mmr2'>Service</label>

                      <input id='mmr2' type="text" onClick={openServiceSidebar} onChange={(e) => setService(e.target.value)} placeholder='Enter Service you provide'

                        value={service}
                      />
                      {/* , serviced */}

                    </div>

                  </div>
                  {/* {serviced && <Contractor1 service0={service0} />} */}
                  {serviced && <ServicesSidebar service0={closeServiceSidebar}/>}
                </div>


                <div className="pniml3" >

                  {profilePic ? (<img src={URL.createObjectURL(profilePic)} className='wiii' alt='' />) : (<label htmlFor="file-inputl3"><div className="dragerl3"></div><p>+ Upload profile picture</p></label>)}
                  {/* <input type="file" value={image} onChange={changeimg} ref={inputRef} id="file-inputl3" style={{ display: 'none' }} className="upload-inputl3" accept="image/jpeg, image/png" /> */}
                  <input type="file" onChange={changeimg} ref={inputRef} id="file-inputl3" style={{ display: 'none' }} className="upload-inputl3" accept="image/jpeg, image/png" />

                </div>

              </div>

              <div className="Adrpn3l3">
                <div>Addreess</div>
                <input id='dlr1' type="text" placeholder='' value={address} onChange={(e) => setAddress(e.target.value)} />

              </div>

              <div className="city-Statel3">
                <div className="pn4l3">
                  <div>City</div>
                  <input id='dlr2' type="text" placeholder='' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="pn5l3">
                  <div>State</div>
                  <input id='dlr3' type="text" placeholder='' value={state} onChange={(e) => setState(e.target.value)} />
                </div>

              </div>

              <div className='user-passl3'>
                <label htmlFor='cce'>Password</label>
                <input id='cce' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='registration1l3'>
              <div >
                <button type='submit' onClick={handleRegister}>Registration</button>
              </div>
              <div className='dosulppyl3'> Already have an account
                <Link to='/Supplylogin' className='dkrl3'>Login</Link></div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Supplier
