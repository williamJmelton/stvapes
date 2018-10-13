import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

import slant from '../css-modules/slant.css';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: 375,
    minHeight: 400,
    // marginTop: 20,
    margin: '10px 20px',
    backgroundColor: 'white',
    color: 'black',
  },
  cardContent: {
    padding: '12px 0px',
    color: 'black',
  },
  section: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  heading: {
    color: '#ff1026',
    textAlign: 'center',
    fontWeight: 'bold',
    justifySelf: 'center',
    width: '100%',
  },
  vapeIcon: {
    height: 200,
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
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: '0 auto',
  },
  paperHeader: {
    color: 'black',
    fontWeight: 'bold',
  },
  spacer: {
    height: '60px',
  },
});

const Batteries = (props) => {
  const { classes } = props;
  return (
    <div className={slant.slantRed}>
      <Typography className={classes.headerContainer} variant="display4">
        Vape Saftey:
      </Typography>
      <Grid className={classes.section} container spacing={8} justify="center">
        <Grid item>
          <Paper className={classes.paper} elevation={2}>
            <Typography className={classes.paperHeader} variant="display1">Nicotene Saftey</Typography>
            <Divider />
            <Typography className={classes.cardContent} variant="body1">
              Electronic cigarettes may contain nicotine. Nicotine is know to be addictive, and in
              concentration, a dangerous poison. Misuse can result in serious health risks or even
              death. Nicotine products should not be used by people under the age of 18, or people
              with severe kidney disease, heart desease and related heart conditions, overactive
              thyroid gland, diabetes, phaeochromocytoma, inflammation of the esophagus,
              inflammation of the lining of the stomach, stomach ulcer, duodenal ulcer, skin
              problmes, long term throat problems, difficulty breathing because of bronchitis,
              emphysema or asthma, or if pregnant or breast feeding. Do not ingest or allow
              nicotine to soak into skin. Keep out of reach of children and pets, Use only as
              directed. The buyer of this product accepts all risks and liabilities associated
              with nicotine handling and consumption. This product has not been evaluated by the
              FDA - use at your own risk.
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={2}>
            <Typography className={classes.paperHeader} variant="display1">Battery Saftey</Typography>
            <Divider />
            <Typography className={classes.cardContent} variant="body1">
              Electronic cigarettes contain Li-ion battery cells which can explode or burst into
              flame if used improperly. Do not disassemble, punture, cut, crush, short circuit,
              incinerate, recharge the disposable cells, or expose to water, fire or high
              temperatures. Rechargeable batteries should be charged in a fire-proof container and
              checked after charging and before use. Never charge batteries unattended. Only use
              appropriate chargers, do not mix chargers. If unsure of what charger to use, please
              contact Shadetree Vapes via email or phone listed on the contact us page. By
              purchasing these products, the buyer assumes all risks and liabilities associated
              with lithium batteries. It is your responsibility (the customer) to understand the
              dangers, as well as the proper procedures for handling and disposing of li-ion based
              battery cells.
            </Typography>
          </Paper>
          <div className={classes.spacer} />
        </Grid>
      </Grid>
    </div>
  );
};

Batteries.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Batteries);
