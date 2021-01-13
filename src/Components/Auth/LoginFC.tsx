import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import LoginCC from './LoginCC';

// change these stylings
const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        }
    }),
);

interface LoginProps {
    setToken: (newToken: string) => void
}

const LoginFC =(props: LoginProps)=>{
    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <div>
                <h1>LOG IN</h1>
                <LoginCC setToken={props.setToken} />
            </div>  
        </Container>
    )
}

export default LoginFC;

