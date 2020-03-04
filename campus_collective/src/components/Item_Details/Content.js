import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';

import toolbox from '../Images/toolbox.jpg';
import tools1 from '../Images/tools1.jpg';
import tools2 from '../Images/tools2.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingLeft: 26,
        paddingTop: 26,
    },
    underline: {
      marginRight: 26,
      marginBottom: 26,
    },
    title: {
        marginLeft: -26,
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    gridDiv: {
      display: 'grid',
      overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  body: {
    paddingTop: 26,
    paddingBottom: 26,
  },
  avatar: {
    color: theme.palette.getContrastText('#009be5'),
    backgroundColor: '#009be5',
  }
}));

export default function SearchAppBar() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h4" flexWrap>
              Tool Set - $15/day
            </Typography>
            <Avatar alt="Rentee" className={classes.avatar}>R</Avatar>
            <Rating name="read-only" value={4} readOnly />
            <Button variant="contained" color="primary" size="large" onClick={handleClickOpen}>Request Rental</Button>
          </Toolbar>

          <Divider className={classes.underline}/>

          <div className={classes.gridDiv}>
            <GridList className={classes.gridList} cols={'auto'} cellHeight={240} spacing={26}>
              <GridListTile>
                <img src={toolbox}/>
              </GridListTile>
              <GridListTile>
                <img src={tools1}/>
              </GridListTile>
              <GridListTile>
                <img src={tools2}/>
              </GridListTile>
              <GridListTile>
                <img src={toolbox}/>
              </GridListTile>
              <GridListTile>
                <img src={tools1}/>
              </GridListTile>
              <GridListTile>
                <img src={tools2}/>
              </GridListTile>
            </GridList>
          </div>

          <Typography vriant="body" className={classes.body}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices tortor in nibh sagittis, non lobortis lorem tincidunt. Vivamus dignissim turpis non lacus viverra, vitae laoreet odio consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec tortor hendrerit, lobortis nisl quis, porttitor lectus. Etiam nec mollis tellus. Ut hendrerit sem et eleifend viverra. Cras vestibulum eleifend pellentesque. Mauris viverra enim ut hendrerit eleifend. Nam sed pulvinar turpis.

Donec consectetur nisl leo, sit amet bibendum urna mattis sodales. Aliquam nec iaculis est. Etiam ex risus, condimentum et magna et, luctus pellentesque nulla. Nulla dolor mi, consectetur non nunc sit amet, pharetra elementum nibh. Nulla nec convallis lectus. Fusce vel elit quis velit imperdiet elementum eget vitae neque. Pellentesque eu sapien feugiat, aliquet arcu vitae, lacinia metus. Pellentesque at egestas sem. Etiam dolor mi, pellentesque et est id, lobortis blandit tellus. Phasellus pretium fermentum neque non varius. Mauris ligula sapien, rutrum at velit nec, luctus mollis mauris. Cras accumsan tristique risus et viverra. Sed fringilla ipsum nec est mollis sollicitudin. Donec eget ex euismod, placerat nibh eget, rutrum dolor. Fusce eget mollis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Suspendisse vitae arcu suscipit, viverra nisi ac, laoreet nulla. Ut commodo orci ut nibh vestibulum placerat. Quisque dictum hendrerit urna et feugiat. Donec imperdiet vitae turpis non tempus. Fusce semper eleifend ullamcorper. Cras eu mollis enim. Curabitur nec convallis tortor.

Suspendisse in viverra tellus. Proin dolor arcu, placerat quis felis nec, consectetur ultricies tellus. Fusce tempor elit quis massa maximus, vitae ultrices turpis aliquam. In sapien nulla, tincidunt eget sodales vel, viverra imperdiet nibh. Praesent fermentum ante velit, nec convallis ligula tristique a. Ut luctus ultricies mattis. Aliquam finibus, mi eu tempus ultrices, turpis purus egestas dolor, vitae efficitur neque magna et ligula. Maecenas vitae lacinia elit, eget suscipit tortor.

Mauris id fermentum elit, et porttitor augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis volutpat dictum. Curabitur eu ipsum at ipsum commodo luctus non quis dolor. Praesent turpis eros, dignissim eget mollis ac, hendrerit sit amet augue. Sed dictum ac augue eu tristique. Fusce faucibus sit amet elit eu consectetur. Fusce sit amet erat congue, facilisis odio ac, fermentum tortor. Quisque at aliquet dolor.
          </Typography>
          <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClickOpen}>
          Request Rental
          </Button>

          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Rental Requested"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The rentee will be notified of your request and can confirm or deny it, you will be notified once they have made a decision. If request is accepted payment will automatically be taken and contact with the rentee will become avalible to set up delivery/pick-up.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
          </div>
    );
}
