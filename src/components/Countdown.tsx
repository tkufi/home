import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

interface CountdownProps {
  targetDate: string; // ISO 8601 string, e.g., "2025-12-31T23:59:59"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];
    if (!value && timerComponents.length === 0 && interval !== 'seconds') {
      // Don't show leading zeros if the higher units are 0
      return;
    }

    timerComponents.push(
      <Box key={interval} sx={{ textAlign: 'center', mx: 1 }}>
        <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
          {value.toString().padStart(2, '0')}
        </Typography>
        <Typography variant="caption" display="block">
          {interval.toUpperCase()}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4,
      }}
    >
      {timerComponents.length ? (
        timerComponents
      ) : (
        <Typography variant="h4" color="primary">
          The time has come!
        </Typography>
      )}
    </Box>
  );
};

export default Countdown;