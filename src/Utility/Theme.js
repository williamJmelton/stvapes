import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
    error: purple,
    type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;