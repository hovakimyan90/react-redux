import React from 'react';

import { Router, Route, Link, History } from 'react-router';
// import classNames from 'classnames';





class Login extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);

    }

    login() {
        this.props.login(this.email.value, this.password.value);
    }
    render() {
        return (
            <div className="block-center mt-xl wd-xl login_box">
                { /* START panel */ }


                <div >
                    <input id="exampleInputEmail1" name="email" ref={(input) => this.email = input} type="email" placeholder="Enter email"   className="form-control" onKeyUp={this.props.onKeyUp.bind(null, 'email')}/>

                </div>
                <div className="panel panel-dark panel-flat">
                    <div className="panel-heading text-center">
                        <a href="#" className="login_title">
                            <span className="login_title" > Beauty Book </span>
                        </a>
                    </div>
                    <div className="panel-body">
                        <p className="text-center pv">SIGN IN TO CONTINUE.</p>


                        <p className="pt-lg text-center">Need to Signup?</p>


                    </div>
                </div>
            </div>
        );
    }

}

export default Login;