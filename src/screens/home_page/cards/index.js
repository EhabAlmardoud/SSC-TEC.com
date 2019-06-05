import React, { Component } from 'react'
import './style.less'
import { map } from 'lodash'
import Card from './card'

const cardList = [
    {
        name: 'Advertising',
        icon: 'ad',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
    },
    {
        name: 'Dental',
        icon: 'tooth',
        text: "SSC introdoces the most cutting edge technology in the dental industry, from 3d printers to scanners, milling machines .... "
    },
    {
        name: 'Prototyping',
        icon: 'book',
        text: "3D printers, benchtop milling machines, 3D engravers, impact printers .... "
    }

]

export default class cards extends Component {


    renderCards = () => {
        return map(cardList, (card, index) => {
            return <Card card={card} key={index} />
        })
    }

    render() {
        return (
            <div className='cardholder_main'>
                <div className='cardholder_header'>
                    Applications
                </div>
                <div className='cardholder_container'>
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}
