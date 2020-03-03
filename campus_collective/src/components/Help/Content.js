import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
export default function Album() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        To implement
      </div>
  );
}
