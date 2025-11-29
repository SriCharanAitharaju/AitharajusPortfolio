import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Smartphone, GraduationCap, Calendar } from "lucide-react";

export default function About() {
  const skills = [
    { name: "C", icon: <Code className="w-6 h-6" />, description: "Systems Programming" },
    { name: "Java", icon: <Layout className="w-6 h-6" />, description: "Object-Oriented Dev" },
    { name: "Python", icon: <Database className="w-6 h-6" />, description: "Data & Scripts" },
    { name: "Event Organizing", icon: <Smartphone className="w-6 h-6" />, description: "Team Leadership" },
  ];

  const education = [
    {
      level: "School",
      institution: "Kamala Memorial High School",
      location: "Nacharam, Hyderabad",
      year: "2021",
      icon: "🏫",
    },
    {
      level: "Intermediate",
      institution: "Nano Junior College",
      location: "Nallakunta, Hyderabad",
      year: "2021 - 2023",
      icon: "📚",
    },
    {
      level: "Undergraduate",
      institution: "Anurag University",
      location: "Ghatkesar, Hyderabad",
      year: "2024 - 2028",
      cgpa: "8.63",
      icon: "🎓",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <p className="text-sm text-foreground/60 ml-11">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 bg-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-blue-400" />
                    <CardContent className="p-6 pl-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">{edu.icon}</span>
                            <div>
                              <h3 className="text-xl font-bold text-primary">{edu.level}</h3>
                              <p className="text-lg font-semibold text-foreground">{edu.institution}</p>
                            </div>
                          </div>
                          <p className="text-foreground/70 ml-12">{edu.location}</p>
                          {edu.cgpa && (
                            <p className="text-foreground/70 ml-12 mt-1">
                              <span className="font-semibold">CGPA:</span> {edu.cgpa}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
