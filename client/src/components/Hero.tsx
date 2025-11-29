import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/vibrant_professional_abstract_background_with_blue_and_purple_gradients.png";
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
          className="w-full h-full object-cover opacity-40"
        />
        {/* Lighter overlay to make dark text pop, or darker overlay for light text? 
            User asked for "Darker and Thicker" font on background. 
            If I make the overlay light, dark text works.
        */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black/80 font-bold tracking-wider uppercase text-sm md:text-base mb-4 bg-white/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm shadow-sm">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-6 leading-tight text-black drop-shadow-sm">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-700 filter drop-shadow-none">AITHARAJU SRICHARAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-800 font-bold max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
            A passionate beginner developer building modern web experiences.
            Turning ideas into reality with clean code and creative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-lg h-12 shadow-xl hover:shadow-primary/40 transition-all font-bold border-2 border-primary"
              >
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-lg h-12 bg-white/60 backdrop-blur-md border-2 border-slate-800 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-900"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} strokeWidth={3} />
      </motion.div>
    </section>
  );
}
