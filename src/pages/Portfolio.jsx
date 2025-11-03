import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/UI/card";
import { ExternalLink } from "lucide-react";
import { Badge } from "../components/UI/badge";

import ecommerceImg from '../assets/portfolio-ecommerce.jpg'
import dashboardImg from '../assets/portfolio-dashboard.jpg'
import websiteImg from '../assets/portfolio-website.jpg'
import mobileImg from '../assets/portfolio-mobile.jpg'

function Portfolio() {

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "แพลตฟอร์มอีคอมเมิร์ซแบบครบวงจร พร้อมระบบชำระเงิน และจัดการสินค้า",
            image: ecommerceImg,
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            category: "Web Application",
        },
        {
            title: "Business Dashboard",
            description: "แดชบอร์ดสำหรับวิเคราะห์ข้อมูลธุรกิจ พร้อม real-time analytics",
            image: dashboardImg,
            tags: ["React", "TypeScript", "Chart.js", "PostgreSQL"],
            category: "Data Analytics",
        },
        {
            title: "Corporate Website",
            description: "เว็บไซต์องค์กรที่ทันสมัย responsive และ SEO-friendly",
            image: websiteImg,
            tags: ["React", "Tailwind CSS", "Next.js"],
            category: "Corporate",
        },
        {
            title: "Mobile App Interface",
            description: "ออกแบบและพัฒนา UI/UX สำหรับแอพพลิเคชันมือถือ",
            image: mobileImg,
            tags: ["React Native", "UI/UX", "Figma"],
            category: "Mobile",
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
                        ชมผลงานที่เราภูมิใจนำเสนอ แต่ละโปรเจ็กต์สะท้อนถึงความมุ่งมั่นและคุณภาพของเรา
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:glow-primary"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex items-center space-x-2 text-primary">
                                        <span className="font-semibold">View Project</span>
                                        <ExternalLink className="h-4 w-4" />
                                    </div>
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
    )
}

export default Portfolio