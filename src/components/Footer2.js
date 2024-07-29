import React from 'react';
import './Footer2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Restons en Contact</h4>
                    <p>Vous avez des questions ou des propositions de collaboration ?</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul className="contact-list">
                        <li>Email : <a href="mailto:trulesdoniphane974@gmail.com">trulesdoniphane974@gmail.com</a></li></ul>
                  
                </div>
                <div className="footer-section">
                    <h4>Réseaux Sociaux</h4>
                        <li><a href="https://github.com/doniphane" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='icons-social' /></a></li>
                    <li><a href="https://www.linkedin.com/in/doniphane-trules-970638318/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='icons-social' /></a></li>

                    <p>© 2024 Doniphane Trules </p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
