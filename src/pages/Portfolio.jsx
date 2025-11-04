import React from "react";
import { Link } from "react-router-dom";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "../components/UI/card";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../components/UI/badge";
import { Button } from "../components/UI/button";


function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "ระบบอีคอมเมิร์ซครบวงจร พร้อมระบบชำระเงินและจัดการสินค้า",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      category: "E-Commerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "AI Dashboard Analytics",
      description: "แดชบอร์ดวิเคราะห์ข้อมูลด้วย AI และ Machine Learning",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Analytics",
      tags: ["TypeScript", "Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "ระบบจัดการคลินิกและโรงพยาบาล พร้อมนัดหมายออนไลน์",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      category: "Healthcare",
      tags: ["React", "PostgreSQL", "AWS", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "แพลตฟอร์มซื้อขายอสังหาริมทรัพย์ พร้อม Virtual Tour",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      category: "Real Estate",
      tags: ["Next.js", "Three.js", "Supabase", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "ระบบการเรียนการสอนออนไลน์ พร้อมระบบสอบและวิดีโอสด",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      category: "Education",
      tags: ["React", "Firebase", "WebRTC", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Restaurant Ordering App",
      description: "แอปสั่งอาหารออนไลน์ พร้อมระบบติดตามคำสั่งซื้อแบบเรียลไทม์",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      category: "Food Delivery",
      tags: ["React Native", "Express", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">ผลงาน</span>ของเรา
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ชมผลงานที่เราภูมิใจนำเสนอ
            แต่ละโปรเจ็กต์สะท้อนถึงความมุ่งมั่นและคุณภาพของเรา
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:glow-primary"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 pb-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    ดูเว็บไซต์
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-primary/50 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                สนใจให้เราช่วยสร้างโปรเจ็กต์ของคุณ?
              </h2>
              <p className="text-muted-foreground mb-6">
                ติดต่อเราวันนี้เพื่อปรึกษาและรับข้อเสนอพิเศษ
              </p>
              <a href="/contact">
                <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity glow-primary">
                  ติดต่อเราเลย
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
