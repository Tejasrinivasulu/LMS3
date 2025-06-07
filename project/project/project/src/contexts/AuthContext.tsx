import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, role: 'student' | 'teacher') => Promise<void>;
  isLoading: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'student@projectbloom.com',
    name: 'Alex Johnson',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150',
    bio: 'Computer Science student passionate about web development',
    badges: [
      { id: '1', name: 'First Course', description: 'Completed your first course', icon: '🎓', color: 'bg-blue-500', earnedAt: new Date() },
      { id: '2', name: 'Quick Learner', description: 'Completed 3 lessons in a day', icon: '⚡', color: 'bg-yellow-500', earnedAt: new Date() }
    ],
    xp: 1250,
    level: 5,
    streak: 7,
    joinedAt: new Date('2024-01-15'),
    lastActive: new Date()
  },
  {
    id: '2',
    email: 'teacher@projectbloom.com',
    name: 'Dr. Sarah Wilson',
    role: 'teacher',
    avatar: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?w=150',
    bio: 'Senior Software Engineer with 10+ years experience teaching programming',
    badges: [
      { id: '3', name: 'Master Educator', description: 'Taught 1000+ students', icon: '👨‍🏫', color: 'bg-purple-500', earnedAt: new Date() }
    ],
    xp: 5000,
    level: 15,
    streak: 30,
    joinedAt: new Date('2023-06-01'),
    lastActive: new Date()
  },
  {
    id: '3',
    email: 'admin@projectbloom.com',
    name: 'Michael Chen',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=150',
    bio: 'Platform Administrator ensuring smooth operations',
    badges: [
      { id: '4', name: 'System Guardian', description: 'Platform administrator', icon: '🛡️', color: 'bg-red-500', earnedAt: new Date() }
    ],
    xp: 10000,
    level: 25,
    streak: 100,
    joinedAt: new Date('2023-01-01'),
    lastActive: new Date()
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved user and theme
    const savedUser = localStorage.getItem('projectbloom_user');
    const savedTheme = localStorage.getItem('projectbloom_theme') as 'light' | 'dark';
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('projectbloom_user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('projectbloom_user');
  };

  const signup = async (email: string, password: string, name: string, role: 'student' | 'teacher') => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      badges: [],
      xp: 0,
      level: 1,
      streak: 0,
      joinedAt: new Date(),
      lastActive: new Date()
    };
    
    setUser(newUser);
    localStorage.setItem('projectbloom_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('projectbloom_theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isLoading, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};