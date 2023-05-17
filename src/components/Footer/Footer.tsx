import React from 'react';
// import { FaFacebookF, FaInstagram, FaTwitter,FaSnapchatGhost,FaHeart } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            {/* <div className="footer_content_container">
                <div className="footer_row">
                    <p className="icon_container"><a href="https://www.facebook.com/profile.php?id=100009120165927" target='_blank' rel="noreferrer" className="footer_icon footer_icon_right_margin"><FaFacebookF  /></a>
                        <a href="https://www.instagram.com/rahul_kr_._/" target='_blank' rel="noreferrer" className="footer_icon footer_icon_right_margin"><FaInstagram  /></a> 
                       <a href="https://twitter.com/mekrrahul" target='_blank' rel="noreferrer" className="footer_icon footer_icon_right_margin"> <FaTwitter  /></a>
                       <a href="https://www.snapchat.com/add/iam-rahulkr?share_id=cxxfsAKcUuU&locale=en-US" target='_blank' rel="noreferrer" className="footer_icon"> <FaSnapchatGhost  /></a>
                    </p>
                    <p className="footer_text_container"><a href="mailto:rk2655415@gmail.com" className='footer_text_link'>Email Me</a> </p>
                    <p className="footer_text_container"><a href="tel:+919015709221" className='footer_text_link'>Call Me</a> </p>
                    <p className="footer_text_container"><a href="https://netflix.com" className='footer_text_link'>Inspired By NETFLIX.</a> </p>
                </div>
                <div className="footer_row">
                <p className="icon_container" ></p>
                <p className="footer_text_container"><Link to="/contact" className="footer_text_link">Contact Details</Link></p>
                <p className="footer_text_container"><a href="https://drive.google.com/file/d/1s-P3vGWhQ3fWnXZGhYnpiqlbG3RO2c6A/preview" download className="footer_text_link">Download my resume !</a></p>
                </div>
                <div className="footer_row row_3" >
                <p className="icon_container" ></p>
                <p className="footer_text_container"><a href="https://google.com" target='_blank' rel="noreferrer" className="footer_text_link">Wanna hire me ?</a></p>
                </div>
            </div>
            <p id="heart_container">Made with <FaHeart id="heart_icon"/> By Rahul Kumar.</p>
            <p id="copyright">Copyright &copy; 2023</p> */}
        </div>
    )
}

export default Footer