import React, { Component } from 'react'
import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="login-form">
                <label>Username</label>
                <input />
                <label>Password</label>
                <input />
                <button>Signin to CodersX</button>
            </div>
        )
    }
}

export default LoginForm