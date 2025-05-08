'use client'

import { Container, Typography, Paper, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Bolt, LocationOn, Timeline } from '@mui/icons-material'

const features = [
  {
    icon: <Bolt fontSize="large" />,
    title: 'AI-Powered Forecasting',
    description: 'Predict solar and wind output using machine learning and real-time data.',
  },
  {
    icon: <LocationOn fontSize="large" />,
    title: '7 NTPC Locations',
    description: 'Trained using historical data from 7 major NTPC plant sites across India.',
  },
  {
    icon: <Timeline fontSize="large" />,
    title: 'Realtime Results',
    description: 'Instant insights with a user-friendly dashboard connected to our API.',
  },
]

export default function Features() {
  return (
    <Box id="features" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Why This Matters
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Empowering NTPC with clean energy predictions, powered by data science.
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item={true} xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: '#2E2E3E',
                  height: '100%',
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
