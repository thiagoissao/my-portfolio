import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container, Stack, SxProps, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import useWidth from '../../hooks/useWidth';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  window?: () => Window;
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

const Template = ({ children }: Props) => {
  const width = useWidth();
  const route = useRouter();

  return (
    <>
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
                <Link key={item.label} href={item.pathname}>
                  <a style={style}>
                    <Typography variant="h6" color="text.primary">
                      {item.label}
                    </Typography>
                  </a>
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
