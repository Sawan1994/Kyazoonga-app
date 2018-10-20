import React from "react";

export const CarouselSlider = (props) => {
    const { image_link, alt_text } = props.backdrop;
    const { poster, link, mime_type } = props.video;

    return (
        <React.Fragment>
            <img src={image_link} alt={alt_text} className="hide-on-desktop" />
            <div className="hide-on-mobile">
                <video title="0" id="bgvid0" autoPlay loop muted poster={poster}>
                    <source src={link} type={mime_type} />Your browser does not support the video tag.</video>
            </div>
        </React.Fragment>
    );
}