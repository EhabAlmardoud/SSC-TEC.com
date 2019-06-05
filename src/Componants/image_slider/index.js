import React, { Component } from 'react'
import './style.less'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider1 from './../../images/slider/slider1.jpg'
import Slider2 from './../../images/slider/slider2.jpg'
import Slider3 from './../../images/slider/slider3.jpg'


export default class imageSlider extends Component {

    handleClick = (item) => {
        alert(item)
    }

    render() {
        return (
            <div style={{margin:'1% 0'}}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    // onClickItem={() => this.handleClick()}
                >
                    <div onClick={() => this.handleClick('/1')}>
                        <img src={Slider1} alt='photos' />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div onClick={() => this.handleClick('/1')}>
                        <img src={Slider2} alt='photos' />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div onClick={() => this.handleClick('/1')}>
                        <img src={Slider3} alt='photos' />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        )
    }
}
