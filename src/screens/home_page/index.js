import React, { Component } from 'react'
import './style.less'
import ImageSlider from './../../Componants/image_slider'
import CardsHolder from './cards'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                    <ImageSlider />
                    <CardsHolder />
            </div>
        )
    }
}
