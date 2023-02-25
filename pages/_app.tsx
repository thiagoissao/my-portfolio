import { ThemeProvider } from '@mui/material';
import 'highlight.js/styles/base16/edge-dark.css';
import '../styles/blog-images.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
