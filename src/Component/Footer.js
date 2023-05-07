import React from "react";
import { IoLogoTwitter } from 'react-icons/io';
import { ImFacebook } from 'react-icons/im';
import { BsYoutube } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="smiley">
          <img src="./sMIley.png" alt="Smiley-duo" />
        </div>

        <div>
          <ul className="footer-health-plan">
            <li>Health Plans</li>
            <li>Employers</li>
            <li>Be a Papa Pal</li>
            <li>Members</li>
            <li>Careers</li>
            <li>Resources</li>
          </ul>
        </div>

        <div>
          <ul className="terms-of-service">
            <li>Papa Inc @ 2023</li>
            <li>Locations</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>HIPAA Privacy Rule</li>
            <li>Ethics and Conduct Reporting</li>
            <li>Ethics and Conduct Reporting</li>
            <li>Papa Pal safety</li>
          </ul>
        </div>

        <div className="footer-icons">
            <span><IoLogoTwitter className="footer-logo"/></span>
            <span><ImFacebook className="footer-logo"/></span>
            <span><BsYoutube className="footer-logo"/></span>
            <span><GrLinkedinOption className="footer-logo"/></span>
            <span><FiInstagram className="footer-logo"/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;