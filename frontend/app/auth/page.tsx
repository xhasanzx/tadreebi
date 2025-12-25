'use client';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ToggleButtons from '../components/common/toggle-buttons/toggle-buttons';
import styles from './auth.module.scss';
import { User } from '../types/user';
import { v4 as uuidv4 } from 'uuid';

export default function AuthPage() {
  const [cardDescription, setCardDescription] = useState('Sign in to your account');
  const [user, setUser] = useState<User>({
    id: '',
    username: '',
    role: 'student',
    password: '',
    fullName: '',
  });
  const [formType, setFormType] = useState<'login' | 'signup'>('login');
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const handleFormChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      setFormType(newValue as 'login' | 'signup');
      setCardDescription(newValue === 'login' ? 'Sign in to your account' : 'Create a new account');
    }
  };

  const handleRoleChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      setRole(newValue as 'student' | 'teacher');
    }
  };
  const handleSubmit = () => {
    const userWithId = { ...user, id: uuidv4() };
    console.log('Form submitted', user);
    setUser(userWithId);
  };
  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <Typography variant="h4">Tadreebi</Typography>
        <Typography variant="h6">{cardDescription}</Typography>
        <ToggleButtons
          selectedValue={formType}
          toggleValues={['login', 'signup']}
          toggleLabels={['Login', 'Signup']}
          handleChange={handleFormChange}
        />
        <Typography>I am a...</Typography>
        <ToggleButtons
          selectedValue={user?.role}
          toggleValues={['student', 'teacher']}
          toggleLabels={['Student', 'Teacher']}
          handleChange={handleRoleChange}
        />
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {formType === 'signup' && (
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              value={user?.fullName || ''}
              onChange={(e) => setUser((prev) => ({ ...prev, fullName: e.target.value }))}
            />
          )}
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={user?.username}
            onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={user?.password}
            onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
          />
        </div>
        <Button
          variant="contained"
          sx={{ marginTop: '20px' }}
          onClick={() => {
            handleSubmit();
          }}
        >
          {formType === 'login' ? 'Sign in' : 'Create Account'}
        </Button>
      </div>
    </div>
  );
}
