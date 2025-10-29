import React from "react";
import { cn } from "../../lib/utils"; // รวม class name ถ้ามีไฟล์นี้อยู่

function Button({ variant = "default", size = "default", className = "", ...props }) {
  // 🎨 สไตล์พื้นฐานที่ปุ่มทุกแบบใช้ร่วมกัน
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  // 🧩 สีของแต่ละแบบ (variant)
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-900",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "hover:bg-gray-100 text-gray-900",
    link: "text-blue-600 hover:underline underline-offset-4",
    hero: "bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:opacity-90 shadow-lg",
    glass: "bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 text-white",
  };

  // 📏 ขนาดของปุ่ม
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10",
  };

  // ✅ รวม class ทั้งหมด
  const classes = cn(base, variants[variant], sizes[size], className);

  return <button className={classes} {...props} />;
}

export { Button };
