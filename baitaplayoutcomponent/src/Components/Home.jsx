import React, { Component } from 'react'
import Footer from './Footer'
import Body from './Body'
import Header from './Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="div">
            <Header />
        </div>
        <div className="div">
            <Body />
        </div>        
        <div className="div">
            <Footer />
        </div>
      </div>
    )
  }
}

