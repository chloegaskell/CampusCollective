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

import toolbox from '../Images/toolbox.jpg';
import bike from '../Images/bike.jpg';
import add from '../Images/add.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingLeft: 26,
        paddingTop: 26,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 300,
            },
        },
    },
    card: {
        width: 345,
        marginTop: 26,
        marginRight: 26,
        marginBottom: 26,
        maxHeight: 375,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardSet: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        
            <Typography component="h1" variant="h5">
                My Items
            </Typography>
            <Divider className={classes.underline}/>
            
            <Box className={classes.cardSet}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tool Set
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                210-piece tools kit is a great back-up set to stash in your house or vehicle for emergency repairs.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See Requests
                        </Button>
                        <Button size="small" color="primary">
                            Edit item
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={bike}
                            title="Bicycle"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Bicycle
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Bike is great for ages 10 and up and fits an inseam of 70-85 cm (28-34 in.). 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See Requests
                        </Button>
                        <Button size="small" color="primary">
                            Edit item
                        </Button>
                    </CardActions>
                </Card>
    
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={add}
                            title="Add"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Upload Item
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Click here to upload a new item, set your price, add information and start renting
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See Requests
                        </Button>
                        <Button size="small" color="primary">
                            Edit item
                        </Button>
                    </CardActions>
                </Card>
            </Box>     
    
    
            <Typography component="h1" variant="h5">
                My Rentals
            </Typography>
            <Divider className={classes.underline}/>
                
            <Box className={classes.cardSet}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={toolbox}
                            title="Toolbox"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tool Set
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                210-piece tools kit is a great back-up set to stash in your house or vehicle for emergency repairs.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Contact Owner
                        </Button>
                        <Button size="small" color="primary">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
            </Box>     
    
            <Typography component="h1" variant="h5">
                Suggested Rentals
            </Typography>
            <Divider className={classes.underline}/>
                
            <Box className={classes.cardSet}>
                <Card className={classes.card}>
                    <CardActionArea>
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
                        <Button size="small" color="primary">
                            Contact Owner
                        </Button>
                        <Button size="small" color="primary">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
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
                        <Button size="small" color="primary">
                            Contact Owner
                        </Button>
                        <Button size="small" color="primary">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
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
                        <Button size="small" color="primary">
                            Contact Owner
                        </Button>
                        <Button size="small" color="primary">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}