import React from 'react';

export const FollowUs = () => {
    return (
        <React.Fragment>
            <h6>Follow Us</h6>
            <ul>
                <li><a className="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
                    <img src={require("../../assets/images/facebook.png")} alt="Facebook" width="32" height="32" /></a></li>
                <li><a className="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
                    <img src={require("../../assets/images/twitter.png")} alt="Twitter" width="32" height="32" /></a></li>
                <li><a className="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
                    <img src={require("../../assets/images/instagram.png")} alt="in" width="32" height="32" /></a></li>
                <li><a className="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
                    <img src={require("../../assets/images/snapchat.png")} alt="in" width="32" height="32" /></a></li>
                <li><a className="in" href="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
                    <img src={require("../../assets/images/in.png")} alt="Linkedin" width="32" height="32" /></a></li>
                <li><a className="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
                    <img src={require("../../assets/images/youtube.png")} alt="Youtube" width="32" height="32" /></a></li>
                <li><a className="g" href="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
                    <img src={require("../../assets/images/google.png")} alt="Google Plus" width="32" height="32" /></a></li>
                <li><a className="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
                    <img src={require("../../assets/images/pinterest.png")} alt="Pinterest" width="32" height="32" /></a></li>
            </ul>
            <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
        </React.Fragment>

    );
}