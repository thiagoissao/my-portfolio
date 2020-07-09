import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../components/theme'
import CssBaseline from '@material-ui/core/CssBaseline'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
export default Layout