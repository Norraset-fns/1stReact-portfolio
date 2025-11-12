import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/UI/button";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Palette,
  Rocket,
  Check,
  Code,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/UI/card";

function Services() {
  const services = [
    {
      icon: Globe,
      title: "เว็บไซต์สำหรับธุรกิจ",
      description: "เว็บไซต์องค์กรและธุรกิจที่สวยงาม ทันสมัย และใช้งานง่าย",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading",
        "Content Management",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "ระบบอีคอมเมิร์ซครบวงจร พร้อมระบบชำระเงินและจัดการคำสั่งซื้อ",
      features: [
        "ระบบสินค้าและคลังสินค้า",
        "ระบบชำระเงินออนไลน์",
        "ระบบจัดการคำสั่งซื้อ",
        "Dashboard สำหรับผู้ดูแล",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Front-End Development",
      description: "พัฒนาเว็บด้วยเทคโนโลยีสมัยใหม่ เช่น React และ Tailwind CSS",
      features: [
        "Responsive Design",
        "Interactive UI",
        "Reusable Components",
        "Optimized Performance",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Web Application",
      description: "ระบบจัดการและ Dashboard สำหรับธุรกิจ",
      features: [
        "Real-time Updates",
        "Data Visualization",
        "User Management",
        "API Integration",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและใช้งานง่าย",
      features: [
        "User Research",
        "Wireframe & Prototype",
        "Visual Design",
        "Usability Testing",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Rocket,
      title: "Consulting & Support",
      description: "ให้คำปรึกษาและดูแลระบบหลังส่งมอบ",
      features: [
        "Technology Consulting",
        "Performance Optimization",
        "24/7 Support",
        "Regular Updates",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];
  return (
    <div className="min-h-screen pt-24 pb-20">
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              บริการของเรา
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เราให้บริการครบวงจร ตั้งแต่การออกแบบ พัฒนา ไปจนถึงดูแลหลังส่งมอบ
            ด้วยเทคโนโลยีล้ำสมัยและทีมงานมืออาชีพ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 space-y-6 border-border hover:border-primary transition-all duration-300 hover:glow-primary group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ขั้นตอนการทำงาน</h2>
            <p className="text-muted-foreground">
              กระบวนการที่โปร่งใส ชัดเจน และมีประสิทธิภาพ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "ปรึกษา & วางแผน",
                desc: "รับฟังความต้องการและวางแผนโปรเจค",
              },
              {
                step: "02",
                title: "ออกแบบ",
                desc: "สร้าง UI/UX และ Prototype",
              },
              { step: "03", title: "พัฒนา", desc: "เขียนโค้ดและทดสอบระบบ" },
              {
                step: "04",
                title: "ส่งมอบ & ดูแล",
                desc: "Deploy และให้การสนับสนุน",
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="p-6 space-y-3 border-border hover:border-primary transition-all group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="relative overflow-hidden border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="relative p-12 md:p-16 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              พร้อมเริ่มโปรเจคกับเราแล้วหรือยัง?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ปรึกษาฟรี!
              เรามีทีมงานพร้อมตอบทุกคำถามและให้คำแนะนำที่เหมาะสมกับธุรกิจคุณ
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50"
              >
                ติดต่อเราเลย
              </Button>
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default Services;
