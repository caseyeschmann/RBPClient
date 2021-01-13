import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import ictbuilding from '../../src/assets/ictbuilding.jpg'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '5em',
            backgroundColor: 'white',
            display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
        }
    }),
);

const WelcomePage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
            <h1>Welcome to Insurance Career Training, Inc.!</h1>
            <p>Online continuing education courses for insurance agents.</p>
            <img id = 'ictbuliding' src ={ictbuilding} />
                
            </div>
        </Container>
    )
}

export default WelcomePage;