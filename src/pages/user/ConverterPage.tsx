import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { useConverter } from "@/hooks/useConverter";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calculator,
  Copy,
  Save,
  Trash2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

const ConverterPage: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { convertEquation, loading, error } = useConverter();
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState<any>(null);

  const examples = [
    { name: "Toʻgʻri chiziq", eq: "y = 2*x + 3", desc: "Chiziqli funksiya" },
    { name: "Parabola", eq: "y = x^2", desc: "Kvadratik funksiya" },
    { name: "Aylana", eq: "x^2 + y^2 = 25", desc: "R=5 radiusli aylana" },
    { name: "Ellips", eq: "x^2/9 + y^2/4 = 1", desc: "a=3, b=2 li ellips" },
    {
      name: "Giperbola",
      eq: "x^2/16 - y^2/9 = 1",
      desc: "a=4, b=3 li giperbola",
    },
    { name: "Sinusoida", eq: "y = sin(x)", desc: "Trigonometrik funksiya" },
    { name: "Eksponenta", eq: "y = e^x", desc: "Eksponensial funksiya" },
    { name: "Kubik", eq: "y = x^3", desc: "Kubik funksiya" },
  ];

  const handleConvert = async () => {
    if (!input.trim()) {
      toast.error("Iltimos, tenglamani kiriting");
      return;
    }
    const res = await convertEquation(input);
    if (res) {
      setResult(res);
      toast.success("Muvaffaqiyatli konvertatsiya qilindi!");
    } else if (error) {
      toast.error(error);
    }
  };

  const handleSave = () => {
    if (!result || !user) return;
    const history = JSON.parse(
      localStorage.getItem(`app_history_${user.id}`) || "[]",
    );
    const newEntry = {
      ...result,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    history.unshift(newEntry);
    localStorage.setItem(`app_history_${user.id}`, JSON.stringify(history));
    toast.success("Tarixga saqlandi!");

    const logs = JSON.parse(localStorage.getItem("app_activity_logs") || "[]");
    logs.unshift({
      id: crypto.randomUUID(),
      userId: user.id,
      userName: user.fullName,
      actionType: "CONVERSION_SAVED",
      description: `Konvertatsiya saqlandi: ${result.originalEquation}`,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(
      "app_activity_logs",
      JSON.stringify(logs.slice(0, 100)),
    );
  };

  const handleCopy = () => {
    if (result) {
      const textToCopy =
        result.simplifiedEquation || result.transformedEquation;
      navigator.clipboard.writeText(textToCopy);
      toast.success("Buferga nusxalandi!");
    }
  };

  return (
    <AppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kirish qismi */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("converter.title")}</CardTitle>
              <CardDescription>
                Dekart koordinatalar sistemasidagi tenglamani kiriting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="equation">
                  Kartezian koʻrinishidagi tenglama
                </Label>
                <Textarea
                  id="equation"
                  placeholder="Masalan: x^2/9 + y^2/4 = 1"
                  className="min-h-[120px] font-mono text-lg"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>

              <div>
                <Label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Tayyor misollar
                </Label>
                <div className="flex flex-wrap gap-2">
                  {examples.map((ex) => (
                    <Button
                      key={ex.name}
                      variant="outline"
                      size="sm"
                      onClick={() => setInput(ex.eq)}
                      className="hover:border-primary"
                      title={ex.desc}
                    >
                      {ex.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setInput("");
                  setResult(null);
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {t("converter.clear")}
              </Button>
              <Button onClick={handleConvert} disabled={loading}>
                <Calculator className="mr-2 h-4 w-4" />
                {t("converter.convert")}
              </Button>
            </CardFooter>
          </Card>

          {result && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Yechilish bosqichlari
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.steps.map((step: string, i: number) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 py-1"
                  >
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

        {/* Natija qismi */}
        <div className="space-y-6">
          <Card
            className={`h-full flex flex-col ${!result && "opacity-50 grayscale"}`}
          >
            <CardHeader>
              <CardTitle>{t("converter.result")}</CardTitle>
              <CardDescription>Kompleks koʻrinishdagi tenglama</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center p-8 bg-muted/20">
              {result ? (
                <div className="text-center space-y-6 w-full">
                  {/* Almashtirilgan koʻrinish */}
                  <div className="p-4 bg-background border rounded-xl">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-2">
                      Almashtirilgan koʻrinish
                    </p>
                    <p className="text-lg font-bold font-serif italic text-foreground break-all">
                      {result.transformedEquation}
                    </p>
                  </div>

                  {/* Soddalashtirilgan natija */}
                  {result.simplifiedEquation &&
                    result.simplifiedEquation !==
                      result.transformedEquation && (
                      <div className="p-6 bg-background border-2 border-primary/30 rounded-xl shadow-inner">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <p className="text-xs text-primary font-semibold uppercase tracking-widest">
                            Soddalashtirilgan natija
                          </p>
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold font-serif italic text-primary break-all">
                          {result.simplifiedEquation}
                        </p>
                      </div>
                    )}

                  {/* Asl tenglama */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">
                      Asl tenglama
                    </p>
                    <p className="text-lg font-mono opacity-80">
                      {result.originalEquation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 space-y-4">
                  <Calculator className="h-16 w-16 mx-auto text-muted-foreground opacity-20" />
                  <p className="text-muted-foreground">
                    Konvertatsiya qilish uchun tenglamani kiriting
                  </p>
                </div>
              )}
            </CardContent>
            {result && (
              <CardFooter className="flex gap-4 border-t pt-6 bg-card">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleCopy}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  {t("converter.copy")}
                </Button>
                <Button className="flex-1" onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  {t("converter.save")}
                </Button>
              </CardFooter>
            )}
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Almashtirish formulalari
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {result.substitutionFormulas.map((f: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded font-serif italic"
                  >
                    <ArrowRight className="h-4 w-4 text-primary shrink-0" />
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
