import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Lora, serif'].join(','),
  },
  palette: {
    primary: {
      main: '#32384d',
    },
    secondary: {
      main: '#FFF',
    },
    background: {
      default: '#fafafa',
    },
  },
});
