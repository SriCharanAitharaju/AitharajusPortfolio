import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Smartphone } from "lucide-react";

export default function About() {
  const skills = [
    { name: "HTML5 & CSS3", icon: <Layout className="w-6 h-6" /> },
    { name: "JavaScript (ES6+)", icon: <Code className="w-6 h-6" /> },
    { name: "React Basics", icon: <Database className="w-6 h-6" /> },
    { name: "Responsive Design", icon: <Smartphone className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Hello! I'm <span className="font-medium text-primary">AITHARAJU SRICHARAN</span>, 
                a budding developer with a passion for creating useful and beautiful digital experiences.
              </p>
              <p>
                I am currently starting my journey in web development, focusing on building 
                a strong foundation in frontend technologies. I love learning new tools 
                and solving problems through code.
              </p>
              <p>
                My goal is to grow as a professional developer and contribute to meaningful projects.
                When I'm not coding, I enjoy exploring new technologies and improving my design skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="border-border/50 bg-card hover:bg-secondary transition-colors">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
