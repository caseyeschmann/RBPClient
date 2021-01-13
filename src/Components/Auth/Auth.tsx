import React from 'react';
import {Container, Button} from '@material-ui/core';

interface AuthProps {
    clearToken: () => void;
}

const Auth = (props: AuthProps) => {
    return (
        <Container>
            <Button variant="outlined" color="secondary" onClick={props.clearToken}>CLICK HERE TO LOG OUT</Button>
        </Container>
    )
}

export default Auth;
