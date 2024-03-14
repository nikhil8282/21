import React from 'react';

import './searcher.css'

function Searcher() {









    return (
        <>
            <div className="main">


                <div className="row1">
                    <input type="text" id="input1-box" placeholder="search here" autocomplete="off" />
                    {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
                </div>
                <div className="doubleCard">
                    {/* <div className="full0"> */}
                    {/*  */}
                    <div className="construction">
                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont10">
                            <div className="photo">

                                <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Shubham Construction Co. for your for your next Construction project</p>

                                <div className='t30'>$100 to $200 per square foot</div>


                                <div className="loca0">
                                    <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span>

                                </div>
                                <div className="uright10">
                                    <button type='submit' className='numbtn'> Send Enquiry</button>
                                    <button type='submit' className='numbtn0'>View Details</button>
                                    <i className="fa-regular fa-heart"></i>
                                    {/* {payment && <Send band={band} />}   onClick={Mymodel}  onClick={handleRedirect}*/}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont10">
                            <div className="photo">

                                <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Shubham Construction Co. for your for your next Construction project</p>
                                <div className='t30'>$100 to $200 per square foot</div>


                                <div className="loca0">
                                    <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span>

                                </div>



                                <div className="uright10">
                                    <button type='submit' className='numbtn'> Send Enquiry</button>
                                    <button type='submit' className='numbtn0'>View Details</button>
                                    <i className="fa-regular fa-heart"></i>
                                    {/* {payment && <Send band={band} />}   onClick={handleRedirect} onClick={Mymodel}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------second double------------------------------------------------------------------------ */}
            </div>
        </>
    )
}

export default Searcher