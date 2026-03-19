import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, CheckCircle, History, Shield, Globe } from "lucide-react";

const LandingPage: React.FC = () => {
  const { t, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full z-10 bg-background/80 backdrop-blur border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">{t("app.name")}</h1>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setLanguage("uz")}>
              UZ
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setLanguage("ru")}>
              RU
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setLanguage("en")}>
              EN
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20 px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
              {t("app.name")}
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
              {t("app.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-bold"
              >
                <Link to="/dashboard">Kirish</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">
              Nega ComplexCurve Converter?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calculator,
                  title: "Aqlli konvertatsiya",
                  desc: "Ellips, aylana, giperbola, parabola va boshqa egri chiziqlarni avtomatik konvertatsiya qiladi.",
                },
                {
                  icon: CheckCircle,
                  title: "Bosqichma-bosqich yechim",
                  desc: "Har bir matematik qadam batafsil tushuntiriladi va soddalashtiriladi.",
                },
                {
                  icon: History,
                  title: "Tarixni saqlash",
                  desc: "Barcha konvertatsiyalaringizni saqlash va istalgan vaqtda koʻrish imkoniyati.",
                },
                {
                  icon: Shield,
                  title: "Boshqaruv paneli",
                  desc: "Foydalanuvchilar va faollik jurnalini boshqarish uchun admin panel.",
                },
                {
                  icon: Globe,
                  title: "Koʻp tilli",
                  desc: "Oʻzbek, Rus va Ingliz tillarini toʻliq qoʻllab-quvvatlaydi.",
                },
              ].map((f, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <f.icon className="w-12 h-12 text-primary mb-4" />
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-10 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2026 ComplexCurve Converter. Universitet loyihasi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
