import React from 'react';

export const Miscellaneous = () => {
    return (
        <section className="home-cat-sec text-center">
            <div className="container-fluid">
                <h2 className="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/images/kyazoonga.png")} style={{ "width": " 100px" }} alt=""/></a> to create and sell your event tickets online <small>Discover and purchase tickets to cool events created and listed by organizers directly</small></h2>
                <div className="row">
                    <div className="col-sm-6 cat-box">
                        <div id="dvYoutube">
                            <iframe style={{'width': '100%', 'height': '400px' }}src='https://www.youtube.com/embed/IyucJZev9wM' 
                            title="youtube" frameBorder='0' webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm-6 cat-box">
                        <a href="/" className="block-link">
                            <div className="cat-txt">
                                <h3>Kyazoonga Blog</h3>
                            </div>
                            <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="" className="img-full-width" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}