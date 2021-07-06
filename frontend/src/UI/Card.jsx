import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/PersonOutline';
import Button from '@material-ui/core/Button';
import axios from 'axios';

/* Estilos aplicados al Componente 'Card' */
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 10,
        margin: 'auto',
        maxWidth: 600,
        borderRadius: '5px'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'inline',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '5px'
    },
    button: {
        backgroundColor: '#fff',
        color: '#0066FF',
        '&:hover': {
            backgroundColor: '#0066FF',
            color: '#fff',
        },
    }
});

class Card extends React.Component {

    state = { data: {} , error: null }

    componentDidMount() {
        axios.get('http://localhost:4000/api/users/' + this.props.match.params.id)
            .then(request => {
                const user = request.data;
                this.setState({ data: user, error: null });
            })
            .catch(error => {
                this.setState({ data: null, error: error });
            })

    }



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container spacing={2}>
                        <Grid item style={{ padding: '50px'}}>
                            <Avatar><Person/></Avatar>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        {this.state.data.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {this.state.data.email}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {this.state.data.web}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {this.state.data.countrie}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.button} href="/">Return</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <br />
            </div>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
