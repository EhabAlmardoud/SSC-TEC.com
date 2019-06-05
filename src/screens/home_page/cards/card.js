import React, { Component } from 'react'
import './style.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class card extends Component {
    render() {
        const { card } = this.props
        return (
            <div className='cardholder_card'>
                <h1>
                    {card.name}
                </h1>
                <FontAwesomeIcon icon={card.icon} className='cardholder_fontAw' size='4x' />
                <p>
                    {card.text}
                </p>
            </div>
        )
    }
}
