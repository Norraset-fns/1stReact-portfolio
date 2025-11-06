import React from 'react'
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "../components/UI/card";
import { Users, Target, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "มุ่งเน้นคุณภาพ",
    description: "ทุกโปรเจคที่ส่งมอบผ่านการทดสอบและตรวจสอบอย่างละเอียด"
  },
  {
    icon: Users,
    title: "ทำงานเป็นทีม",
    description: "ความร่วมมือและการสื่อสารที่ดีเป็นกุญแจสู่ความสำเร็จ"
  },
  {
    icon: Award,
    title: "มืออาชีพ",
    description: "ใช้เทคโนโลยีล่าสุดและ best practices ในทุกโปรเจค"
  },
  {
    icon: Heart,
    title: "ใส่ใจลูกค้า",
    description: "ความพึงพอใจของลูกค้าคือสิ่งสำคัญที่สุดของเรา"
  }
];
export default function About() {

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">เกี่ยวกับ</span>เรา
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            เราคือทีมนักพัฒนาเว็บไซต์มืออาชีพที่มุ่งมั่นสร้างสรรค์โซลูชันดิจิทัล
            ที่ตอบโจทย์ธุรกิจและขับเคลื่อนความสำเร็จของคุณ
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="relative overflow-hidden border-primary/30 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <div className="relative space-y-4">
              <h2 className="text-3xl font-bold">พันธกิจของเรา</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                เราเชื่อว่าเว็บไซต์ที่ดีต้องไม่เพียงแค่สวยงาม แต่ต้องใช้งานได้จริง ตอบโจทย์ธุรกิจ
                และสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน เราจึงมุ่งมั่นที่จะส่งมอบผลงานที่เหนือความคาดหวาย
                ด้วยเทคโนโลยีล้ำสมัยและความเอาใจใส่ในทุกรายละเอียด
              </p>
            </div>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">คุณค่าของเรา</h2>
            <p className="text-muted-foreground">
              หลักการที่ยึดถือในการทำงาน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 space-y-4 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:glow-primary group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>


      </div>

    </div>
  )
}
