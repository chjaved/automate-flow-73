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
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
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

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Card className="p-12 bg-gradient-to-br from-muted/50 to-secondary/30 border-muted">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of automation to transform businesses. Our mission is to help companies save time, 
              reduce costs, and scale effortlessly by leveraging the latest in web development and AI technology. 
              With years of combined experience, we're committed to delivering solutions that truly make a difference.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
