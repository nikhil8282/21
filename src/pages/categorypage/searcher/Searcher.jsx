import React from "react";
import "./searcher.css";
import Navbar from "../../../components/homepage/Navbar/navbar";
import Footer from "../../../components/homepage/footer/footer";
import { useSelector } from "react-redux";

function Searcher() {

    const { data } = useSelector((state) => state.searchReducer.data);

    return (
        <>
            <Navbar />
            <div className="main">
                <div className="doubleCard">
                    {/* <div className="full0"> */}
                    {data && data.length > 0 && data?.map((d) => (
                        <div className="construction">
                            <div className="mm">
                                <div className="mm2"></div>
                                <span className="upper">{d.service}</span>
                            </div>
                            <div className="cont10">
                                <div className="photo">
                                    {d.image && d.image.length > 0 && (
                                        <img
                                            className="img10"
                                            src={`/uploaded/${d.image[0]}`}
                                            alt=""
                                        />
                                    )}
                                </div>

                                <div className="right">
                                    <h4>{d.name}</h4>
                                    <p className="sme">{d.shortDescription}</p>

                                    <div className="t30">{`$ ${d.price}`}</div>

                                    <div className="loca0">
                                        <span>
                                            <i className="fa-solid fa-location-dot"></i>
                                            {`${d.city} ${d.state}`}
                                        </span>
                                    </div>
                                    <div className="uright10">
                                        <button type="submit" className="numbtn">
                                            {" "}
                                            Send Enquiry
                                        </button>
                                        <button type="submit" className="numbtn0">
                                            View Details
                                        </button>
                                        <i className="fa-regular fa-heart"></i>
                                        {/* {payment && <Send band={band} />}   onClick={Mymodel}  onClick={handleRedirect}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <Footer />
        </>
    );
}

export default Searcher;