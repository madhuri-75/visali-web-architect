
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Contact Information</h2>
        </div>
        
        <div className="flex justify-center">
          <Card className="bg-card/50 border-primary/10 shadow-lg w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Reach Out To Me</CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">madhuriperumalla9@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">97383920200</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="#" 
                      className="font-medium hover:text-primary transition-colors"
                    >
                      Madhuri's LinkedIn
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  I'm currently open to new opportunities and collaborations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
