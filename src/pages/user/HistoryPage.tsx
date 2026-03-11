import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Search, History as HistoryIcon, Eye, Download } from 'lucide-react';
import { toast } from 'sonner';

const HistoryPage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [history, setHistory] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem(`app_history_${user.id}`) || '[]');
      setHistory(saved);
    }
  }, [user]);

  const handleDelete = (id: string) => {
    if (confirm('O\'chirishni tasdiqlaysizmi?')) {
      const updated = history.filter(h => h.id !== id);
      setHistory(updated);
      localStorage.setItem(`app_history_${user?.id}`, JSON.stringify(updated));
      toast.success('O\'chirildi!');
    }
  };

  const filteredHistory = history.filter(h => 
    h.originalEquation.toLowerCase().includes(search.toLowerCase()) ||
    h.transformedEquation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('common.search')}
              className="pl-10"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={() => toast.info('PDF generatsiya qilinmoqda...')}>
            <Download className="mr-2 h-4 w-4" />
            Export to PDF
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('nav.history')}</CardTitle>
            <CardDescription>Barcha saqlangan konvertatsiyalaringiz ro'yxati</CardDescription>
          </CardHeader>
          <CardContent>
            {filteredHistory.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <HistoryIcon className="h-16 w-16 mx-auto text-muted-foreground opacity-20" />
                <p className="text-muted-foreground">Saqlangan natijalar topilmadi</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredHistory.map((h: any) => (
                  <Card key={h.id} className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{new Date(h.createdAt).toLocaleString()}</p>
                          <div className="flex items-center gap-4">
                            <span className="font-mono bg-muted px-2 py-1 rounded text-sm">{h.originalEquation}</span>
                            <span className="text-primary font-bold">→</span>
                            <span className="font-serif italic font-bold text-primary">{h.transformedEquation}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 shrink-0">
                           <Button variant="ghost" size="icon" onClick={() => toast.info('View details')}><Eye className="h-4 w-4" /></Button>
                           <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleDelete(h.id)}><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default HistoryPage;
