import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Lora, serif'].join(','),
  },
  palette: {
    text: {
      primary: '#212427',
      secondary: '#616161',
    },
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#FFF',
    },
    background: {
      default: '#fafafa',
    },
  },
});
