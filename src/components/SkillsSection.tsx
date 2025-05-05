
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

const Skill = ({ name, level }: SkillProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
};

const SkillsSection = () => {
  const skills: SkillProps[] = [
    { name: "Python", level: 85, category: "languages" },
    { name: "JavaScript", level: 80, category: "languages" },
    { name: "Java", level: 75, category: "languages" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "React", level: 75, category: "frontend" },
    { name: "Machine Learning", level: 70, category: "ai" },
    { name: "Problem Solving", level: 85, category: "soft" },
    { name: "Data Structures", level: 80, category: "computer-science" }
  ];

  // Group skills by category
  const skillCategories = {
    languages: { title: "Programming Languages", skills: skills.filter(s => s.category === "languages") },
    frontend: { title: "Frontend Development", skills: skills.filter(s => s.category === "frontend") },
    ai: { title: "AI & Machine Learning", skills: skills.filter(s => s.category === "ai") },
    other: { 
      title: "Other Skills", 
      skills: skills.filter(s => !["languages", "frontend", "ai"].includes(s.category)) 
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
            <Card key={key} className="bg-card/50 border-primary/10 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
                {category.skills.map((skill, index) => (
                  <Skill key={index} {...skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
