import React from 'react';
import LoginButton from './login-button';

export default class LoginForm extends React.Component {
    render() {
        return (
           <div className="container">
                <div className="card">
                    <h3 className="card-header">Log In</h3>
                    <div className="card-body">
                        <div>
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" />
                        </div> <br />
                        <div>
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" />
                        </div> <br />
                        <LoginButton />
                    </div>
                </div> 
           </div>
        );
    }
}