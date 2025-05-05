
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="mb-6 text-muted-foreground">
              I'm Madhuri Sri Durga Visali Perumalla, an aspiring full-stack and AI developer 
              passionate about creating innovative web applications that solve real-world problems. 
              With a strong foundation in computer science and a creative approach to problem-solving, 
              I aim to build digital experiences that are both functional and intuitive.
            </p>
            <p className="text-muted-foreground">
              My journey in technology is driven by curiosity and a desire to continuously learn and grow.
              I believe in the power of technology to transform ideas into reality and am committed to
              mastering the skills needed to bring those visions to life.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h4 className="text-lg font-semibold">Computer Science and Engineering</h4>
                    <p className="text-primary">Specialization in AI and Data Science</p>
                    <p className="text-muted-foreground">Shri Vishnu Engineering College For Women</p>
                    <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
