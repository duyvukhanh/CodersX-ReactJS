import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="header">
                <div className="header-content">Sign in</div>
            </div>
        )
    }
}

export default Header