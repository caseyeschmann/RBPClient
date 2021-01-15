import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import { TextField, Button } from '@material-ui/core';


interface LoginFormProps {
    updateToken: (newToken: string) => void;
}

interface LoginFormState {
    email: string;
    password: string;
}

export default class LoginCC extends React.Component <LoginFormProps, LoginFormState> {

    constructor(props: LoginFormProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
}


// Student Login

handleStudentLogin(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
        fetch (`${APIURL}/students/login`, {
            method: 'POST',
            body: JSON.stringify({
                student:
                {email: this.state.email,
                password: this.state.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then((data)=> {
                this.props.updateToken(data.token)
                console.log('Student Logged In!')
                console.log(`Token: ${data.sessionToken}`)
                localStorage.setItem('Token: ', data.sessionToken)
            })

    }


// Employee Login

handleEmployeeLogin(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
        fetch (`${APIURL}/employees/login`, {
            method: 'POST',
            body: JSON.stringify({
                employee:
                {email: this.state.email,
                password: this.state.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then((data)=> {
                this.props.updateToken(data.sessionToken)
                console.log('Student Logged In!')
                console.log(`Token: ${data.sessionToken}`)
                // localStorage.setItem('Token: ', data.sessionToken)
            })

    }




    render() {
        return(
            <div>
                <h1>Student Login</h1>
                <form onSubmit={(e) => this.handleStudentLogin(e)}>
                    <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>this.setState({email: (e.target.value)})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setState({password: (e.target.value)})} />
                    <br />
                    <br />
                    <Button color="primary" size="large" type='submit' variant="contained">Login</Button>
                </form>


                <h1>Employee Login</h1>
                <form onSubmit={(e) => this.handleEmployeeLogin(e)}>
                    <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>this.setState({email: (e.target.value)})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setState({password: (e.target.value)})} />
                    <br />
                    <br />
                    <Button color="primary" size="large" type='submit' variant="contained">Login</Button>
                </form>
            </div>
        )
    }}