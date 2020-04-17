import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { server } from '../Function';

export default class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: ''
        }

    };
    responseFacebook = response => {
        server({
            page: 'facebook',
            response
        }).then().catch(e => alert(e))

    };

    render() {
        const { isLoggedIn } = this.state
        let fbContent;

        if (isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '500px',
                    margin: 'auto', background: '#77d8d8',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                      Email:{this.state.email}



                </div>
            )

        } else {
            fbContent = (<FacebookLogin
                appId="578679659668343"
                autoLoad={true}
                fields="name,email,picture"
                onClick={() => this.componentClicked}
                callback={() => this.responseFacebook()}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
            />);
        }
        return (
            <div>{fbContent}</div>
        )
    }
}