
import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">Madhuri Visali</h3>
            <p className="text-muted-foreground text-sm">
              Aspiring Full-Stack and AI Developer
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a href="mailto:madhuriperumalla9@gmail.com" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Madhuri Sri Durga Visali Perumalla. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
