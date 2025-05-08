'use client'

import { Box, Container, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 6, mt: 10 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} NTPC Forecast | Built with ❤️ using Next.js & Material UI
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <Link href="https://github.com/ankur0191" color="inherit" underline="hover" target="_blank">
            GitHub
          </Link>{' '}
          |{' '}
          <Link href="mailto:ankurmishra11187@gmail.com" color="inherit" underline="hover">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}
