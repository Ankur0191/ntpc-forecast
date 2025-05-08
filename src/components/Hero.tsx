'use client'

import { Container, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        AI-Powered Renewable Energy Forecasting
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Predict solar and wind energy generation for NTPC plants using real-time weather data and machine learning.
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          href="/dashboard"
        >
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  )
}
