// app/layout.tsx
'use client'

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import './globals.css'
import { ReactNode } from 'react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4ECCA3',
    },
    background: {
      default: '#1E1E2C',
      paper: '#2E2E3E',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
