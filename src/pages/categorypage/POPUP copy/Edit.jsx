import React from 'react'
import './edit.css'


function Edit({ edited0 }) {



  // above state for call AfLogged popup

  // const [ename, setEname] = useState()
  // value={ename} onChange={(e) => setEname(e.target.value)}

  return (
    <>
      <div className="ewrapper" onClick={edited0}></div>


      <div className="main002">
        <form className="Emain">
          <label for='' className='enam'>Name</label><br />
          <input type='text' name='' className='e1' placeholder='Enter you name of your company' />

          <div className="ps">

            <div className="ephone">

              <label for='' className='eph'>Phone no</label><br />
              <input type='number' name='' className='e2' placeholder='Enter your Phone no' />
            </div>

            <div className="eservice">

              <label for='' className='eserv'>Service</label><br />
              <input type='text' name='' className='e3' placeholder='Enter Service you provide' />
            </div>

          </div>

          <label for='' className='eadd'>Address</label><br />
          <input type='text' name='' className='e4' placeholder=' ' />


          <div className="cs">

            <div className="inoutc">
              <label form='' className='ecity'>City</label><br />
              <input type='text' name='' className='e5' />
            </div>

            <div className="inouts">
              <label form='' className='estate'>State</label><br />
              <input type='text' name='' className='e6' />
            </div>


          </div>

          <button type='submit' className='esave'>Save</button><br />

          <button type='submit' className='logout0'>Logout</button>





        </form>

      </div>



    </>
  )
}

export default Edit