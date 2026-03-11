import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useConverter } from '@/hooks/useConverter';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calculator, Copy, Save, Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const ConverterPage: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { convertEquation, loading } = useConverter();
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState<any>(null);

  const examples = [
    { name: 'Circle', eq: 'x^2 + y^2 = 25' },
    { name: 'Ellipse', eq: 'x^2/16 + y^2/9 = 1' },
    { name: 'Parabola', eq: 'y = 2x^2' },
    { name: 'Hyperbola', eq: 'x^2/4 - y^2/9 = 1' },
  ];

  const handleConvert = () => {
    if (!input.trim()) {
      toast.error('Please enter an equation');
      return;
    }
    const res = convertEquation(input);
    if (res) {
      setResult(res);
      toast.success('Converted successfully!');
    }
  };

  const handleSave = () => {
    if (!result || !user) return;
    const history = JSON.parse(localStorage.getItem(`app_history_${user.id}`) || '[]');
    const newEntry = {
      ...result,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    history.unshift(newEntry);
    localStorage.setItem(`app_history_${user.id}`, JSON.stringify(history));
    toast.success('Saved to history!');
    
    // Log activity
    const logs = JSON.parse(localStorage.getItem('app_activity_logs') || '[]');
    logs.unshift({
      id: crypto.randomUUID(),
      userId: user.id,
      userName: user.fullName,
      actionType: 'CONVERSION_SAVED',
      description: `Saved conversion: ${result.originalEquation}`,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('app_activity_logs', JSON.stringify(logs.slice(0, 100)));
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.transformedEquation);
      toast.success('Copied to clipboard!');
    }
  };

  return (
    <AppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('converter.title')}</CardTitle>
              <CardDescription>{t('converter.input')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="equation">Kartezian ko'rinishidagi tenglama</Label>
                <Textarea
                  id="equation"
                  placeholder="Masalan: x^2 + y^2 = 9"
                  className="min-h-[120px] font-mono text-lg"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {examples.map(ex => (
                  <Button
                    key={ex.name}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(ex.eq)}
                    className="hover:border-primary"
                  >
                    {ex.name}
                  </Button>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => { setInput(''); setResult(null); }}>
                <Trash2 className="mr-2 h-4 w-4" />
                {t('converter.clear')}
              </Button>
              <Button onClick={handleConvert} disabled={loading}>
                <Calculator className="mr-2 h-4 w-4" />
                {t('converter.convert')}
              </Button>
            </CardFooter>
          </Card>

          {result && (
             <Card className="animate-fade-in">
               <CardHeader>
                 <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                   {t('converter.steps')}
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 {result.steps.map((step: string, i: number) => (
                   <div key={i} className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 py-1">
                     <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                       {i + 1}
                     </div>
                     <p className="text-sm leading-6">{step}</p>
                   </div>
                 ))}
               </CardContent>
             </Card>
          )}
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <Card className={`h-full flex flex-col ${!result && 'opacity-50 grayscale'}`}>
            <CardHeader>
              <CardTitle>{t('converter.result')}</CardTitle>
              <CardDescription>Kompleks ko'rinishdagi tenglama</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center p-8 bg-muted/20">
              {result ? (
                <div className="text-center space-y-6">
                  <div className="p-6 bg-background border-2 border-primary/20 rounded-xl shadow-inner">
                    <p className="text-3xl font-bold font-serif italic text-primary">
                      {result.transformedEquation}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Original Form</p>
                    <p className="text-lg font-mono opacity-80">{result.originalEquation}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 space-y-4">
                  <Calculator className="h-16 w-16 mx-auto text-muted-foreground opacity-20" />
                  <p className="text-muted-foreground">Konvertatsiya qilish uchun tenglamani kiriting</p>
                </div>
              )}
            </CardContent>
            {result && (
              <CardFooter className="flex gap-4 border-t pt-6 bg-card">
                <Button variant="outline" className="flex-1" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  {t('converter.copy')}
                </Button>
                <Button className="flex-1" onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  {t('converter.save')}
                </Button>
              </CardFooter>
            )}
          </Card>

          {result && (
             <Card>
               <CardHeader>
                 <CardTitle className="text-sm">Substitution Formulas</CardTitle>
               </CardHeader>
               <CardContent className="space-y-2">
                 {result.substitutionFormulas.map((f: string, i: number) => (
                   <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded font-serif italic">
                     <ArrowRight className="h-4 w-4 text-primary" />
                     {f}
                   </div>
                 ))}
               </CardContent>
             </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default ConverterPage;
