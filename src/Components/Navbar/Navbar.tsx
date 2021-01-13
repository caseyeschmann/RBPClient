import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() =>
    createStyles({
    }),
);

interface Props {
    clearToken:() => void
    token: string
}

const Navbar = (props: Props) => {
    const classes = useStyles();

    return (
        <div>
        <AppBar position='static' color='secondary'>
            <Toolbar>

                <Button><Link to="/welcome">Home</Link></Button>
                <Button><Link to="/viewcourses">View Upcoming Courses</Link></Button>
                <Button><Link to="/employees">Employees</Link></Button>
                <Button><Link to="/login">Login</Link></Button>
                <Button><Link to="/register">Sign Up</Link></Button>
                <Button><Link to="/logout">Logout</Link></Button>

            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;