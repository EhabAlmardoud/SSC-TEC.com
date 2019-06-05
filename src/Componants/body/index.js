import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './style.less';
import HomePage from './../../screens/home_page'
export default class SiteBody extends Component {
    render() {
        return (
            <Router>
                <div className='Body_container'>
                    <Route path="/" component={HomePage} />
                </div>
            </Router>
        )
    }
}
