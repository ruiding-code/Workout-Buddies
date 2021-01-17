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
        //console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentClicked = () => {
        console.log('clicked');
    }


    render(){
        let facebookData;

        if(this.state.isLoggedIn){
            facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} /> 
                    <h2>Welcome {this.state.name}</h2>

                    
                </div>
            );
        } else {
            facebookData = (
            <FacebookLogin
                appId="243647650504588"
                autoLoad={true}
                fields="name,email,picture"
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