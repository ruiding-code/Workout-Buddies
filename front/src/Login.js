import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class LoginFacebook extends Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = (response) => {
        console.log(response);
    }

    componentClicked = () => {
        console.log('clicked');
    }


    render(){
        let facebookData;

        if(this.state.isLoggedIn){
            facebookData = null;
        } else {
            facebookData = (
            <FacebookLogin
                appId="243647650504588"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        }
            
        return(
            <div>
                {facebookData}
            </div>
        );
    }
}