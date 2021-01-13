import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import WelcomePage from './WelcomePage';
import LoginFC from './Auth/LoginFC';
import RegisterFC from './Auth/RegisterFC';
import StudentViewCC from './CourseDisplay/StudentViewCC';
import EmployeeViewCC from './CourseDisplay/EmployeeViewCC';
import Auth from '../Components/Auth/Auth';

const useStyles = makeStyles(()=>
    createStyles({
        mainDiv: {
            backgroundColor: 'white',
        }
    })
)

interface Props {
    updateToken:(newToken: string) => void,
    clearToken:() => void,
    token: string 
}

const ComponentIndex = (props: Props) => {
    const classes = useStyles();

    return (
            <React.Fragment>
                <Router>
                    <div className={classes.mainDiv}>
                     <Navbar token={props.token} clearToken={props.clearToken} />
                    <Switch>
                        <Route exact path='/welcome' render={()=>(<WelcomePage />)} />
                        <Route exact path='/viewcourses' render={()=>(<StudentViewCC token={props.token} />)} />
                        <Route exact path='/employees' render={()=>(<EmployeeViewCC token={props.token} />)} />
                        <Route exact path='/register' render={()=>(<RegisterFC setToken={props.updateToken} />)} />
                        <Route exact path='/login' render={()=>(<LoginFC setToken={props.updateToken} />)} />
                        <Route exact path='/logout' render={()=>(<Auth clearToken={props.clearToken} />)} />
                    </Switch>
                    </div>
                </Router>
            </React.Fragment>
    )   
}

export default ComponentIndex;