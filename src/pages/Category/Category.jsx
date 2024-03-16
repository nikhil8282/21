import React, { useState } from 'react'
import "./category.css"
// import ViewDetails from './ViewDetails'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/homepage/Navbar/navbar'
import Footer from '../../components/homepage/footer/footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setLike } from '../../redux/actions/likeAction'
// import { setFetch } from '../../redux/actions/fetchcardsAction'
import { useSelector } from 'react-redux';
import { getAllContractor } from '../../redux/actions/contractorAction'
import SendEnquiry from '../../containers/SendEnquiry/SendEnquiry';
import { PulseLoader } from 'react-spinners'
import { FaRegHeart } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
// import fetchReducer from '../../../redux/reducers/fetchcardReducer'

function Category() {

    const [sendEnquiryOpen, setSendEnquiryOpen] = useState(false);

    const dispatch = useDispatch();
    const { loading, success, contractor } = useSelector(state => state.contractorReducer);
    // const { user } = useSelector(state => state.userReducer);
    // const {  data } = useSelector(state => state.likeReducer);

    useEffect(() => {
        dispatch(getAllContractor()); // Dispatch action to fetch data when component mounts
    }, [dispatch]);

    // const [fetch, setFetch] = useState('')
    // const { data } = useSelector(state => state.fetchReducer);
    // const handleFetch = (id) => {
    //     // e.preventDefault()
    //     dispatch(setFetch(id))
    // }

    const handleLike = (businessId) => {
        console.log(' businessId', businessId);
        dispatch(setLike(businessId));
    };

    const navigate = useNavigate();
    // const handleRedirect = (id) => {
    //     // Redirect logic here
    //     navigate('/ViewDetails', { state: { id } }); // Use the navigate function from useNavigate
    // };

    const handleViewDetails = (id) => {
        navigate(`/ViewDetails/${id}`);
    };

    // Function to handle opening the dialog
    const handleSendEnquiryOpen = () => {
        setSendEnquiryOpen(true);
    };

    // if (loading) {
    //     return <div style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         height: '100vh'
    //     }}>
    //         <PulseLoader color="#A6A9AC" />
    //     </div>
    // }

    const decodeImage = (base64Data) => {
        return `${base64Data}`;
    };

    return (
        <div>
            <Navbar />
            <div className="category-cont">
                <div className="top-cat-img-back">
                    <img src='/image/category.png' alt="Description" />
                </div>
                <div className="top-cat-overlay-cont">
                    <h2>Categories</h2>
                    <p>Home-Categories</p>
                </div>
                <div className="top-cat-search-field-cont">
                    <input type="text" placeholder='Location' />
                    <input type="text" placeholder='Services' />
                    <button type='submit' >
                        search
                    </button>
                </div>

                <div className="category-cards-cont">
                    {loading ? (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh'
                        }}>
                            <PulseLoader color="#A6A9AC" />
                        </div>
                    ) : success && contractor ? (
                        contractor.contractors.map((item, index) => (
                            <div className="category-card" key={index}>
                                <div className="category-service-name">
                                    <span>{item.service}</span>
                                </div>
                                <div className="cat-card-flex">
                                    <div className="category-card-img">
                                        {item.image && item.image.length > 0 && (
                                            <img src={decodeImage(item.image[0])} alt='' />
                                        )}
                                    </div>
                                    <div className="category-card-info">
                                        <h4 className='cc-name'>{item.name}</h4>
                                        <p className='cc-short-desc'>{item.shortDescription}</p>
                                        <div className='cc-price'>{item.price}</div>
                                        <div className="cc-location">
                                            <span><CiLocationOn /> {item.city},{item.state}</span>
                                        </div>
                                        <div className="cc-buttons">
                                            <button type='submit' onClick={handleSendEnquiryOpen} className='cc-send-btn'> Send Enquiry</button>
                                            <button type='submit' onClick={() => handleViewDetails(item._id)} className='cc-view-btn'>View Details</button>
                                            <button className='cc-like-btn'><FaRegHeart onClick={() => handleLike(item._id)} />
                                                {item.totalLikes}
                                                {/* {data && data.totalLikes} */}
                                            </button>
                                            <SendEnquiry open={sendEnquiryOpen} setOpen={setSendEnquiryOpen} businessId={item._id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category;