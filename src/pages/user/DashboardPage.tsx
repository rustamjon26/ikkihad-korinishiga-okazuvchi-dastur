import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, History as HistoryIcon, User, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const history = JSON.parse(localStorage.getItem(`app_history_${user?.id}`) || '[]');
  const stats = [
    { label: t('dashboard.stats.total'), value: history.length, icon: Calculator, color: 'text-primary' },
    { label: t('dashboard.stats.recent'), value: history.length > 0 ? history[0].createdAt.split('T')[0] : 'None', icon: TrendingUp, color: 'text-success' },
    { label: 'Saved Equations', value: history.length, icon: HistoryIcon, color: 'text-secondary' },
    { label: 'Profile Status', value: user?.role, icon: User, color: 'text-info' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-2">{t('auth.welcome')}, {user?.fullName}!</h2>
          <p className="opacity-90 max-w-xl">
            {t('app.subtitle')}
          </p>
          <Button asChild className="mt-6 bg-white text-blue-600 hover:bg-white/90 font-bold">
            <Link to="/dashboard/converter">
               {t('dashboard.quick.new')}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold mt-1">{s.value}</p>
                  </div>
                  <s.icon className={`h-10 w-10 ${s.color} opacity-80`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('nav.history')}</CardTitle>
              <CardDescription>Oxirgi konvertatsiyalaringiz jurnali</CardDescription>
            </CardHeader>
            <CardContent>
              {history.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Hali hech qanday konvertatsiya amalga oshirilmagan.
                </div>
              ) : (
                <ul className="space-y-4">
                  {history.slice(0, 5).map((h: any) => (
                    <li key={h.id} className="flex items-center justify-between p-3 border rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium">{h.originalEquation}</p>
                        <p className="text-sm text-muted-foreground">{new Date(h.createdAt).toLocaleDateString()}</p>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to="/dashboard/history">Ko'rish</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Misollar bilan ishlash</CardTitle>
              <CardDescription>Tezkor misollarni sinab ko'ring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Analitik geometriyadagi eng keng tarqalgan egri chiziqlar misollari:</p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start" onClick={() => toast.info('Converter page orqali sinab ko\'ring')}>Aylana (Circle)</Button>
                <Button variant="outline" className="justify-start" onClick={() => toast.info('Converter page orqali sinab ko\'ring')}>Ellips (Ellipse)</Button>
                <Button variant="outline" className="justify-start" onClick={() => toast.info('Converter page orqali sinab ko\'ring')}>Parabola (Parabola)</Button>
                <Button variant="outline" className="justify-start" onClick={() => toast.info('Converter page orqali sinab ko\'ring')}>Giperbola (Hyperbola)</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
