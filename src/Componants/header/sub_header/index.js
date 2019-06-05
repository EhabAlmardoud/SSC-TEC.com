import React, { Component } from 'react'
import './style.less'

export default class sub_header extends Component {
    render() {
        return (
            <div className='subheader'>
                <div className='header_info'>
                        MAIL: info@ssc-tec.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        PHONE: +963 944 335 747 / +963 944 433 656
                    </div>
                    <div className="header_button">
                        Contact US
                    </div>
            </div>
        )
    }
}
