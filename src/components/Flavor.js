import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '70%',
    margin: '0 auto',
    backgroundColor: '#303030'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  lightText: {
    color: 'silver',
    display: 'inline',
    opacity: 0.3
  },
  bold: {
    fontWeight: 'bold',
    display: 'inline'
  }
});

class Flavor extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const { brand } = this.props;
    const { flavors } = this.props;
    // console.log('brand: ', brand);
    // console.log('Flavors: ', flavors);

    // const flavorTags = (
    //   <div>
    //     {
    //       Object.entries(flavors).map(flavor => {
    //       return (
    //         <div>
    //           <Typography className={classes.bold} variant="headline">
    //             {flavor[1].name}
    //           </Typography>
    //           <Typography variant="body1">{flavor[1].profile}</Typography>
    //           <Typography className={classes.lightText} variant="caption">
    //             {flavor[1].ratio}
    //           </Typography>
    //         </div>
    //       );
    //     }
    //   }
    //   </div>
    // );

    const flavorTags = (
      <div>
        {Object.entries(flavors).map(flavor => (
          <div>
            <Typography className={classes.bold} variant="headline">
              {flavor[1].name}
            </Typography>
            <Typography variant="body1">{flavor[1].profile}</Typography>
            <Typography className={classes.lightText} variant="caption">
              {flavor[1].ratio}
            </Typography>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        <ExpansionPanel
          className={classes.root}
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="display4" className={classes.heading}>
              {brand}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{flavorTags}</ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Flavor.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  brand: PropTypes.string.isRequired,
  flavors: PropTypes.objectOf(PropTypes.object).isRequired
};
export default withStyles(styles)(Flavor);
