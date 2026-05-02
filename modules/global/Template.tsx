import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { DEFAULT_LOCALE, Locale } from '../../lib/i18n/locales';

const DEFAULT_OG_IMAGE = '/me.webp';

type OgType = 'website' | 'article';

interface Props {
  children: React.ReactNode;
  title: string;
  ogProperty?: {
    title: string;
    description: string;
    image?: string | null;
    type?: OgType;
  };
}

const toAbsoluteUrl = (value: string, baseUrl: string) => {
  if (/^https?:\/\//i.test(value)) return value;
  if (!baseUrl) return value;
  return `${baseUrl}${value.startsWith('/') ? '' : '/'}${value}`;
};

const Template = ({ children, title, ogProperty }: Props) => {
  const { asPath, locale } = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
  const activeLocale = (locale as Locale) ?? DEFAULT_LOCALE;
  const ogLocale = activeLocale.replace('-', '_');

  const canonicalUrl = baseUrl ? `${baseUrl}${asPath}` : undefined;
  const ogType: OgType = ogProperty?.type ?? 'website';
  const rawImage = ogProperty?.image || DEFAULT_OG_IMAGE;
  const ogImage = toAbsoluteUrl(rawImage, baseUrl);

  return (
    <>
      <Head>
        <title>{title}</title>
        {ogProperty && (
          <>
            <meta name="description" content={ogProperty.description} />
            <meta property="og:title" content={ogProperty.title} />
            <meta property="og:type" content={ogType} />
            <meta property="og:description" content={ogProperty.description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:alt" content={ogProperty.title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogProperty.title} />
            <meta name="twitter:description" content={ogProperty.description} />
            <meta name="twitter:image" content={ogImage} />
          </>
        )}
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:site_name" content="Thiago Yasunaka" />
        {canonicalUrl && (
          <>
            <meta property="og:url" content={canonicalUrl} />
            <link rel="canonical" href={canonicalUrl} />
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
