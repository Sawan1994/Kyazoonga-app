import React from 'react';
import { Subscribe } from '../components/Subscribe';
import { FooterMenu } from '../components/FooterMenu';
import { FollowUs } from '../components/FollowUs';

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <Subscribe/>
                </div>
                <div className="row footer-links">
                    <FooterMenu/>
                </div>
                <div className="footer-social text-center">
                    <FollowUs/>
                </div>
            </div>
        </footer>
    );
}