'use client'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material'
import Link from 'next/link'

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          NTPC Forecast
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} href="#features">
            Features
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
