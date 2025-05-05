
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const Project = ({ title, description, technologies, image, link }: ProjectProps) => {
  return (
    <Card className="overflow-hidden border-primary/10 card-hover backdrop-blur-sm bg-card/50">
      <div className="h-48 bg-secondary flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-muted-foreground">Project Image</div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost" className="mt-2 ml-auto" disabled={!link}>
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const PortfolioSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Guidance Chat Bot for College",
      description: "Developed an AI-driven chatbot that assists students with college-related inquiries. The bot provides guidance on course selection, academic schedules, and general campus information.",
      technologies: ["Python", "JavaScript", "NLP", "Machine Learning"]
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies to provide an engaging user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "E-Commerce Dashboard",
      description: "Interactive dashboard for e-commerce analytics with real-time data visualization and reporting features.",
      technologies: ["JavaScript", "React", "Chart.js", "Firebase"]
    }
  ];

  return (
    <section id="portfolio">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>My Portfolio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
