import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Building, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleContinue = () => {
    if (selectedRole === "consultant") {
      navigate("/onboard/consultant");
    } else if (selectedRole === "organization") {
      navigate("/onboard/organization");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">VocConnect</span>
          </Link>
          
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Registration Form */}
      <section className="py-16 min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join VocConnect</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose how you'd like to get started
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Consultant Card */}
              <Card 
                className={`shadow-elevated cursor-pointer transition-all duration-300 ${
                  selectedRole === "consultant" 
                    ? "ring-2 ring-primary shadow-elevated" 
                    : "hover:shadow-card"
                }`}
                onClick={() => setSelectedRole("consultant")}
              >
                <CardHeader className="text-center">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">I'm a Consultant</CardTitle>
                  <CardDescription className="text-lg">
                    Find clients and grow your practice
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Create your professional profile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Get matched with relevant jobs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Secure messaging and payments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Build your reputation and portfolio</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Perfect for:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        Vocational Counselors
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        Job Coaches
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        Evaluators
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Organization Card */}
              <Card 
                className={`shadow-elevated cursor-pointer transition-all duration-300 ${
                  selectedRole === "organization" 
                    ? "ring-2 ring-primary shadow-elevated" 
                    : "hover:shadow-card"
                }`}
                onClick={() => setSelectedRole("organization")}
              >
                <CardHeader className="text-center">
                  <Building className="h-16 w-16 text-success mx-auto mb-4" />
                  <CardTitle className="text-2xl">I'm an Organization</CardTitle>
                  <CardDescription className="text-lg">
                    Find qualified consultants for your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Post jobs and requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>AI-powered consultant matching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Streamlined hiring process</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Project management tools</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Perfect for:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-success/10 text-success rounded-full text-xs">
                        Healthcare Systems
                      </span>
                      <span className="px-2 py-1 bg-success/10 text-success rounded-full text-xs">
                        Insurance Companies
                      </span>
                      <span className="px-2 py-1 bg-success/10 text-success rounded-full text-xs">
                        Employers
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Button */}
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="px-8"
                disabled={!selectedRole}
                onClick={handleContinue}
              >
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-primary rounded"></div>
              <span className="font-bold">VocConnect</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <Link to="/contact" className="hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
          
          <div className="border-t mt-6 pt-6 text-center text-muted-foreground">
            <p>&copy; 2024 VocConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;