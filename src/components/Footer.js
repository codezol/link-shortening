import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer>
        <div className='boost'>
            <h1>Boost your links today</h1>
            <button className='btn btn-ouline'>Get Started</button>
        </div>
        <div className="links">
            <div className="logo">shortly</div>
            <ul>
                <span className="branch">Features</span>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <span className="branch">Resources</span>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul>
                <span className="branch">Company</span>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <div className="social-media">
            <FacebookIcon className="social-icon"/>
            <TwitterIcon className="social-icon"/>
            <PinterestIcon className="social-icon"/>
            <InstagramIcon className="social-icon"/>
            </div>
        </div>
    </footer>
  )
}

export default Footer
