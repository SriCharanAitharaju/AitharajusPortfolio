import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HomeAbout() {
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
      </div>
    </section>
  );
}
