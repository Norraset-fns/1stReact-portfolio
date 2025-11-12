import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/UI/card";
import { Label } from "../components/UI/label";
import { Input } from "../components/UI/input";
import { Textarea } from "../components/UI/textarea";
import { Button } from "../components/UI/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        description: "โปรดกรอกชื่อ อีเมล และข้อความ",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "ส่งข้อความสำเร็จ!",
      description: "เราจะติดต่อกลับโดยเร็วที่สุด",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "norrasart@kindeeyudee.com",
      link: "mailto:norrasart@kindeeyudee.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+66 12 345 6789",
      link: "tel:+66123456789",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Thailand",
      link: null,
    },
  ];
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">ติดต่อ</span>เรา
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            มีคำถามหรือต้องการปรึกษาโปรเจ็กต์? เราพร้อมให้บริการ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>ข้อมูลติดต่อ</CardTitle>
                <CardDescription>ติดต่อเราผ่านช่องทางเหล่านี้</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">เวลาทำการ</h3>
                <div className="space-y-2 text-sm text-white/90">
                  <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
                  <p>เสาร์ - อาทิตย์: ปิดทำการ</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>ส่งข้อความหาเรา</CardTitle>
                <CardDescription>
                  กรอกแบบฟอร์มด้านล่าง แล้วเราจะติดต่อกลับโดยเร็ว
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="กรอกชื่อของคุณ"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">อีเมล *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="012-345-6789"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">ข้อความ *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="บอกเราเกี่ยวกับโปรเจ็กต์หรือคำถามของคุณ..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    ส่งข้อความ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
