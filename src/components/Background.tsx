import React, { useState, useEffect, useRef } from 'react';
import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Define a dark bluish theme for the background component
const darkBluishTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A1929', // Default background color
      paper: '#102A43',
    },
    primary: {
      main: '#64B5F6',
      dark: '#1565C0', // Darker blue for the animated gradient
      light: '#90CAF9', // Lighter blue for the moving highlight
    },
    secondary: {
      main: '#81D4FA',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  // State to hold the current target position for the highlight
  const [highlightPosition, setHighlightPosition] = useState({ x: 0, y: 0 });
  // Ref to store the latest window dimensions
  const dimensionsRef = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // Function to generate a new random position
    const setRandomPosition = () => {
      const { width, height } = dimensionsRef.current;
      // Generate random x and y within the current window dimensions
      const newX = Math.random() * width;
      const newY = Math.random() * height;
      setHighlightPosition({ x: newX, y: newY });
    };

    // Update dimensions on window resize
    const handleResize = () => {
      dimensionsRef.current = { width: window.innerWidth, height: window.innerHeight };
      setRandomPosition(); // Immediately move to a new random spot on resize
    };

    window.addEventListener('resize', handleResize);

    // Set initial random position
    setRandomPosition();

    // Set an interval to move the highlight to a new random position every few seconds
    const intervalId = setInterval(setRandomPosition, 8000); // Move every 8 seconds

    // Clean up the event listener and interval when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <ThemeProvider theme={darkBluishTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          position: 'fixed', // Keep the background fixed
          top: 0,
          left: 0,
          zIndex: 0, // Ensure it's behind all other content
          overflow: 'hidden', // Hide any overflow from the gradients
          cursor: 'default', // Default cursor over the background

          backgroundColor: darkBluishTheme.palette.background.default, // Set the base background color

          // Animated radial gradient (large, subtle)
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '150%', // Large size for the gradient
            height: '150%',
            background: `radial-gradient(circle at center, ${darkBluishTheme.palette.primary.dark} 0%, transparent 50%)`,
            opacity: 0.1, // Very subtle opacity
            transform: 'translate(-50%, -50%) scale(0.8)', // Initial transform for animation
            animation: 'gradient-animation 15s infinite alternate ease-in-out', // Apply animation
            pointerEvents: 'none', // Critical: ensures this pseudo-element doesn't block mouse events
          },

          // Randomly moving highlight (smaller, dynamic)
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '300px', // Size of the highlight
            height: '300px',
            background: `radial-gradient(circle at center, ${darkBluishTheme.palette.primary.light} 0%, transparent 60%)`,
            opacity: 0.08, // Very subtle highlight
            borderRadius: '50%', // Make it circular
            pointerEvents: 'none', // Critical: ensures highlight doesn't block events on elements above it
            
            // Use the internally managed highlightPosition to translate the highlight
            // The -50% offsets are to center the highlight
            transform: `translate(calc(${highlightPosition.x}px - 50%), calc(${highlightPosition.y}px - 50%))`,
            transition: 'transform 7s ease-in-out, opacity 0.5s ease-out', // Slower transition for smooth movement
            willChange: 'transform, opacity', // Optimize for animation performance
          },

          // Keyframes for the background gradient animation
          '@keyframes gradient-animation': {
            '0%': {
              transform: 'translate(-50%, -50%) scale(0.8) rotate(0deg)',
              opacity: 0.08,
            },
            '50%': {
              transform: 'translate(-40%, -60%) scale(1.0) rotate(15deg)',
              opacity: 0.12,
            },
            '100%': {
              transform: 'translate(-50%, -50%) scale(0.8) rotate(0deg)',
              opacity: 0.08,
            },
          },
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Background;
