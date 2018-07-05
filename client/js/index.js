import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import '../css/style.css';

import App from './components/App';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#00d49d',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.primary.main,
        main: '#0084b5',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
  });

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
