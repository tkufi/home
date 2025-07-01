import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { Icon } from '@iconify/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Countdown from './components/Countdown';
import Background from './components/Background';
import SocialButtons from './components/SocialButtons';
import ImageMasonry from './components/ImageMasonry'; // Import the ImageMasonry component

const theme = createTheme({
  palette: {
    primary: {
      main: '#64B5F6',
    },
    secondary: {
      main: '#81D4FA',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#BBBBBB',
    },
    background: {
      default: 'transparent', // Make the main app body transparent so the Background component is visible
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  const targetDate = '2025-12-25T00:00:00'; // Target date for the countdown

  return (
    <ThemeProvider theme={theme}>
      <Background />

      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          height: '100vh',
          width: '100%',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            TKURBX COMING SOON
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 6 }}>
            We are working hard to bring you something amazing!
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Turku, Finland is an upcoming Roblox roleplay game based on the real-world city of Turku.
            It is being developed under the project name tkurbx. The game creates a semi-realistic world inspired by Finnish life and public services.
          </Typography>

          {/* TODO: Uncomment the Countdown component when ready to use it */}
          <Countdown targetDate={targetDate} />

          <SocialButtons />
        </Container>

        <Box
          sx={{
            mt: 4,
            animation: 'bounce 1.2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(8px)' },
            },
          }}
        >
          <Icon icon="line-md:chevron-double-down" width="24" height="24" />
        </Box>



      </Box>

      <Box
        sx={{
          width: '100%',
          background: '#0a1929',
          color: 'text.secondary',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 1,
          py: 1,
        }}
      >

        <ImageMasonry />
      </Box>

    </ThemeProvider>


  );
}

export default App;
