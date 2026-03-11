import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, UserCog, UserMinus, UserCheck, Trash2, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const UsersPage: React.FC = () => {
  const { user: currentUser } = useAuth();
  const { t } = useLanguage();
  const [users, setUsers] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const list = JSON.parse(localStorage.getItem('app_users_list') || '[]');
    setUsers(list);
  }, []);

  const handleDeactivate = (id: string, currentStatus: boolean) => {
    const updated = users.map(u => u.id === id ? { ...u, isActive: !currentStatus } : u);
    setUsers(updated);
    localStorage.setItem('app_users_list', JSON.stringify(updated));
    toast.success(currentStatus ? 'User deactivated' : 'User activated');
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete user?')) {
      const updated = users.filter(u => u.id !== id);
      setUsers(updated);
      localStorage.setItem('app_users_list', JSON.stringify(updated));
      toast.success('User deleted');
    }
  };

  const filteredUsers = users.filter(u => 
    u.fullName.toLowerCase().includes(search.toLowerCase()) || 
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Foydalanuvchini qidirish..."
              className="pl-10"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Button onClick={() => toast.info('Yangi foydalanuvchi qo\'shish oynasi')}>Yangi foydalanuvchi qo'shish</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('admin.users')}</CardTitle>
            <CardDescription>Barcha ro'yxatdan o'tgan foydalanuvchilar boshqaruvi</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Foydalanuvchi</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Holat</TableHead>
                  <TableHead>Ro'yxatdan o'tgan</TableHead>
                  <TableHead className="text-right">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((u: any) => (
                  <TableRow key={u.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {u.fullName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{u.fullName}</p>
                          <p className="text-xs text-muted-foreground">{u.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={u.role === 'ADMIN' ? 'default' : 'secondary'}>
                        {u.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={u.isActive ? 'outline' : 'destructive'} className={u.isActive ? "border-success text-success" : ""}>
                        {u.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(u.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" title="Email" onClick={() => toast.info('Email yuborish')}><Mail className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" title="Edit Role" onClick={() => toast.info('Rolni o\'zgartirish')}><UserCog className="h-4 w-4" /></Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          title={u.isActive ? "Deactivate" : "Activate"}
                          onClick={() => handleDeactivate(u.id, u.isActive)}
                        >
                          {u.isActive ? <UserMinus className="h-4 w-4 text-warning" /> : <UserCheck className="h-4 w-4 text-success" />}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-destructive"
                          onClick={() => handleDelete(u.id)}
                          disabled={u.id === currentUser?.id}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default UsersPage;
