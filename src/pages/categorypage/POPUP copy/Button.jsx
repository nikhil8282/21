import React, { useState } from 'react'
import Logged from './Logged'
import AfLogged from './AfLogged'

function Button() {

  const [logged, setLogged] = useState(false)
  const logged1 = () => setLogged(true)
  const logged0 = () => setLogged(false)



  const [out, setOut] = useState(false)
  const out1 = () => setOut(true)
  const out0 = () => setOut(false)

  return (
    <>
      <div className="main">
        <button type='submit' onClick={logged1} className='btn1' style={{ padding: "10px", background: "green" }}>Go Profile</button>
        {logged && <Logged logged0={logged0} />}

        <button type='submit' onClick={out1} className='btn2' style={{ padding: "10px", background: "cyan" }}>logOut</button>
        {out && <AfLogged out0={out0} />}
      </div>
    </>
  )
}

export default Button;