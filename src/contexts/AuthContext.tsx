import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'USER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, fullName: string, role?: Role) => void;
  register: (email: string, fullName: string) => void;
  logout: () => void;
  updateProfile: (fullName: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper for activity logging
const logActivity = (type: string, desc: string, user?: User | null) => {
  const logs = JSON.parse(localStorage.getItem('app_activity_logs') || '[]');
  logs.unshift({
    id: crypto.randomUUID(),
    userId: user?.id || 'system',
    userName: user?.fullName || 'Guest',
    actionType: type,
    description: desc,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem('app_activity_logs', JSON.stringify(logs.slice(0, 100)));
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('app_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }
    setLoading(false);
  }, []);

  const login = (email: string, fullName: string, role: Role = 'USER') => {
    const finalRole = email.includes('admin') ? 'ADMIN' : role;
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      fullName,
      role: finalRole,
      isActive: true,
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('app_user', JSON.stringify(newUser));
    logActivity('USER_LOGGED_IN', `User ${fullName} logged in`, newUser);
  };

  const register = (email: string, fullName: string) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      fullName,
      role: 'USER',
      isActive: true,
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('app_user', JSON.stringify(newUser));
    
    const users = JSON.parse(localStorage.getItem('app_users_list') || '[]');
    users.push(newUser);
    localStorage.setItem('app_users_list', JSON.stringify(users));

    logActivity('USER_REGISTERED', `New user ${fullName} registered`, newUser);
  };

  const logout = () => {
    if (user) logActivity('USER_LOGGED_OUT', `User ${user.fullName} logged out`, user);
    setUser(null);
    localStorage.removeItem('app_user');
  };

  const updateProfile = (fullName: string, email: string) => {
    if (!user) return;
    const updatedUser = { ...user, fullName, email };
    setUser(updatedUser);
    localStorage.setItem('app_user', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('app_users_list') || '[]');
    const index = users.findIndex((u: User) => u.id === user.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('app_users_list', JSON.stringify(users));
    }

    logActivity('PROFILE_UPDATED', `User ${fullName} updated profile`, updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
