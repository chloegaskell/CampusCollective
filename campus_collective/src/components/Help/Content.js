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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {

    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
export default function Album() {
  const classes = useStyles();
  return (

    <React.Fragment>
      <CssBaseline />
      <main>
      <FormControl>
      <Grid>
        <Grid item>
        <div className={classes.heroContent}>
        <Typography component="h5" variant="h5" color="primary" gutterBottom>
          For help, please send us an email using the form below
        </Typography>
        </div>

        <Input placeholder="Name" />
        <Input placeholder="Email Address" />
        </Grid>

      </Grid>

        <TextField
          placeholder="Write email"
          multiline={true}
          rows={100}
          rowsMax={4}
        />

        <div className={classes.heroButtons}>

        <Grid>

          <Button variant="outlined" color="primary" >
            Submit
          </Button>
        </Grid>
      </div>
      </FormControl>
      </main>
    </React.Fragment>
  );
}
