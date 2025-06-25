import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Countdown from './components/Countdown';
import Background from './components/Background';
import SocialButtons from './components/SocialButtons';

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
  // const targetDate = '2025-12-25T00:00:00'; // Target date for the countdown

  return (
    <Background>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            my: 4,
            mx: 2,
            minHeight: '100vh',
            minWidth: '100vw',
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              COMING SOON
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 6 }}>
              We are working hard to bring you something amazing!
            </Typography>
            
            {/* TODO: Uncomment the Countdown component when ready to use it */}
            {/* <Countdown targetDate={targetDate} /> */}

            <SocialButtons />            
          </Container>
        </Box>
      </ThemeProvider>
    </Background>
  );
}

export default App;
