import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../components/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
export default Layout