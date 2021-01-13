import React, { Component } from 'react';
import ComponentIndex from './Components/ComponentIndex';


export default class AppCC extends Component {
    // constructor(){
    //     super(props)
    //     this.state = {
    //         token: localStorage.getItem('token') ? localStorage.getItem('token') : '' ,
    //         // schoolsUpdate: []
    //     }
    // }

            // super(props)
        // this.state = {
        //     sessionToken: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        // }

    state = {
        token: ""
    }

    componentWillMount() {
        if (localStorage.getItem('token')) {
            this.setState({
                token: localStorage.getItem('token')
            })
        }
        console.log(this.state.token)
    }


    componentDidMount() {
        console.log(this.state.token)
    }


    updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken)
        this.setState({
            token: newToken
        })
    }

    clearToken = () => {
        localStorage.clear();
        this.setState({
            token: ''
        })
    }

    render() {
        return (
            <div>
                <ComponentIndex updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} />
            </div>
        )
    }
}