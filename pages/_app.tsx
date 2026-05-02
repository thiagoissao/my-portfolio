import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import 'highlight.js/styles/nord.css';
import '../styles/globals.css';
import { Locale, DEFAULT_LOCALE } from '../lib/i18n/locales';
import { getMessages } from '../lib/i18n';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const activeLocale = (locale as Locale) ?? DEFAULT_LOCALE;

  return (
    <IntlProvider
      locale={activeLocale}
      defaultLocale={DEFAULT_LOCALE}
      messages={getMessages(activeLocale)}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
