import React from "react";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import { Code, Palette, Rocket, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "../components/UI/card";

export default function Index() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "เขียนโค้ดที่สะอาด มีมาตรฐาน และง่ายต่อการบำรุงรักษา",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "ออกแบบ UI/UX ที่ทันสมัย สวยงาม และใช้งานง่าย",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "เว็บไซต์ที่โหลดเร็ว ประสิทธิภาพสูง",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "รักษาความปลอดภัยข้อมูลอย่างเข้มงวด",
    },
    {
      icon: Rocket,
      title: "Scalable",
      description: "ระบบที่ขยายได้ตามการเติบโตของธุรกิจ",
    },
    {
      icon: Users,
      title: "Team Support",
      description: "ทีมงานพร้อมให้คำปรึกษาและซัพพอร์ต",
    },
  ];

  const stats = [
    { number: "50+", label: "โปรเจ็กต์ที่สำเร็จ" },
    { number: "30+", label: "ลูกค้าพึงพอใจ" },
    { number: "5+", label: "ปีประสบการณ์" },
    { number: "100%", label: "ความมุ่งมั่น" },
  ];
  return (
    <div className="min-h-screen bg-blue-900">
      <NavBar />

      <HeroBanner />
      {/* Stats Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent clip-text bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-transparent clip-text bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ทำไมต้องเลือก <span className="text-gradient">TechTeam</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              เราพร้อมมอบบริการที่ดีที่สุดเพื่อความสำเร็จของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:glow-primary"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
