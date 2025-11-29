import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/professional_dark_tech_gradient_background.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Slight dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white font-bold tracking-wider uppercase text-sm md:text-base mb-6 bg-white/10 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/20">
            Welcome to my portfolio
          </h2>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading mb-4 leading-tight text-white drop-shadow-lg">
            Hi, I'm <span className="text-primary">AITHARAJU SRICHARAN</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-white mb-6 tracking-wide">
            ELECTRONICS STUDENT
          </h2>

          <p className="text-lg md:text-xl text-white font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            A passionate electronics engineering student with a keen interest in embedded systems, 
            circuit design, and web development. I love exploring new technologies and building 
            innovative projects that bridge hardware and software. Currently focused on learning 
            and growing as a future engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-lg h-12 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all font-bold bg-primary hover:bg-primary/90 text-white border-none"
              >
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-lg h-12 bg-white/10 backdrop-blur-md border-white/30 text-white font-bold hover:bg-white/20 transition-all"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all shadow-lg hover:shadow-xl"
              data-testid="button-github"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://github.com/SriCharanAitharaju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all shadow-lg hover:shadow-xl"
              data-testid="button-linkedin"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} strokeWidth={3} />
      </motion.div>
    </section>
  );
}
