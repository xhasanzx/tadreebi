'use client';
import { Button, Typography } from '@mui/material';
import styles from './landingpage.module.scss';
import LandingCards from './landing-cards/landing-cards';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Typography
        variant="h3"
        component="div"
        sx={{ fontWeight: 600, textAlign: 'center', mt: 0, mb: 0 }}
      >
        Modern Quiz Management
        <br />
        <span style={{ color: 'rgba(36, 39, 223, 0.97)' }}> Made Simple</span>
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 2, textAlign: 'center', maxWidth: 600, color: 'gray' }}
      >
        Empower educators and students with an intuitive platform for creating, managing, and taking
        quizzes.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: 'rgba(36, 39, 223, 0.82)' }}
        sx={{ marginTop: 3, paddingX: 4, paddingY: 1.5, fontSize: 16, borderRadius: 4 }}
        onClick={() => {
          router.push('/auth');
        }}
      >
        Get Started
      </Button>
      <LandingCards />
    </div>
  );
}
