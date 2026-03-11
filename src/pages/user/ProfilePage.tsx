import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { User, Lock, Settings, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const { t } = useLanguage();
  const [fullName, setFullName] = React.useState(user?.fullName || '');
  const [email, setEmail] = React.useState(user?.email || '');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(fullName, email);
    toast.success('Profil yangilandi!');
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-6 p-6 bg-card border rounded-xl shadow-sm">
          <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
            {user?.fullName?.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.fullName}</h2>
            <p className="text-muted-foreground">{user?.email}</p>
            <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {user?.role} Account
            </div>
          </div>
        </div>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="info" className="flex items-center gap-2">
              <User className="h-4 w-4" /> {t('nav.profile')}
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center gap-2">
              <Lock className="h-4 w-4" /> Parol
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" /> Sozlamalar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Shaxsiy ma'lumotlar</CardTitle>
                <CardDescription>Ismingiz va email manzilingizni yangilang</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t('auth.fullName')}</Label>
                    <Input id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('auth.email')}</Label>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                  <Button type="submit">{t('common.save')}</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Parolni o'zgartirish</CardTitle>
                <CardDescription>Xavfsizligingiz uchun kuchli paroldan foydalaning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Joriy parol</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Yangi parol</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Yangi parolni tasdiqlang</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button onClick={() => toast.info('Parol yangilandi (Demo)')}>Parolni yangilash</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Xavfli hudud</CardTitle>
                <CardDescription>Hisobingizni butunlay o'chirish</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" className="flex items-center gap-2" onClick={() => toast.error('Bu amalni bajarish uchun ruxsat yo\'q')}>
                  <Trash2 className="h-4 w-4" /> Akkauntni o'chirish
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
