import { Container, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import useWidth from '../../hooks/useWidth';

interface Props {
  children: React.ReactNode;
  title: string;
  window?: () => Window;
  ogProperty?: {
    title: string;
    description: string;
  };
}

const navItems = [
  {
    label: 'Home',
    pathname: '/',
  },
  {
    label: 'Blog',
    pathname: '/blog',
  },
];

const Template = ({ children, title, ogProperty }: Props) => {
  const width = useWidth();
  const route = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={ogProperty.title} />
        <meta property="og:type" content="website" />
        <meta property="description" content={ogProperty.description} />
      </Head>
      <AppBar variant="outlined" elevation={0} color="inherit" component="nav">
        <Toolbar>
          <Stack
            spacing={2}
            width="100%"
            direction="row"
            justifyContent="center"
          >
            {navItems.map(item => {
              const isActive = item.pathname === route.pathname;
              const style = { textDecoration: isActive ? 'underline' : 'none' };
              return (
                <Link style={style} key={item.label} href={item.pathname}>
                  <Typography variant="h6" color="text.primary">
                    {item.label}
                  </Typography>
                </Link>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: width === 'xs' ? 1 : 3 }}>
        <Toolbar />
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
};

export default Template;
