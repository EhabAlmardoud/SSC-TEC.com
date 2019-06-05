import React, { Component } from 'react'
import './style.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Facebook from './../../../images/footer/facebook.png'


export default class contact extends Component {
    render() {

        return (
            <div className='footer_cardholder_card' style={{ display: 'inline' }}>
                <h1>
                    Contact
                </h1>
                <p>
                    <FontAwesomeIcon icon="phone" /> &nbsp;
                    +963 944 335 747
                </p>
                <p>
                    <FontAwesomeIcon icon="envelope" /> &nbsp;
                    info@ssc-tec.com
                </p>
                <p>
                    <a href="facebook.com/">
                        <img src={Facebook} alt="facebook" style={{ width: '10%' }} />
                    </a>
                </p>
            </div>
        )
    }
}
