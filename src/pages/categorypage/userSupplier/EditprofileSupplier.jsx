import React, { useEffect, useRef, useState } from 'react'
import './editprofilesupplier.css'
import { useDispatch } from 'react-redux';

// import { edit } from '../../../redux/actions/supplierAction';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';






function EditSupplier({ changed0 }) {

  const dispatch = useDispatch('')

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [])

  const inputRef = useRef(null)
  const [profilePic, setProfilePic] = useState('');

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setProfilePic(URL.createObjectURL(file));
  // };
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [price, setPrice] = useState('')
  const [shortDesc, setShortDesc] = useState('')

  const [desc, setDescd] = useState('')
  const [image, setImage] = useState('')

  const handle = (e) => {
    e.preventDefault()

    // dispatch(edit(name, phone, service, address, city, state, desc, shortDesc, image))







  }

  const handleimg = () => {
    inputRef.current.click()

  }
  const changeimg = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setProfilePic(event.target.files[0])
    setImage(event.target.value)


  }

  const tosatmessage = () => {
    toast.success("your Data is saved!", {
      position: 'top-center'
    })

  }





  return (
    <>


      <div className="wrap" onClick={changed0}></div>


      <div className="main002">
        <form className="Emain" onSubmit={(e) => handle}>
          <div className="onest">
            <div className="enam">Name</div>
            <input type='text' name='' className='e1' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter you name of your company' />
          </div>

          <div className="pser">

            <div className="ps1">

              <div className="phone">Phone no</div>
              <input type='' className='pin' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone no' />


            </div>

            <div className="ps2">
              <div id="serv">Service</div>
              <input type='' className='ser1' value={service} onChange={(e) => setService(e.target.value)} placeholder='Enter service You provide' />


            </div>
          </div>

          <div className="eadd">Address</div>
          <input type='text' name='' className='e4' value={address} onChange={(e) => setAddress(e.target.value)} placeholder=' ' />


          <div className="cs">

            <div className="inoutc">
              <div className="ecity">City</div>
              <input type='text' name='' value={city} onChange={(e) => setCity(e.target.value)} className='e5' />
            </div>

            <div className="inouts">
              <div className="estate">State</div>
              <input type='text' name='' value={state} onChange={(e) => setState(e.target.value)} className='e6' />
            </div>

            <div className="inoutp">
              <div className="eprice">Price</div>
              <input type='number' name='' value={price} onChange={(e) => setPrice(e.target.value)} className='e7' />
            </div>


          </div>

          <div className="shortdes">

            <div className="sdes">Short Description</div>
            <input type='text' name='' className='e8' value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
          </div>

          <div className="maindes">

            <div className="des00">Description</div>
            <textarea id="area0" rows="2" cols="70" value={desc} onChange={(e) => setDescd(e.target.value)} placeholder='Enter your description'></textarea>
          </div>

          <div className="uploadimg" >
            <div className="up00">Upload Photos</div>
            <div className="dotted-box" onClick={handleimg}>

              <div className="load">
                <div className="load1">
                  <input type="file" value={image} onChange={changeimg} ref={inputRef} style={{ display: "none" }} id="file-input" className="upload-input" accept="image/jpeg, image/png" />

                  <label for="file-input" className="upload-label"><div className="drag" for="file-input" ><i className="fa-solid fa-cloud-arrow-up"></i></div><p>Drag and Drop</p></label>
                  <p>Browse to upload. only png,jpeg, upto 1.5 mb</p>
                </div>


              </div>

              <div className="boximg">
                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes" >{profilePic ? (<img src={URL.createObjectURL(profilePic)} className='wii1' alt='' />) : (<label for="file-inputl3"><div id='boxes'></div></label>)}</div>
                </div>
                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes">{profilePic ? (<img src={URL.createObjectURL(profilePic)} className='wii1' alt='' />) : (<label for="file-inputl3"><div id='boxes'></div></label>)}</div>
                </div>
                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes">{profilePic ? (<img src={URL.createObjectURL(profilePic)} className='wii1' alt='' />) : (<label for="file-inputl3"><div id='boxes'></div></label>)}</div>
                </div>

                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes">{profilePic ? (<img src={URL.createObjectURL(profilePic)} className='wii1' alt='' />) : (<label for="file-inputl3"><div id='boxes'></div></label>)}</div>
                </div>

              </div>


            </div>

          </div>

          <button type='submit' className='b1' onClick={handle}  >Save</button>



          {/* {tosatmessage,handle} */}



        </form>

      </div>


      <ToastContainer />
    </>
  )
}

export default EditSupplier