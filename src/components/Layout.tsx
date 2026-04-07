import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Compass, PlusCircle, User, ArrowLeft, Bell } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useUser } from '@/src/context/UserContext';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  hideNav?: boolean;
}

export default function Layout({ children, title, showBack, hideNav }: LayoutProps) {
  const location = useLocation();
  const { profile } = useUser();

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-background shadow-2xl relative">
      {/* Top App Bar */}
      {!hideNav && (
        <header className="fixed top-0 w-full max-w-md z-50 flex items-center justify-between px-6 h-16 glass">
          <div className="flex items-center gap-4">
            {showBack ? (
              <button onClick={() => window.history.back()} className="text-on-background hover:opacity-70 transition-opacity">
                <ArrowLeft size={24} />
              </button>
            ) : null}
            <h1 className="text-lg font-bold text-on-background tracking-tight">
              {title || "探索"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <NavLink to="/notifications" className="relative text-on-background hover:opacity-70 transition-opacity flex items-center justify-center">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-error rounded-full border-2 border-background"></span>
            </NavLink>
            {location.pathname === '/explore' && (
              <NavLink to="/profile" className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30 active:scale-95 transition-transform block">
                <img 
                  src={profile.avatar} 
                  alt="User" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </NavLink>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={cn("flex-grow", !hideNav && "pt-16 pb-24")}>
        {children}
      </main>

      {/* Bottom Navigation */}
      {!hideNav && (
        <nav className="fixed bottom-0 w-full max-w-md z-50 flex justify-around items-center px-4 py-3 pb-safe glass shadow-[0px_-12px_32px_rgba(24,28,27,0.06)]">
          <NavLink 
            to="/explore" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-1.5 rounded-2xl transition-all duration-200",
              isActive ? "text-primary font-bold bg-secondary-container/30" : "text-outline hover:text-primary"
            )}
          >
            <Compass size={22} fill={location.pathname === '/explore' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">探索</span>
          </NavLink>

          <NavLink 
            to="/create" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-1.5 rounded-2xl transition-all duration-200",
              isActive ? "text-primary font-bold bg-secondary-container/30" : "text-outline hover:text-primary"
            )}
          >
            <PlusCircle size={22} fill={location.pathname === '/create' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">创建</span>
          </NavLink>

          <NavLink 
            to="/profile" 
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center px-5 py-1.5 rounded-2xl transition-all duration-200",
              isActive ? "text-primary font-bold bg-secondary-container/30" : "text-outline hover:text-primary"
            )}
          >
            <User size={22} fill={location.pathname === '/profile' ? "currentColor" : "none"} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">个人</span>
          </NavLink>
        </nav>
      )}
    </div>
  );
}
