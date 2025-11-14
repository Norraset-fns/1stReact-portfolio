import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-gradient">TechTeam</span>
            </div>
            <p className="text-sm text-muted-foreground">
              ทีมพัฒนาเว็บไซต์มืออาชีพ สร้างสรรค์โซลูชันดิจิทัลที่ทันสมัย
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">เมนูหลัก</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ผลงาน
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  บริการ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">บริการของเรา</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Web Development</li>
              <li className="text-sm text-muted-foreground">Front-End</li>
              <li className="text-sm text-muted-foreground">UI/UX Design</li>
              <li className="text-sm text-muted-foreground">Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>norrasart@kindeeyudee.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+66 12 345 6789</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Thailand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">Fortune Gamer</span>.
            All rights reserved.
            <br />
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
