import React from "react";
import { carouselSlideList } from "../../assets/data";
import { CarouselSlider } from "./CarouselSlider";

export const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
            <h1>Tickets made simple for everyone, everywhere</h1>
            <div className="site-manu container">
                <div className="collapse navbar-collapse hide-on-mobile">
                    <ul className="nav navbar-nav sub-main-nav">
                        <li><a href="/">Concerts</a></li>
                        <li><a href="/" className="blue-bg">Cricket</a></li>
                        <li><a href="/" className="orange-bg">Events</a></li>
                        <li><a href="/" className="green-bg">Sports</a></li>
                        <li><a href="/" className="pink-lt-bg">Amusement Parks</a></li>
                        <li><a href="/" className="purple-bg">Restaurants</a></li>
                        <li><a href="/" className="yellow-bg">Theatre & Arts</a></li>
                        <li><a href="/">Parties</a></li>
                    </ul>
                </div>
                <div className="banner-serch-box"><input id="txtSearchBox" className="" name="q" placeholder="Search for an event, venue or city" type="text" /><a href="/" ><i className="fa fa-search" aria-hidden="true"></i></a></div>
            </div>
            <div className="carousel-inner">
                {carouselSlideList.map((item, index) => (
                    <div data-slide={index} key={item.id} className={index === 0 ? "item active" : "item"}>
                        <CarouselSlider {...item} />
                    </div>
                ))}
            </div>

        </div>
    );
}