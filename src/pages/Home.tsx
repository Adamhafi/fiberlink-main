import { Phone, CheckCircle2, Monitor, Network, Camera, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-fiber-luxury.jpg";
import fiberCables from "@/assets/fiber-cables-1.jpg";
import networkServer from "@/assets/network-server.jpg";
import cctvLuxury from "@/assets/cctv-luxury.jpg";
import itWorkspace from "@/assets/it-workspace.jpg";

const Home = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Solutions",
      description: "Complete IT support and infrastructure management for your business",
    },
    {
      icon: Network,
      title: "Network Setup",
      description: "Professional network design, installation, and maintenance",
    },
    {
      icon: Camera,
      title: "CCTV Cameras",
      description: "Advanced security camera systems with remote monitoring",
    },
    {
      icon: Cable,
      title: "Fiber Optics",
      description: "High-speed fiber optic installation and troubleshooting",
    },
  ];

  const whyChooseUs = [
    "24/7 emergency support available",
    "Experienced certified technicians",
    "Quick response time",
    "Competitive pricing",
    "Quality guaranteed work",
    "Long-term maintenance support",
  ];

  return (
    <div className="bg-background">
  {/* Hero Section */}
  <section className="relative hero-animate bg-gradient-to-br from-[hsl(var(--hero-gradient-black))] via-background to-[hsl(var(--hero-gradient-to))] text-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={heroImage} 
            alt="Fiber optic technology" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Animated fiber cable lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-accent via-accent/40 to-transparent animate-pulse delay-75" />
          <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-primary via-primary/30 to-transparent animate-pulse delay-150" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="flex items-center gap-4 text-5xl md:text-6xl font-bold mb-6 text-glow-blue">
{/*               <img
                src="https://i.ibb.co/GL5j9BR/Whats-App-Image-2025-11-14-at-12-34-42-PM-removebg-preview.png"
                alt="FiberLink logo"
                className="h-12 w-auto glitch-img"
              /> */}
              <span>Premium Tech Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90">
              Luxury IT, Network, CCTV, and Fiber Optic services. Elite support when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 glow-blue-strong floaty" asChild>
                <a href="tel:+81-854649" aria-label="Call 81-854649" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 81-854649
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10" asChild>
                <a href="/contact">Request Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fiber Cables Visual Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fiberCables} 
            alt="Fiber optic cables" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-glow-blue">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium technology solutions to keep your business at the cutting edge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="glow-blue">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Showcase Images Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg glow-blue">
              <img 
                src={networkServer} 
                alt="Network infrastructure" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Network Infrastructure</h3>
                  <p className="text-sm text-foreground/80">Professional server & network setup</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg glow-blue">
              <img 
                src={cctvLuxury} 
                alt="CCTV security systems" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Security Systems</h3>
                  <p className="text-sm text-foreground/80">Advanced CCTV & surveillance</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg glow-blue">
              <img 
                src={itWorkspace} 
                alt="IT workspace solutions" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">IT Solutions</h3>
                  <p className="text-sm text-foreground/80">Complete workspace technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-glow-blue">Why Choose FiberLink?</h2>
              <p className="text-muted-foreground">
                Excellence in every connection, security in every solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-75" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-glow-blue">Need Technical Support?</h2>
          <p className="text-lg mb-8 text-foreground/90 max-w-2xl mx-auto">
            Our elite team is ready to deliver premium IT, network, and security solutions
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 glow-blue-strong floaty" asChild>
              <a href="tel:+81-854649" aria-label="Call 81-854649" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 81-854649
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
