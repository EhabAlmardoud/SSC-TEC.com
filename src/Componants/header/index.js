import React, { Component } from 'react'
import './style.less'
import Logo from './../../images/logo.gif'
import HeaderMenu from './menu'
import SubHeader from './sub_header'

export default class header extends Component {
    render() {
        return (
            <div>
                <div className='header_main'>
                    <div className='header_logo'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    
                <HeaderMenu />
                </div>
                <SubHeader />
            </div>
        )
    }
}
