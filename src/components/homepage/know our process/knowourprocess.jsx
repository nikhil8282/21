import React from 'react'
import './knowourprocess.css'
// import img from './knowourprocess images/div.layer-image-wrapper.png'
// import yellow from './knowourprocess images/div.icon-box.png'
import pseudo from './knowourprocess images/pseudo.png'
import diversity from './knowourprocess images/Group 274 (1)diversity.png'
import supplier from './knowourprocess images/Group 275 (1)supplier.png'
import call from './knowourprocess images/Group 276call.png'

const Knowourprocess = () => {
    return (
        <>
            <div>
                {/* <div className='know-foot'></div> */}
                <section className='first-section'>
                    <div className='knowprocess-background-container'>
                        <div id='knowprocess'>
                            <div className='knowprocess-div1'>
                                <p className='knowprocess-p1'>LOGIN NOW</p>
                                <p className='knowprocess-p2'>AS USERS OR SUPPLIER/CONTRACTORS</p>
                                <button className='knowprocess-btn'>Login Now</button>
                            </div>
                            <div className='knowprocess-div2'>
                                {/* <img className='knowprocess-img' src={img} alt=''></img> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='second-section'>
                    <img className='pseudo' src={pseudo} alt=''></img>
                    <div className='kp-one'>
                        <p className='testimonials'>OUR TESTIMONIALS</p>
                        <p className='testimonials2'>Know our Process</p>
                    </div>
                    <div className='knowprocess-lower'>
                        <div>
                            <img className='yellow' src={diversity} alt=''></img>
                            {/* <img className='diversity' src={diversity} alt=''></img> */}
                            <p className='steps'>Step 1</p>
                            <p className='steps-p'>Browse through categories of contractors, suppliers.</p>
                        </div>
                        <div>
                            <img className='yellow' src={supplier} alt=''></img>
                            {/* <img className='knowprocess-supplier' src={supplier} alt=''></img> */}
                            <p className='steps'>Step 2</p>
                            <p className='steps-p'>Access detailed profiles of contractors and suppliers.</p>
                        </div>
                        <div>
                            <img className='yellow' src={call} alt=''></img>
                            {/* <img className='kp-call' src={call} alt=''></img> */}
                            <p className='steps'>Step 3</p>
                            <p className='steps-p'>Initiate communication with preferred contractors/suppliers.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Knowourprocess;
