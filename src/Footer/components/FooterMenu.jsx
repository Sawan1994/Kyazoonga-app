import React from 'react';
import { PopularEvents } from './PopularEvents';

export const FooterMenu = () => {
    return (
        <React.Fragment>
            <div className="col-sm-3">
                <h6>Help</h6>
                <ul>
                    <li><a href="/">24x7 Customer Service</a></li>
                    <li><a href="/">Regenerate your PAH e-Ticket</a></li>
                    <li><a href="/">Reprint Confirmation</a></li>
                    <li><a href="/">Regenerate-e-Ticket</a></li>
                    <li><a href="/">Track Courier</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h6>Company</h6>
                <ul>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Media Center</a></li>
                    <li><a href="/">Policies</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h6>Popular Events</h6>
                <PopularEvents/>
            </div>
            <div className="col-sm-3 country-flag-sec">
                <h6>Popular Events</h6>
                <ul>
                    <li><a href="http://www.kyazoonga.com.au/" target="_blank"  rel="noopener noreferrer"><img src={require("../../assets/images/CountriesFlag/aus.png")} alt=""/>Australia</a></li>
                    <li><a href="http://www.kyazoonga.com/" target="_blank"  rel="noopener noreferrer"><img src={require("../../assets/images/CountriesFlag/ind.png")} alt=""/>India</a></li>
                    <li><a href="http://www.kyazoonga.ie/" target="_blank"  rel="noopener noreferrer"><img src={require("../../assets/images/CountriesFlag/ireland.png")} alt=""/>Ireland</a></li>
                    <li><a href="http://www.kyazoonga.ae/" target="_blank"  rel="noopener noreferrer"><img src={require("../../assets/images/CountriesFlag/uae.png")} alt=""/>United Arab Emirates</a></li>
                    <li><a href="http://www.kyazoonga.com/" target="_blank"  rel="noopener noreferrer"><img src={require("../../assets/images/CountriesFlag/usa.png")} alt=""/>United States</a></li>
                </ul>
            </div>
        </React.Fragment>
    );
}