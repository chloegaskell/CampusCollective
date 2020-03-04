import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Your account
        </Typography>
        <form method="get" action="/CreateAccount" className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant='h5'>
                Name:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant='h6'>
              John Doe
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h5'>
                Email:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant='h6'>
              JohnDoe@mylaurier.ca
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h5'>
                School:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant='h6'>
              Wilfrid Laurier University
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h5'>
                Rating:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Rating name="read-only" value={4} readOnly />
            </Grid>
          </Grid>

          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
