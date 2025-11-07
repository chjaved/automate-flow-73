import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Award, Users } from "lucide-react";
import usairamImage from "@/assets/team-usairam.jpg";
import mutahirImage from "@/assets/team-mutahir.png";
import javedImage from "@/assets/team-javed.jpg";

const teamMembers = [
  {
    name: "Usairam Saleem",
    role: "CEO",
    description: "Software Engineer with 2+ years of experience in developing web applications using modern technologies",
    image: usairamImage,
  },
  {
    name: "Mutahir Abbas",
    role: "CEO",
    description: "Marketing Automation Specialist with 2+ years of experience in implementing and managing marketing automation platforms and tools.",
    image: mutahirImage,
  },
  {
    name: "Javed Jabbar",
    role: "CEO",
    description: "Software Engineer with 3+ years of experience in developing web applications using modern technologies",
    image: javedImage,
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to make automation accessible to businesses of all sizes. Every project is an opportunity to create meaningful impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We don't cut corners. Every line of code, every integration, every solution is built to the highest standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We build lasting relationships based on trust, transparency, and mutual growth.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">NextGen Automations</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate technologists dedicated to transforming businesses 
              through the power of web development and AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto container-padding">
          <Card className="p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                NextGen Automations was born from a simple observation: businesses were spending countless hours 
                on repetitive tasks that could be automated. We saw talented teams bogged down by manual processes, 
                innovative ideas delayed by technical constraints, and growth opportunities missed due to operational inefficiencies.
              </p>
              <p className="mb-4">
                We set out to change that. With combined expertise in software engineering, AI, and marketing automation, 
                we built a company focused on one goal: helping businesses automate the mundane so they can focus on 
                what truly matters—growth, innovation, and customer success.
              </p>
              <p>
                Today, we've helped 50+ businesses save thousands of hours, reduce costs by up to 70%, and scale their 
                operations without proportionally scaling their overhead. Every automation we build, every integration 
                we implement, and every solution we deliver is designed to create lasting, measurable impact.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 md:p-12 hover-lift animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with intelligent automation solutions that save time, reduce costs, 
                and unlock growth potential. We believe every business, regardless of size, should have 
                access to enterprise-level automation capabilities.
              </p>
            </Card>

            <Card className="p-8 md:p-12 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where businesses operate at peak efficiency, where technology amplifies human 
                potential rather than replacing it, and where automation is the foundation of sustainable, 
                scalable growth for organizations everywhere.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert professionals dedicated to transforming your business with cutting-edge automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover-lift bg-card border-muted group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <Card className="p-12 bg-gradient-to-br from-primary to-accent text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-white/90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-white/90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
                <div className="text-white/90">Average Time Saved</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support Available</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
