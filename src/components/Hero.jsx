import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';

import slant from '../css-modules/slant.css';

import penVape from '../assets/penVape.svg';
import modVape from '../assets/modVape.svg';

const styles = {
  heading: {
    // color: '#ff1026',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  vapeIcon: {
    height: 150,
    width: 'auto',
  },
  heroCard: {
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  textPadding: {
    margin: '20px 20px',
    color: 'black',
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
  },
  vGodBG: {
    backgroundImage: 'url("vgod.jpg")',
  },
};

const Hero = (props) => {
  const { classes } = props;
  return (
    <div className={slant.slant}>
      <Typography className={classes.heading} variant="display3">
        What are E-Cigs?
      </Typography>
      <Grid container spacing={16} justify="space-around">
        <Grid item>
          <div className={classes.heroCard}>
            <Typography className={classes.blackText} variant="headline">
              Pen Vapes
            </Typography>
            <img alt="vapeIcon" className={classes.vapeIcon} src={penVape} />
            <Typography className={classes.textPadding} variant="body2">
              The pen style E-Cigs are usually geared twards begnner vapers,
              looking to dip thier feet in the water without dedicating to a
              larger purchase (such as a box vape). Pen vapes work just as all
              vapes do, using a coil heating element wrapped around a piece of
              organic cotton. When the juice is inserted, it saturates the
              cotton (called the wick). When the power button is pressed, the
              heating element (coil) gets hot enough to vaporize the juice in
              the sautated cotton. This produces vapor. When using a small pen
              vape, it is important to keep in mind the small coils cannot
              handle thick, oily juices. It is always reccomended to use 50/50
              blend vape juices with pen vapes.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.heroCard}>
            <img alt="penIcon" className={classes.vapeIcon} src={modVape} />
            <Typography className={classes.blackText} variant="headline">
              Vape Mods
            </Typography>
            <Typography className={classes.textPadding} variant="body2">
              Vape mods are the step up from a pen vape - they pack a
              significantly bigger punch than the smaller pen counterpart.
              Vape mods come in thousands of different styles, powers, &
              colors. Vape mods may or may not take an external battery.
              Generally vape mods consume 18650 high-drain batteries. These
              types of batteries can be charged either interally in the mod
              via a USB cable or using an external battery dock-charger. Vape
              mods also often have adjustable power, meaning you can select
              the heat/power output of the device, customizing the draw to
              your liking. Vape mods can also take different types of tank,
              ranging greatly in variety & features. A vape mod is for the
              serious vaper, who enjoys customizing the look, feel, &
              performance of thier device.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Hero);
