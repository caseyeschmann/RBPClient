import React, {Component} from 'react';
import APIURL from '../helpers/environment';
import { TextField, Button } from '@material-ui/core';


interface SubscriberProps {
    
}

interface LoginFormState {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    currentEmployer: string,
    enterMessage: string
}

export default class SubscribeOrApply extends React.Component <SubscriberProps, LoginFormState> {

    constructor(props: SubscriberProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: 0,
            currentEmployer: '',
            enterMessage: ''
        }
}


// Join Newsletter

handleNewsletter(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
        fetch (`${APIURL}/subscribers/newsletter`, {
            method: 'POST',
            body: JSON.stringify({
                subscriber:
                {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then(()=> {
                console.log('You have joined our mailing list!')
                alert('You have joined our mailing list!')
            })

    }

// Join Texting Updates

handleTextUpdates(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
        fetch (`${APIURL}/subscribers/texts`, {
            method: 'POST',
            body: JSON.stringify({
                subscriber:
                {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then(()=> {
                console.log('You have joined our text subscribers list!')
                alert('You have joined our text subscribers list!')
            })

    }


// Employment Application

handleApplication(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
        fetch (`${APIURL}/subscribers/employment`, {
            method: 'POST',
            body: JSON.stringify({
                subscriber:
                {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                currentEmployer: this.state.currentEmployer,
                enterMessage: this.state.enterMessage
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then(()=> {
                console.log('You have joined our applicants list!')
                alert('You have joined our applicants list!')
            })

    }

    render() {
        
        return(
            <div>
                
            <h2>Get our Newsletter!</h2>
                <form onSubmit={(e) => this.handleNewsletter(e)}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setState({firstName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>this.setState({lastName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" onChange={(e)=>this.setState({email: e.target.value})} />
                    <br />
                    <br />
                    <Button color="primary" size="large" type='submit' variant="contained">Stay in the Loop!</Button>
                </form>


                <h2>Get our Newsletter!</h2>
                <form onSubmit={(e) => this.handleNewsletter(e)}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setState({firstName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>this.setState({lastName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" onChange={(e)=>this.setState({email: e.target.value})} />
                    <br />
                    <br />
                    <Button color="primary" size="large" type='submit' variant="contained">Stay in the Loop!</Button>
                </form>


                <h2>Get Text Updates</h2>
                <form onSubmit={(e) => this.handleNewsletter(e)}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setState({firstName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>this.setState({lastName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Phone #" variant="outlined" onChange={(e)=>this.setState({phoneNumber: parseInt(e.target.value)})} />
                    <br />
                    <br />
                    <Button color="primary" size="large" type='submit' variant="contained">Get Text Updates!</Button>
                </form>


                <h2>Interested in Career Opportunities?</h2>
                <form onSubmit={(e) => this.handleApplication(e)}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setState({firstName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>this.setState({lastName: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" onChange={(e)=>this.setState({email: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Phone #" variant="outlined" onChange={(e)=>this.setState({phoneNumber: parseInt(e.target.value)})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Current Employer" variant="outlined" onChange={(e)=>this.setState({currentEmployer: e.target.value})} />
                    <br />
                    <br />
                    <TextField id="outlined-basic" label="Why work for ICT?" variant="outlined" onChange={(e)=>this.setState({enterMessage: e.target.value})} />
                    <br />
                    <br />
                    <Button color="primary" size="large" type='submit' variant="contained">Join our Applicants List!</Button>
                    <br />
                    <br />
                </form>

            </div>
        )
    }}