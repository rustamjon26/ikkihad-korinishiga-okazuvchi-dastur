import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, History, Filter, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const ActivityPage: React.FC = () => {
  const { t } = useLanguage();
  const [logs, setLogs] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const activityLogs = JSON.parse(localStorage.getItem('app_activity_logs') || '[]');
    setLogs(activityLogs);
  }, []);

  const filteredLogs = logs.filter(l => 
    l.userName.toLowerCase().includes(search.toLowerCase()) || 
    l.description.toLowerCase().includes(search.toLowerCase()) ||
    l.actionType.toLowerCase().includes(search.toLowerCase())
  );

  const getActionColor = (type: string) => {
    switch (type) {
      case 'USER_REGISTERED': return 'bg-success/10 text-success';
      case 'USER_LOGGED_IN': return 'bg-info/10 text-info';
      case 'CONVERSION_SAVED': return 'bg-primary/10 text-primary';
      case 'PROFILE_UPDATED': return 'bg-secondary/10 text-secondary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Faollikni qidirish..."
              className="pl-10"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => toast.info('Filtrlash oynasi')}>
               <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" onClick={() => toast.info('Ma\'lumotlar eksport qilinmoqda...')}>
               <Download className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('admin.activity')}</CardTitle>
            <CardDescription>Platformada sodir bo'lgan barcha muhim hodisalar jurnali</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vaqt</TableHead>
                  <TableHead>Foydalanuvchi</TableHead>
                  <TableHead>Harakat turi</TableHead>
                  <TableHead>Tavsif</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((l: any) => (
                  <TableRow key={l.id}>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(l.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">
                          {l.userName.charAt(0)}
                        </div>
                        <span className="font-medium text-sm">{l.userName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getActionColor(l.actionType)} variant="outline">
                        {l.actionType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {l.description}
                    </TableCell>
                  </TableRow>
                ))}
                {filteredLogs.length === 0 && (
                   <TableRow>
                     <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                        Hozircha hech qanday faollik qayd etilmagan
                     </TableCell>
                   </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ActivityPage;
