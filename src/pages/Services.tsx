import { Monitor, Network, Camera, Cable, Server, Shield, Wifi, HardDrive } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fiberCables from "@/assets/fiber-cables-1.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Solutions",
      description: "Complete IT infrastructure setup and support including hardware installation, software configuration, system maintenance, and technical troubleshooting for businesses of all sizes.",
      features: ["Hardware Setup", "Software Installation", "System Maintenance", "Technical Support"],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Professional network design and installation including structured cabling, router configuration, switch setup, and network optimization for maximum performance.",
      features: ["Network Design", "Cable Installation", "Router Setup", "Performance Optimization"],
    },
    {
      icon: Camera,
      title: "CCTV Security Systems",
      description: "Advanced surveillance camera systems with HD recording, remote viewing capabilities, motion detection, and 24/7 monitoring solutions for complete security coverage.",
      features: ["HD Cameras", "Remote Monitoring", "Motion Detection", "Recording Systems"],
    },
    {
      icon: Cable,
      title: "Fiber Optic Solutions",
      description: "High-speed fiber optic cable installation, splicing, testing, and maintenance for reliable ultra-fast internet and data transmission with minimal signal loss.",
      features: ["Cable Installation", "Fiber Splicing", "Network Testing", "Maintenance"],
    },
    {
      icon: Server,
      title: "Server Setup",
      description: "Enterprise server configuration, virtualization, backup solutions, and ongoing management to ensure your business data is secure and accessible.",
      features: ["Server Installation", "Virtualization", "Backup Solutions", "Management"],
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive network security including firewall setup, intrusion detection, security audits, and protection against cyber threats.",
      features: ["Firewall Setup", "Threat Protection", "Security Audits", "Access Control"],
    },
    {
      icon: Wifi,
      title: "Wireless Networks",
      description: "Professional WiFi installation and configuration for homes and businesses with coverage optimization, security setup, and guest network management.",
      features: ["WiFi Installation", "Coverage Optimization", "Security Setup", "Guest Networks"],
    },
    {
      icon: HardDrive,
      title: "Data Management",
      description: "Complete data backup and recovery solutions, data migration services, and storage optimization to protect your valuable business information.",
      features: ["Data Backup", "Recovery Solutions", "Data Migration", "Storage Optimization"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--hero-gradient-black))] via-background to-[hsl(var(--hero-gradient-to))] text-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={fiberCables} 
            alt="Fiber cables background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-glow-blue">Premium Services</h1>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            Elite technology solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm glow-blue">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-glow-blue">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Contact us today to discuss your technology needs and get a premium consultation
          </p>
          <Button asChild size="lg" className="glow-blue-strong">
            <a href="/contact">Contact Us Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
