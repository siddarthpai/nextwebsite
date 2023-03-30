import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => 
<Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
        <Review by="Harini Anand">
            Absolute finesse in terms of design and fit!
            One of the most comfortable and trendy hoodies in the market
        </Review>
    </CarouselItem>
    <CarouselItem index={1}>
        <Review by="Anushri Anil">
            Love this hoodie! Extremely Comfortable and perfect fit
            Such a cool design with an amazing print!
            One of my best buys ❤️
        </Review>
    </CarouselItem>
    <CarouselItem index={2}>
        <Review by="oshumoshu">
            I love it!
        </Review>
    </CarouselItem>
    <CarouselItem index={3}>
        <Review by="kaasu">
            SidPai gay fr
        </Review>
    </CarouselItem>
    <CarouselItem index={4}>
        <Review by="sidpai">
            safe
        </Review>
    </CarouselItem>
</Carousel>


export default Testimonials