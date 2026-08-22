import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import 'highlight.js/styles/nord.css';
import '../styles/globals.css';
import { Locale, DEFAULT_LOCALE } from '../lib/i18n/locales';
import { getMessages } from '../lib/i18n';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const activeLocale = (locale as Locale) ?? DEFAULT_LOCALE;

  return (
    <IntlProvider
      locale={activeLocale}
      defaultLocale={DEFAULT_LOCALE}
      messages={getMessages(activeLocale)}
    >
      <style jsx global>{`
        :root {
          --font-hanken-grotesk: ${hankenGrotesk.style.fontFamily};
          --font-ibm-plex-mono: ${ibmPlexMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </IntlProvider>
  );
}

export default MyApp;
