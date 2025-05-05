
import { Card, CardContent } from "@/components/ui/card";
import { Code, LayoutTemplate, Brain, BadgeCheck } from "lucide-react";

interface SkillProps {
  name: string;
  category: string;
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="mb-4">
      <span className="font-medium">{name}</span>
    </div>
  );
};

const SkillsSection = () => {
  const skills: SkillProps[] = [
    { name: "Python", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Machine Learning", category: "ai" },
    { name: "Problem Solving", category: "soft" },
    { name: "Data Structures", category: "computer-science" }
  ];

  // Group skills by category
  const skillCategories = {
    languages: { 
      title: "Programming Languages", 
      skills: skills.filter(s => s.category === "languages"),
      icon: <Code className="w-5 h-5 mr-2" />
    },
    frontend: { 
      title: "Frontend Development", 
      skills: skills.filter(s => s.category === "frontend"),
      icon: <LayoutTemplate className="w-5 h-5 mr-2" />
    },
    ai: { 
      title: "AI & Machine Learning", 
      skills: skills.filter(s => s.category === "ai"),
      icon: <Brain className="w-5 h-5 mr-2" />
    },
    other: { 
      title: "Other Skills", 
      skills: skills.filter(s => !["languages", "frontend", "ai"].includes(s.category)),
      icon: <BadgeCheck className="w-5 h-5 mr-2" />
    }
  };

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => (
            <Card key={key} className="bg-card/50 border-primary/10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
