import React from 'react';
import { featuredList } from "../../assets/data";

export const Feature = () => {
    return (
        <section className="home-featured-sec text-center">
            <h2 className="site-title"><span>We've been featured in</span></h2>
            <div className="container-fluid">
                {featuredList.map((item, index) => (
                    <a target="_blank"  rel="noopener noreferrer" key={index} href={item.ref_link}>
                        <img src={item.image_link} alt={item.alt_text} />
                    </a>
                ))}
            </div>
        </section>
    );
}