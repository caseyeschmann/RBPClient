import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import { TextField, Button } from '@material-ui/core';


interface LoginFormProps {
    setToken: (newToken: string) => void;
}

interface LoginFormState {
    email: string;
    password: string;
}

export default class LoginCC extends React.Component <LoginFormProps, LoginFormState> {

    constructor(props: LoginFormProps) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
    }
}

handleSubmit(e: React.FormEvent<HTMLFormElement>){
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
                this.props.setToken(data.token)
                console.log('User Logged In!')
                console.log(`Token: ${data.sessionToken}`)
            })

    }
    render() {
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
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
    }
    
    
    
    // const { email, password } = this.state


    
    
    // handleChange () {
        //     this.setState({[e.target.name]: e.target.value})
        //     this.setState({e.target.value})
            // }
            
            // submitEmployeeLogin () {
                //     // event.preventdefault();
            //     // console.log(this.state)
            
            //     const employeeLoginInfo = {
            //         method: 'POST',
            //         headers: new Headers ({
                //             'Content-Type': 'application/json',
                //             // 'Authorization': newToken
                //         )},
                //         body: JSON.stringify( data )
                //     };
                
                //     fetch (`${APIURL}/employees/login`, employeeLoginInfo)
                //         .then(res => res.json())
                //         .then(data => {
                    //             this.setState({
                        //                 email: data.email,
                        //                 password: data.password
                        //             })
                        //         })
                        // }

        // {/* 
        //                     <div>
        //                         <input type='text' value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
        //                     </div>
        
        //                     <div>
        //                         <input type='text' value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
        //                     </div>
        
        //                     <button type='submit'>Login</button> */}
}