
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 50);
      
      // Find the current section
      const currentPos = window.scrollY + 100;
      const sectionElements = sections.map(section => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));
      
      // Sort by closest to current position
      const currentSection = sectionElements
        .filter(section => section.offset <= currentPos)
        .sort((a, b) => b.offset - a.offset)[0];
      
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        scrolled ? "bg-background/80 py-2 shadow-md" : "py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold gradient-text">Madhuri Visali</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === section.id 
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu - Simplified for first version */}
        <div className="md:hidden">
          <button className="text-foreground">Menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
