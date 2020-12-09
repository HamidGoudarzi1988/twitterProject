import { createMuiTheme } from '@material-ui/core';
import tinyColor from 'tinycolor2';
const colorPrimary = '#5ea9dd';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
      light: tinyColor().lighten().toHexString(),
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: '"Oswald", sans-serif !important',
      },

    },
    MuiListItem: {
      button: {
        fontFamily: '"Oswald", sans-serif !important',
      },

    },
    MuiButton: {
      label: {
        fontFamily: '"Oswald", sans-serif !important',
      },

    },
  },
});

export default Theme;
