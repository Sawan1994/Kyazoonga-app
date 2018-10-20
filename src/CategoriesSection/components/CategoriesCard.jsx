import React from 'react';

export const CategoriesCard = (props) => {

    const {title, backdrop} = props;

    return (
        <div className="col-sm-4 cat-box">
            <a href="/" className="block-link">
                <div className="cat-txt">
                    <h3>{title}</h3>
                </div>
                <img src={backdrop.image_link} alt={backdrop.alt_text} className="img-full-width" />
            </a>
        </div>
    );
}