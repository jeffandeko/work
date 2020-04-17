import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'

export class Google extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    signup(res) {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        debugger;
        axios.post('http://localhost:3000/Api/Login/work',
            googleresponse).then((result) => {
                let responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(result));
                this.props.history.push('/MyDashBoard')
            });
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            debugger;
            this.signup(response);
        }
        return (
            <div className="App">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Login with Facebook and  Google
                    </div>
                </div>
                <div className="row">
                    <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <GoogleLogin
                                clientId="1057436768107-0chri3b94nbdepsoklr9mfpuguabqdnc.apps.googleusercontent.com"
                                buttonText="Login"
                                fields="name,email,picture"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />

                        </div>
                        <div className="col-sm-4"></div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Google;