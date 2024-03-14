import React, { useState } from 'react'
import "./upcategory.css"
import Send from '../../../pages/categorypage/Popup/Send'
// import ViewDetails from './ViewDetails'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'
// import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setLike } from '../../../redux/actions/likeAction'
import { setFetch } from '../../../redux/actions/fetchcardsAction'
import { useSelector } from 'react-redux';
import { getAllContractor } from '../../../redux/actions/contractorAction'
// import fetchReducer from '../../../redux/reducers/fetchcardReducer'

function Upcategary() {

    const dispatch = useDispatch();
    const { loading, error, success, contractor } = useSelector(state => state.contractorReducer);

    useEffect(() => {
        dispatch(getAllContractor()); // Dispatch action to fetch data when component mounts
    }, [dispatch]);

    const [like, setLiked] = useState('');
    // const [fetch, setFetch] = useState('')
    const { data } = useSelector(state => state.fetchReducer);
    const handleFetch = (id) => {
        // e.preventDefault()
        dispatch(setFetch(id))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setLike(like))
        // axios.post('http://localhost:8000/api/auth/like', { like })
    }

    const [payment, setPayment] = useState(false)

    const band = () => setPayment(false)
    const Mymodel = () => {
        setPayment(true);
    }

    const navigate = useNavigate();
    // const handleRedirect = (id) => {
    //     // Redirect logic here
    //     navigate('/ViewDetails', { state: { id } }); // Use the navigate function from useNavigate
    // };

    const handleViewDetails = (id) => {
        navigate(`/ViewDetails/${id}`);
    };

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="imgc">
                    <img className='imghead' src='/image/category.png' alt="Description" />
                </div>
                <div className="bannert">
                    <h2>Categories</h2>
                    <p>Home-Categories</p>
                </div>
                <div className="onimage">
                    <button type='submit' className='btn01'><p>Location <p className='mm01'>Ex Noida</p></p> </button>
                    <button type='submit' className='btn1'>Services<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn1'>Budget<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn2' ><span class="material-symbols-outlined">
                        search
                    </span>Search</button>
                    {/*  */}
                </div>
                {/* {data.myData.map((item, index) => ( */}
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : success && contractor ? (
                    contractor.contractors.map((item, index) => (
                        <div className="doubleCard" key={index} onClick={() => handleFetch(item.id)}>
                            {/* <div className="full0"> */}
                            {/*  */}
                            <div className="construction">
                                <div className="mm">
                                    <div className="mm2"></div>
                                    <span className='upper'>Construction</span>
                                </div>
                                <div className="cont10">
                                    <div className="photo">
                                        <img className='img10' src={item.image} alt='' />
                                        {/* <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                                    </div>
                                    <div className="right">
                                        <h4>{item.name}</h4>
                                        <p className='sme'>{item.name} Co. for your for your next Construction project</p>

                                        <div className='t30'>$100 to $200 per square foot</div>
                                        <div className="loca0">
                                            <span><i className="fa-solid fa-location-dot"></i>{item.city},{item.state}</span>

                                        </div>
                                        <div className="uright10">
                                            <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button>
                                            <button type='submit' onClick={() => handleViewDetails(item._id)} className='numbtn0'>View Details</button>
                                            <i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)} onSubmit={handleSubmit}></i>
                                            {payment && <Send band={band} />}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))
                ) : null}

            </div>
            <Footer />
        </div>
    )
}

export default Upcategary;