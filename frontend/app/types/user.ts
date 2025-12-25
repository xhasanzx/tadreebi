export type User = {
  id: string;
  fullName?: string;
  username: string;
  password: string;
  role: 'teacher' | 'student';
};
