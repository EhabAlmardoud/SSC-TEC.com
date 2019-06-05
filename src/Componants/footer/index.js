import React, { Component } from 'react'
import './style.less'
import Customers from './customers'
import Address from './cards/address'
import Contact from './cards/contact'
export default class Footer extends Component {



    render() {
        return (
            <div class="home-page-welcome">
                <Customers />
                <div className='footer_foot_continaer'>
                    <div className='footer_cardholder_container'>
                        <Address />
                        <Contact />
                    </div>
                </div>
            </div>
        )
    }
}
