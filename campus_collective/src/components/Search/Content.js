import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Scrollbar from '../Scrollbar/scrollbar.css';

import toolbox from '../Images/toolbox.jpg';
import bike from '../Images/bike.jpg';
import add from '../Images/add.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingLeft: 26,
        paddingTop: 26,
    },
    card: {
        width: 345,
        maxHeight: 375,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardSet: {
        display: 'flex',
        flexDirection: 'row',
    },
    gridList: {
      flexWrap: 'flexWrap',
    justifyContent: 'space-around',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    },
    underline: {
      marginRight: 26,
      marginBottom:26,
    },
    gridDiv: {
      display: 'grid',
      overflow: 'hidden',
      marginBottom: 26,
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Typography component="h1" variant="h5">
                Search Results
            </Typography>
            <Divider className={classes.underline}/>

            <div className={classes.gridDiv}>
            <GridList className={classes.gridList} cols={'auto'} cellHeight={375} spacing={26}>
              <GridListTile>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile  className={classes.tile}>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile  className={classes.tile}>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile  className={classes.tile}>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile  className={classes.tile}>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile  className={classes.tile}>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
              <GridListTile  className={classes.tile}>
                <Card className={classes.card}>
                    <CardActionArea
                      href="/ItemDetails">
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Placeholder
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All items here are just for UI design purposes. These are just placeholders.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="/ItemDetails">
                            Request Rental
                        </Button>
                        <Button size="small" color="primary" href="/ItemDetails">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
              </GridListTile>
            </GridList>
            </div>
        </div>
    );
}
