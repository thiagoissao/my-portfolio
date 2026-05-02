import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Locale, DEFAULT_LOCALE } from '../../lib/i18n/locales';

interface Props {
  children: React.ReactNode;
  title: string;
  ogProperty?: {
    title: string;
    description: string;
  };
}

const Template = ({ children, title, ogProperty }: Props) => {
  const { asPath, locale } = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
  const activeLocale = (locale as Locale) ?? DEFAULT_LOCALE;
  const ogLocale = activeLocale.replace('-', '_');

  return (
    <>
      <Head>
        <title>{title}</title>
        {ogProperty && (
          <>
            <meta name="description" content={ogProperty.description} />
            <meta property="og:title" content={ogProperty.title} />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content={ogProperty.description}
            />
          </>
        )}
        <meta property="og:locale" content={ogLocale} />
        {baseUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="pt-BR"
              href={`${baseUrl}${asPath}`}
            />
            <link
              rel="alternate"
              hrefLang="en-US"
              href={`${baseUrl}/en-US${asPath}`}
            />
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${baseUrl}${asPath}`}
            />
          </>
        )}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Template;
