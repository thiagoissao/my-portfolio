import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { Archivo, Archivo_Narrow, Raleway } from 'next/font/google';
import 'highlight.js/styles/nord.css';
import '../styles/globals.css';
import { Locale, DEFAULT_LOCALE } from '../lib/i18n/locales';
import { getMessages } from '../lib/i18n';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
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
          --font-raleway: ${raleway.style.fontFamily};
          --font-archivo-narrow: ${archivoNarrow.style.fontFamily};
          --font-archivo: ${archivo.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
