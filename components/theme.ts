import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand, Roboto',
  },
  palette: {
    primary: {
      main: '#32384d',
    },
    secondary: {
      main: '#FFF',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        overflowY: 'auto',
        '*::-webkit-scrollbar': {
          width: '0.5em',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#32384d',
          borderRadius: 4,
          '&:hover': {
            backgroundColor: '#32384d',
          },
        },
        '*::-webkit-scrollbar:horizontal': {
          height: 5,
        },
      },
    },
  },
});
