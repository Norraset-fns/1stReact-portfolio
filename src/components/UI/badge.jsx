import React from "react";
import { cn } from "../../lib/utils"; // รวม class name ถ้ามีไฟล์นี้อยู่

function Badge({ variant = "default", className = "", ...props }) {
  // 🎨 สไตล์พื้นฐานที่ปุ่มทุกแบบใช้ร่วมกัน
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // 🧩 สีของแต่ละแบบ (variant)
  const variants = {
    default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  const classes = cn(base, variants[variant], className);

  return <div className={classes} {...props} />;
}

export { Badge };
