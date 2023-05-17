import './Footer.css';
import { FaHeart, FaFacebookF, FaInstagram, FaTwitter,FaLinkedin ,FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="icon-container">
          <a href="https://www.facebook.com/profile.php?id=100009120165927" target='_blank' rel="noreferrer" className="footer-icon footer-icon-right-margin">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/rahul_kr_._/" target='_blank' rel="noreferrer" className="footer-icon footer-icon-right-margin">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/mekrrahul" target='_blank' rel="noreferrer" className="footer-icon footer-icon-right-margin">
            <FaTwitter />
          </a>
          <a href="https://github.com/eccecntric-Rahul" target='_blank' rel="noreferrer" className="footer-icon footer-icon-right-margin">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rahul-kumar-821109187/" target='_blank' rel="noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
        </p>
        <p className="footer-text-container">
          <a href="mailto:rk2655415@gmail.com" className='footer-text-link'>Email Me</a>
        </p>
        <p className="footer-text-container">
          <a href="tel:+919015709221" className='footer-text-link'>Call Me</a>
        </p>
        <p className="footer-text-container">
          <a href="https://krrahul.netlify.app/" className='footer-text-link'>Personal Portfolio (TechRahul)</a>
        </p>
        <p className='footer-text'>Made with <FaHeart color="red" className="heart-icon" /> by Rahul Kumar</p>
        <p className="copyright">
          &copy; 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
