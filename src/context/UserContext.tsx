import { createContext, useContext, useState, ReactNode } from 'react';

interface UserProfile {
  nickname: string;
  bio: string;
  avatar: string;
}

interface UserContextType {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>({
    nickname: '林静怡',
    bio: '探索者 · 瑜伽爱好者',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtj3K5fSgCoi4834uvUFGiw5BDatn4G7tTd0PjBh6_FPY4IkDEtv8fy4hQ408iYzTr1ulaAYSKtBMHCS0_VTWMq0wXu2L2PezJVfZrStlLeEkHccDMqo1tNo9Q6MFuYEwTzo0ZdFooJntIZvLa5SNgnASkOMpVvI2rDkFTLa7rkj5IM8h9lSx4k0OLt4X2Wgk4vSnPE0PVXmhC6b47ffjeZfBfN8_KJfZkIvUFQC3KxupDAkROe8HmI1v7iqNFlzuuluf8JodpEgRL',
  });

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
