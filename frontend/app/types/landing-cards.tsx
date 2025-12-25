import { ReactNode } from 'react';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export interface LandingCard {
  icon?: ReactNode;
  title: string;
  description: string;
}

export const LANDING_CARD_CONTENT: LandingCard[] = [
  {
    icon: <ImportContactsTwoToneIcon fontSize="large" color="primary" />,
    title: 'Smart Quizzes',
    description:
      'Create engaging quizzes with randomized options and multiple versions for fair assessment.',
  },
  {
    icon: <AssessmentOutlinedIcon fontSize="large" color="primary" />,
    title: 'Real-time Analytics',
    description:
      'Track student progress with detailed reports, leaderboards, and performance insights.',
  },
  {
    icon: <PeopleAltOutlinedIcon fontSize="large" color="primary" />,
    title: 'Virtual Classes',
    description:
      'Organize students into groups, manage class schedules, and foster collaborative learning.',
  },
];
