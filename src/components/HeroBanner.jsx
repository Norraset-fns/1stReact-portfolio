import React from "react";
import heroImg from "../assets/hero-bg.jpg";
function HeroBanner() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          สร้างเว็บไซต์ที่ยอดเยี่ยม
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-6">
          ทีม Web Freelance มืออาชีพที่พร้อมพัฒนาเว็บไซต์ตามความต้องการของคุณ
          <br />
          ด้วยประสบการณ์และเทคโนโลยีที่ทันสมัย
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ดูผลงานของเรา →
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
          >
            ติดต่อเรา
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
