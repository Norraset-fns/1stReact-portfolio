import React from "react";
import heroImg from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import { Button } from "./UI/button";
import LogoImg from "../assets/kindeeLOGo02.png";

function HeroBanner() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <img src={LogoImg} alt="Logo" className="mx-auto w-100"/>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">เว็บไซต์ระดับมืออาชีพ</span>
              <br />
              <span className="text-foreground">สำหรับธุรกิจของคุณ</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              ทีมนักพัฒนาเว็บมืออาชีพ พร้อมสร้างสรรค์โซลูชันดิจิทัลที่ตอบโจทย์ทุกความต้องการ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" variant="hero" className="text-lg px-8">
                  ดูผลงาน
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="glass" className="text-lg px-8">
                  ติดต่อเรา
                </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}

export default HeroBanner;
