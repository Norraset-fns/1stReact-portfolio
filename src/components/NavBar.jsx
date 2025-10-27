import React from "react";
import { Link } from "react-router-dom";

const navItems = [
    { id: 1, name: "หน้าหลัก", path: "/" },
    { id: 2, name: "เกี่ยวกับเรา", path: "/about" },
    { id: 3, name: "บริการ", path: "/services" },
    { id: 4, name: "ติดต่อ", path: "/contact" },
];
function NavBar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-indigo-900/70 text-white sticky top-0 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-900/50">
            <a href="#home" className="text-xl font-bold">
                กินดีอยู่ดี
            </a>
            <div className="flex items-center">
                <ul className="flex space-x-6 px-8">
                    {/* 2. วนซ้ำ (Iterate) ข้อมูลโดยใช้ .map() */}
                    {navItems.map((item) => (
                        // ต้องใส่ key ที่ไม่ซ้ำกันสำหรับ Element ใน List
                        <li key={item.id} className="hover:text-cyan-400">
                            {/* ✅ เปลี่ยน a เป็น Link */}
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </nav>
    );
}

export default NavBar;
