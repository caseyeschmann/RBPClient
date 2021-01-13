import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import RegisterCC from './RegisterCC';
// import { RouteComponentProps } from 'react-router-dom';


const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        }
    }),
);

interface RegisterFormProps {
    setToken: (newToken: string) => void
}

const RegisterFC = (props: RegisterFormProps) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>REGISTER</h1>
                <RegisterCC setToken={props.setToken} />
            </div>
        </Container>
    )
}

export default RegisterFC;
