import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };

        return (
            <div className="carousel-container">
                <Slider {...settings }>
                    <div className="carousel-item-container">
                        <div>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/lion-king-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                        <div>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/brother-bear-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                        <div>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/mirai-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                        <div>
                            <img src="https://kirara.s3.us-west-1.amazonaws.com/kiki-thumbnail.jpeg" className="thumbnail-placeholder"/>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Carousel;