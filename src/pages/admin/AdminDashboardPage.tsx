import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Activity, Calculator, TrendingUp, UserPlus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const AdminDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const usersList = JSON.parse(localStorage.getItem('app_users_list') || '[]');
  const activityLogs = JSON.parse(localStorage.getItem('app_activity_logs') || '[]');
  const allHistory = usersList.reduce((acc: any[], u: any) => {
    const history = JSON.parse(localStorage.getItem(`app_history_${u.id}`) || '[]');
    return [...acc, ...history];
  }, []);

  const stats = [
    { label: 'Jami foydalanuvchilar', value: usersList.length, icon: Users, color: 'text-primary' },
    { label: 'Jami konvertatsiyalar', value: allHistory.length, icon: Calculator, color: 'text-success' },
    { label: 'Bugungi faollik', value: activityLogs.filter((l: any) => l.createdAt.startsWith(new Date().toISOString().split('T')[0])).length, icon: Activity, color: 'text-secondary' },
    { label: 'Yangi ro\'yxatdan o\'tganlar', value: usersList.filter((u: any) => u.createdAt.startsWith(new Date().toISOString().split('T')[0])).length, icon: UserPlus, color: 'text-info' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold">{t('admin.stats')}</h2>
            <p className="text-muted-foreground">Platforma holati va monitoringi</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => toast.info('Hisobot tayyorlanmoqda...')}>Hisobot yuklash</Button>
            <Button onClick={() => toast.info('Bu xususiyat tez orada qo\'shiladi')}>Yangi Admin qo'shish</Button>
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{t('admin.activity')}</CardTitle>
                  <CardDescription>Oxirgi platforma faolliklari</CardDescription>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/admin/activity">Barchasini ko'rish</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activityLogs.slice(0, 8).map((log: any) => (
                  <div key={log.id} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-bold text-primary">{log.userName}</span> {log.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="px-1.5 py-0.5 rounded-full bg-muted font-semibold text-[10px] uppercase">{log.actionType}</span>
                        <span>{new Date(log.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eng faol foydalanuvchilar</CardTitle>
              <CardDescription>Konvertatsiyalar soni bo'yicha</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usersList.slice(0, 5).map((u: any, i: number) => {
                  const count = JSON.parse(localStorage.getItem(`app_history_${u.id}`) || '[]').length;
                  return (
                    <div key={u.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
                          {u.fullName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{u.fullName}</p>
                          <p className="text-xs text-muted-foreground">{u.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{count}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">Conversions</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default AdminDashboardPage;
