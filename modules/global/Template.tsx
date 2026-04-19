import Head from 'next/head';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  ogProperty?: {
    title: string;
    description: string;
  };
}

const Template = ({ children, title, ogProperty }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {ogProperty && (
          <>
            <meta property="og:title" content={ogProperty.title} />
            <meta property="og:type" content="website" />
            <meta property="description" content={ogProperty.description} />
          </>
        )}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Template;
