import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: "#FFF"
    },
}));

const Bar = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link style={{ textDecoration: 'none'}} color="primary" to='/'>
                        <Typography className={classes.title}>
                            CRUD-USERS
                        </Typography>
                    </Link>

                    <Link color="primary" to='/create'>
                        <IconButton color="default" aria-label="add-user">
                            <PersonAddIcon style={{ color: 'white' }} />
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Bar;