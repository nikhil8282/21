import React, { useState, useEffect } from 'react'
import './viewdetails.css'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContractorDetail } from '../../../redux/actions/contractorAction';
import SendEnquiry from '../../../containers/SendEnquiry/SendEnquiry';

function ViewDetails() {
    // const location = useLocation();
    // const item = location.state.id;
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, success, contractorDetail } = useSelector(state => state.contractorReducer);
    const [sendEnquiryOpen, setSendEnquiryOpen] = useState(false);

    useEffect(() => {
        dispatch(getContractorDetail(id)); // Dispatch action to fetch contractor details when component mounts
    }, [dispatch, id]);

    // const { contractor } = contractorDetail;
    const contractor = contractorDetail ? contractorDetail.contractor : null;

    // Function to handle opening the dialog
    const handleSendEnquiryOpen = () => {
        setSendEnquiryOpen(true);
    };

    return (
        <>
            <Navbar />
            <div className="vmaindv">
                {contractor && (
                    <div className="constructiondv">
                        <div className="cont1dv">
                            <div className="photodv">
                                <img className='img0dv' src={contractor.image[0]} alt='' />
                            </div>
                            <div className="rightdv">
                                <div className="mmdv">
                                    <div className="mm2dv"></div>
                                    <button type='submit' className='upperdv' onClick={handleSendEnquiryOpen}>Send Enquiry</button>
                                </div>
                                <h4>{contractor.name}</h4>
                                <p className='smedv'>{contractor.shortDescription}</p>
                                <div className="threes">
                                    <span className='t1'>Service-Construction</span>
                                    {/* <span className='t2'><i className="fa-solid fa-phone"></i>{item.phone}</span> */}
                                    <span className='t3'>$100 to $200 per square foot</span>

                                </div>
                                <hr />

                                <div className="urightdv">
                                    <p><i className="fa-solid fa-location-dot"></i>{contractor.city}</p>
                                </div>
                                {/* {payment && <Send band={band} />}  onClick={Mymodel} */}
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="aboutus">
                            <h3>About Us</h3>
                            <p>{contractor.description}</p>
                        </div>
                        <div className="vphotos">
                            <h3>Photos</h3>
                            <div className="photo5">
                                {contractor.image.slice(1).map((image, index) => (
                                    <img key={index} className='img1dv' src={image} alt='' />
                                ))}
                                {/* <img className='img1dv' src={item.image} alt='' /> */}
                                {/* <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                                {/* <img className='img1dv' src={item.image} alt='' /> */}
                                {/* <img className='img1dv' src={item.image} alt='' /> */}
                                {/* <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                       <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' /> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
            <SendEnquiry open={sendEnquiryOpen} setOpen={setSendEnquiryOpen} />
        </>
    )
}

export default ViewDetails;