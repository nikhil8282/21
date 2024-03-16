import React, { useEffect, useRef, useState } from 'react'
import './suppliereditsidebar.css'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import { getSupplier, supplierEditProfile } from '../../redux/actions/supplierAuthAction';
import { PulseLoader } from 'react-spinners';

function SupplierEditSidebar({ SupplierEditProfileSidebar }) {

    const [name, setName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [service, setService] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [price, setPrice] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([]);

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.supplierAuthReducer);

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, []);

    const inputRef = useRef(null);

    const handleimg = () => {
        inputRef.current.click();
    };

    const changeimg = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);
        setImages((prevImages) => [...prevImages, ...fileArray]);
    };

    const removeImage = (index) => {
        setImages((prevImages) => prevImages.filter((image, i) => i !== index));
    };

    const handleSave = async (e) => {
        try {
            e.preventDefault();
            if (
                !name ||
                !phoneNo ||
                !service ||
                !address ||
                !city ||
                !state ||
                !price ||
                !shortDescription ||
                !description ||
                !images
            ) {
                toast.error("All fields are required");
            } else {
            const newform = new FormData();
            images.forEach((image, index) => {
                // Append all files with the same field name
                newform.append("file", image);
            });
            // newform.append("file", images);
            newform.append("name", name);
            newform.append("phoneNo", phoneNo);
            newform.append("service", service);
            newform.append("address", address);
            newform.append("city", city);
            newform.append("state", state);
            newform.append("price", price);
            newform.append("shortDescription", shortDescription);
            // console.log(newform);
            const response = await dispatch(supplierEditProfile(newform));

            // Clear input fields upon successful registration
            if (response && response.success) {
                setName("");
                setPhoneNo("");
                setService("");
                setAddress("");
                setCity("");
                setState("");
                setPrice("");
                setShortDescription("");
                setDescription("");
            }
            dispatch(getSupplier());
            }
        } catch (error) {
            console.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
            // toast.error(`${error?.response?.data?.error || 'Something Went Wrong'}`);
        }
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

    return (
        <Drawer
            anchor="right" // Anchor the drawer to the right side
            open={true} // Always open when rendered
            onClose={SupplierEditProfileSidebar} // Close the drawer when clicking outside
        >
            <div className="sep-modal">
                {loading ? (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}>
                        <PulseLoader color="#A6A9AC" />
                    </div>
                ) : (
                    <form className="sep-modal-form">

                        <div className="sep-modal-form-field">
                            <label>
                                Name
                                <input
                                    type="text"
                                    placeholder='Enter your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="sep-modal-form-field">
                            <label>
                                Phone no
                                <input
                                    type="text"
                                    placeholder='Enter your Phone Number'
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                />
                            </label>
                            <label>
                                Services
                                <input
                                    type="text"
                                    placeholder='Enter your Service'
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="sep-modal-form-field">
                            <label>
                                Address
                                <input
                                    type="text"
                                    placeholder='Enter your Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="sep-modal-form-field">
                            <label>
                                City
                                <input
                                    type="text"
                                    placeholder='Enter your City'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </label>
                            <label>
                                State
                                <input
                                    type="text"
                                    placeholder='Enter your State'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </label>
                            <label>
                                Price
                                <input
                                    type="text"
                                    placeholder='Enter your Price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="sep-modal-form-field">
                            <label>
                                Short Description
                                <input
                                    type="text"
                                    placeholder='Enter your Short Description'
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="sep-modal-form-field">
                            <label>
                                Description
                                <textarea
                                    placeholder='Enter your Description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="uploadimg">
                            <div className="up00">Upload Photos</div>
                            <div className="dotted-box" onClick={handleimg}>
                                <div className="load">
                                    <div className="load1">
                                        <input
                                            type="file"
                                            onChange={changeimg}
                                            ref={inputRef}
                                            style={{ display: 'none' }}
                                            id="file-input"
                                            className="upload-input"
                                            accept="image/jpeg, image/png"
                                            multiple
                                        />

                                        <label
                                            htmlFor="file-input"
                                            className="upload-label"
                                        >
                                            <div
                                                className="drag"
                                                htmlFor="file-input"
                                            >
                                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                            </div>
                                            <p>Drag and Drop</p>
                                        </label>
                                        <p>
                                            Browse to upload. only png,jpeg, upto
                                            1.5 mb
                                        </p>
                                    </div>
                                </div>
                                <div className="boximg">
                                    {images.map((image, index) => (
                                        <div className="bo1" key={index}>
                                            <div
                                                className="contain"
                                                onClick={() => removeImage(index)}
                                            >
                                                X
                                            </div>
                                            <div id="boxes">
                                                <img
                                                    src={URL.createObjectURL(
                                                        image
                                                    )}
                                                    className="wii1"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='sep-modal-save-btn' onClick={handleSave}>Save</button>

                    </form>
                )}
            </div>
        </Drawer>
    )
}

export default SupplierEditSidebar