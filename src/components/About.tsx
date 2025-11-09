import { Card } from "@/components/ui/card";
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

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Meet the team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The people who design, develop, and automate your brand's online growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="hover-lift overflow-hidden border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
