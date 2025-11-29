import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function HomeAbout() {
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

  const skills = [
    { 
      name: "C", 
      icon: "🔧",
      color: "from-blue-500 to-blue-600",
      description: "Systems Programming"
    },
    { 
      name: "Java", 
      icon: "☕",
      color: "from-orange-500 to-orange-600",
      description: "Object-Oriented Dev"
    },
    { 
      name: "Python", 
      icon: "🐍",
      color: "from-yellow-500 to-yellow-600",
      description: "Data & Scripts"
    },
    { 
      name: "Event Organizing", 
      icon: "🎯",
      color: "from-pink-500 to-pink-600",
      description: "Team Leadership"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(196, 181, 255, 0.2)",
                    "0 0 40px rgba(196, 181, 255, 0.4)",
                    "0 0 20px rgba(196, 181, 255, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Image placeholder with gradient */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden border border-primary/30">
                <div className="text-center text-foreground/60 p-8">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-sm font-medium">Electronics Student & Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 text-lg text-foreground/80 leading-relaxed"
            >
              <p>
                I'm <span className="font-semibold text-white">AITHARAJU SRICHARAN</span>, 
                a passionate Electronics Student with a growing interest in web development and technology.
              </p>
              <p>
                Currently, I'm focusing on building strong fundamentals in frontend development, 
                electronics, and embedded systems. I believe in learning by doing and continuously 
                exploring new technologies.
              </p>
              <p>
                My journey combines my love for electronics with modern web technologies, 
                and I'm excited to create projects that merge hardware and software innovations.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="pt-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Key Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    className="group relative h-48"
                  >
                    <div className={`bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-center p-6`}>
                      <div className="text-6xl mb-3">{skill.icon}</div>
                      <p className="font-black text-white text-lg">{skill.name}</p>
                      <p className="text-xs text-white/90 mt-2 font-semibold">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="pt-4"
            >
              <Link href="/about">
                <Button 
                  className="group gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full"
                >
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 pt-20 border-t border-border/30"
        >
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
              Education
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
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
        </motion.div>
      </div>
    </section>
  );
}
