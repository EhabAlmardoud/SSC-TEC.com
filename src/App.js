import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAd, faTooth, faBook, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import './App.less';
import Header from './Componants/header'
import Body from './Componants/body'
import Footer from './Componants/footer'
library.add(fab, faAd, faTooth, faBook, faPhone, faEnvelope, );
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;