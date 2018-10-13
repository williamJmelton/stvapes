import React from 'react';

import Hero from '../components/Hero';
import Batteries from '../components/Batteries';

import Typography from '@material-ui/core/Typography';
import { withStyles, Paper } from '@material-ui/core';

import '../css-modules/base.css';

const styles = {
    textCenter: {
        textAlign: 'center'
    },
    textSection: {
        margin: '16px 0px'
    },
    paragraph: {
        width: '60%',
        textAlign: 'center',
        margin: 'auto'
    },
    root: {
        backgroundColor: '#ff002d'
    }
}

const Home = (props) => {
    const { classes } = props;
    return(
        <>
            {/* <Typography className={classes.textCenter} variant="display2">
                Welcome to ShadeTreeVapes.com!
            </Typography>
            <Divider /> */}
            <Typography className={[classes.textCenter, classes.textSection]} variant="headline">We Carry All the Latest Vaping Products!</Typography>
            <Typography className={classes.paragraph} variant="body2">
                Welcome to our website! Glad to have you visiting. We are a small-town business focused on customer
                service and low prices. We pride ourselves on the ammount of regular, repeat customers that visit us.
                We keep in stock all the latest and most popular vaping hardware and flavorings, from tops brands such as 
                Smok, E-Leaf, Vaporesso, Aspire, Geek Vape, iJoy, & many more. Be sure to visit our location inside of the 
                Golden East Crossing mall in Rocky Mount, NC to see our full line.<br/><br/>
                
                 We look forward to seeing you!
            </Typography>
            <Hero />
            <Paper className={classes.root} elevation={3}>
                <Batteries />
            </Paper>
        </>
    );
};

export default withStyles(styles)(Home);