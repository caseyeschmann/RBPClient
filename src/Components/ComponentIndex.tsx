import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Individual Components

// Navbar and Landing Page (when first coming to page)
import Navbar from './Navbar/Navbar';
import WelcomePage from './WelcomePageFC';

// Login & Register Components
import LoginFC from './Auth/LoginFC';
import RegisterFC from './Auth/RegisterFC';

// Course List and Managements Componenents
import StudentViewCC from './CourseDisplay/StudentViewCC';
import EmployeeViewCC from './CourseDisplay/EmployeeViewCC';


const useStyles = makeStyles(()=>
    createStyles({
        mainDiv: {
            backgroundColor: 'white',
        }
    })
)

interface tokenProps {

    // token will become string upon login - will remain undefined until
    updateToken:(newToken: string) => void,

    // logout will clear the token
    clearToken:() => void,

    // a "set" token will be a string in localStorage
    token: string 
}


const ComponentIndex = (props: tokenProps) => {

    console.log('Props: ', props);

    const classes = useStyles();

    return (
            <React.Fragment>

                <Router>
                    <div className={classes.mainDiv}>
                     <Navbar token={props.token}  clearToken={props.clearToken} />
                    <Switch>

                        <Route exact path='/welcome' render={()=>(<WelcomePage />)} />
                        <Route exact path='/viewcourses' render={()=>(<StudentViewCC token={props.token} />)} />
                        <Route exact path='/employees' render={()=>(<EmployeeViewCC token={props.token} />)} />
                        <Route exact path='/register' render={()=>(<RegisterFC setToken={props.updateToken} />)} />
                        <Route exact path='/login' render={()=>(<LoginFC setToken={props.updateToken} />)} />

                    </Switch>
                    </div>
                </Router>

            </React.Fragment>
    )   
}

export default ComponentIndex;