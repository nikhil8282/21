import React from 'react'
import './privacy.css'
import Navbar from '../../components/homepage/Navbar/navbar'
import Footer from '../../components/homepage/footer/footer'

function PrivacyPolicy() {
    return (
        <div className='privacy-policy'>
            <Navbar />
            <div className="privacy-policy-cont">
                <div className="privacy-policy-head">
                    <h1>Privacy Policy of 21sqft.com</h1>
                </div>

                <div className="bottom-pp">

                    <h3>Effective Date: [21/09/2023]</h3>
                    <div className="pp-cont">
                        <h4>1. Introduction</h4>
                        <p>Welcome to 21sqft.com (the “Website”). At 21sqft.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you access and use our Website. By using our Website, you consent to the practices described in this Privacy Policy.</p>
                    </div>

                    <h3>2. Information We Collect</h3>
                    <div className="pp-cont">
                        <h4>2.1. Information You Provide</h4>
                        <p>– When you register for an account, we may collect your name, email address, phone number, and other contact details.</p>
                        <p>– When you submit inquiries, requests for quotes, or reviews, we may collect information related to your project, location, and any additional details you provide.</p>
                        <p>– If you choose to communicate with contractors or suppliers through our platform, we may collect correspondence and communication details.</p>
                    </div>


                    <div className="pp-cont">
                        <h4>2.2. Information We Automatically Collect</h4>
                        <p>– We may collect information about your device, including your IP address, browser type, and operating system.</p>
                        <p>– We use cookies and similar technologies to gather information about your interactions with our Website, such as pages visited and referral sources.</p>

                    </div>

                    <div className="pp-cont">
                        <h4>3. How We Use Your Information</h4>
                        <p>We use the information collected for the following purposes:</p>
                        <p>– To provide and improve our services, including matching you with construction contractors and material suppliers.</p>
                        <p>– To communicate with you, respond to inquiries, and provide customer support</p>
                        <p>– To send you updates, promotions, and relevant content, if you opt in to receive such communications.</p>
                        <p>– To analyze Website usage and improve our content and user experience.</p>
                        <p>– To comply with legal obligations and protect our rights and interests.</p>
                    </div>

                    <div className="pp-cont">
                        <h4> 4. Sharing Your Information</h4>
                        <p>We may share your information with:</p>
                        <p>– Contractors and suppliers to facilitate your requests and project inquiries.</p>
                        <p>– Service providers who assist us in delivering our services.</p>
                        <p>– Legal authorities when required by law or to protect our rights.</p>
                        <p>– With your consent, for any other purpose disclosed at the time of collection.</p>
                    </div>

                    <div className="pp-cont">
                        <h4>5. Security</h4>
                        <p>We employ reasonable security measures to protect your personal information, but no data transmission or storage system is completely secure. We cannot guarantee the security of your information.</p>
                    </div>

                    <div className="pp-cont">
                        <h4>6. Your Choices</h4>
                        <p>You have certain rights regarding your personal information, including the right to access, correct, or delete it. You can also opt out of receiving promotional communications.</p>
                    </div>

                    <div className="pp-cont">
                        <h4>7. Children's Privacy</h4>
                        <p>Our Website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
                    </div>

                    <div className="pp-cont">
                        <h4>8. Changes to this Privacy Policy</h4>
                        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our Website.</p>
                    </div>

                    <div className="pp-cont">
                        <h4>9. Contact Us</h4>
                        <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at [+91 9877503362].</p>
                        <p>By using our Website, you signify your acceptance of this Privacy Policy. Please read this policy carefully and check it periodically for updates.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy