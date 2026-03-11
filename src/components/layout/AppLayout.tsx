import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Calculator,
  History,
  User,
  ShieldCheck,
  LogOut,
  Globe,
  Menu,
  X
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { t, setLanguage, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const menuItems = [
    { name: t('nav.dashboard'), path: '/dashboard', icon: LayoutDashboard, role: 'USER' },
    { name: t('nav.converter'), path: '/dashboard/converter', icon: Calculator, role: 'USER' },
    { name: t('nav.history'), path: '/dashboard/history', icon: History, role: 'USER' },
    { name: t('nav.profile'), path: '/dashboard/profile', icon: User, role: 'USER' },
  ];

  const adminItems = [
    { name: t('nav.admin'), path: '/admin', icon: ShieldCheck, role: 'ADMIN' },
    { name: t('admin.users'), path: '/admin/users', icon: User, role: 'ADMIN' },
    { name: t('admin.activity'), path: '/admin/activity', icon: History, role: 'ADMIN' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar py-4 px-3 border-r">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold gradient-text">{t('app.name')}</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              location.pathname === item.path
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-sidebar-accent'
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}

        {user?.role === 'ADMIN' && (
          <div className="mt-8">
            <h3 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Admin
            </h3>
            {adminItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-foreground hover:bg-sidebar-accent'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <div className="mt-auto pt-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-5 w-5" />
          {t('nav.logout')}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col fixed h-screen">
        <SidebarContent />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b h-16 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <h2 className="ml-2 md:ml-0 font-semibold text-lg">
              {menuItems.find(i => i.path === location.pathname)?.name || 
               adminItems.find(i => i.path === location.pathname)?.name || 
               t('nav.dashboard')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('uz')}>O'zbekcha</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ru')}>Русский</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-2 ml-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {user?.fullName?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
