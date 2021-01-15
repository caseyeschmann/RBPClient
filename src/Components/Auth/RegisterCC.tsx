  
import React from 'react';
import APIURL from '../../helpers/environment';
import { TextField, Button } from '@material-ui/core';

// import { RouteComponentProps } from 'react-router-dom';

interface RegisterFormProps {
    updateToken: (newToken: string) => void;
}

interface RegisterFormState {
    isAdmin: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    licenseState: string;
    licenseNumber: string;
}

export default class RegisterCC extends React.Component <RegisterFormProps, RegisterFormState> {

    constructor(props: RegisterFormProps) {
        super(props);
        this.state = {
            // now we will set up our login inputs
            isAdmin: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            licenseState: '',
            licenseNumber: ''
    };
}


// enterAdminStatus = (e: string) => {
//     this.setState({ isAdmin: e });
// }
// enterFirstName = (e: string) => {
//     this.setState({ firstName: e });
// }
// enterLastName = (e: string) => {
//     this.setState({ lastName: e });
// }
// enterEmail = (e: string) => {
//     this.setState({ email: e });
// }
// enterPassword = (e: string) => {
//     this.setState({ password: e });
// }
// enterLicenseState = (e: string) => {
//     this.setState({ licenseState: e });
// }
// enterLicenseNumber = (e: string) => {
//     this.setState({ licenseNumber: e });
// }


// Student Register

registerStudent (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(`${APIURL}/students/register`, {
        method: 'POST',
        body: JSON.stringify({
            student:
            {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                licenseState: this.state.licenseState,
                licenseNumber: this.state.licenseNumber
            }
        }),
        headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => 
        
        response.json())
        .then((data) => {
            this.props.updateToken(data.token);
            console.log('Student Created!')
            console.log(`Token: ${data.sessionToken}`)
            localStorage.setItem('Token: ', data.sessionToken)
        })
    }


// Employee Register

registerEmployee (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(`${APIURL}/employees/register`, {
        method: 'POST',
        body: JSON.stringify({
            employee:
            {
                isAdmin: this.state.isAdmin,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
        }),
        headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => 
        
        response.json())
        .then((data) => {
            this.props.updateToken(data.token);
            console.log('Student Created!')
            console.log(`Token: ${data.sessionToken}`)
            localStorage.setItem('Token: ', data.sessionToken)
        })
    }
    
    
    render() {
        return(
            <div>

                <h1>Student Register</h1>

            <form onSubmit={(e)=>this.registerStudent(e)} >

                <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setState({firstName: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>this.setState({lastName: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>this.setState({email: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setState({password: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="License State" variant="outlined" onChange={(e)=>this.setState({licenseState: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="License Number" variant="outlined" onChange={(e)=>this.setState({licenseNumber: (e.target.value)})} />
                <br />
                <br />
                <Button type='submit' color='primary' size='large' variant="contained">Create Account</Button>
                <br />
                <br />
            </form>

                <h1>Employee Register</h1>

            <form onSubmit={(e)=>this.registerEmployee(e)} >

                <TextField id="outlined-basic" label="Admin Status" variant="outlined" onChange={(e)=>this.setState({isAdmin: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setState({firstName: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>this.setState({lastName: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>this.setState({email: (e.target.value)})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setState({password: (e.target.value)})} />
                <br />
                <br />
                <Button type='submit' color='primary' size='large' variant="contained">Create Account</Button>
                <br />
                <br />
            </form>
        </div>
    
    )
}
}


// handleChange = (e) => {

//     // let adminStatus = true;
//     let adminValue = e.target.value;

//     if (adminValue = true) {
//         this.setState({ isAdmin: true })
//     } else {
//         this.setState({ isAdmin: false })
//     }
// }

// <div>
//     <h2>Register Below:</h2>

//     <form>
//     <input type="text" defaultValue={this.state.firstName} onChange={this.enterFirstName}/>
//     <input type="text" defaultValue={this.state.lastName} onChange={this.enterLastName}/>
//     <input type="text" defaultValue={this.state.email} onChange={this.enterEmail}/>
//     <input type="text" defaultValue={this.state.password} onChange={this.enterPassword}/>
//     <button onSubmit={this.submitRegisterForm}>Register</button>
//     </form>

    //     {/* <label htmlFor="name">Update Name</label>
    //     <input type="text" defaultValue={this.state.name}
    //     onChange={this.updateName} */}
    // </div>

// enterFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ firstName: e.target.value });
// }
// enterLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ lastName: e.target.value });
// }
// enterEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ email: e.target.value });
// }
// enterPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ password: e.target.value });
// }
// submitRegisterForm = () => {
//     // needs to post form info into database
// }