
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="gradient-text text-5xl md:text-6xl">Madhuri Sri Durga Visali Perumalla</span>
          </h1>
          
          <p className="text-xl mb-8 text-muted-foreground">
            Aspiring Full-Stack and AI Developer with a passion for creating modern web applications. 
            Combining technical expertise and creative problem-solving to deliver solutions that meet 
            user needs and business goals.
          </p>
          
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={scrollToPortfolio}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-scale-in">
          <div className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-secondary/50 overflow-hidden border-4 border-primary/20 shadow-xl">
            {/* Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Profile Image
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
        }}>
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
