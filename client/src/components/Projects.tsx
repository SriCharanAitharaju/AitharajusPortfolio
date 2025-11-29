import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "LetsPlay AU",
      description: "A comprehensive platform for discovering and managing gaming events and communities. Features user profiles, event listings, and community engagement tools.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Finger Print Quality Estimator",
      description: "An intelligent system built with MATLAB for analyzing and estimating fingerprint quality using advanced signal processing and systems techniques for biometric authentication.",
      tags: ["MATLAB", "Signal Processing", "Systems"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are a few examples of my work as I learn and grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-border/50 overflow-hidden bg-card">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-400 w-full" />
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0 gap-2">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink size={14} /> View Demo
                  </Button>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Github size={18} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
