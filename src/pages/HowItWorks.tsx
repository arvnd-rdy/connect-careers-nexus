import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, UserPlus, Search, MessageSquare, CheckCircle, Building, Users, ArrowRight } from "lucide-react";

const HowItWorks = () => {
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How VocConnect Works</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Simple steps to connect, collaborate, and succeed in the vocational industry
          </p>
        </div>
      </section>

      {/* For Consultants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">For Consultants</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build your practice and connect with organizations that need your expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">1. Create Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build a comprehensive profile showcasing your skills, experience, and certifications
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle className="text-lg">2. Get Verified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete our verification process to build trust with potential clients
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">3. Find Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse job postings or get matched with organizations through our AI system
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">4. Connect & Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Communicate securely with clients and deliver exceptional service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Organizations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">For Organizations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find qualified consultants quickly and manage your hiring process efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">1. Set Up Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create your organization profile and complete business verification
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle className="text-lg">2. Post Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Define your requirements and post detailed job descriptions
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">3. Review Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse qualified candidates or let our AI suggest the best matches
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">4. Hire & Manage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interview, hire, and manage your consultants through our platform
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose VocConnect?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built specifically for the vocational industry with features that matter
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">For Consultants</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Verified Opportunities:</strong> All organizations undergo business verification
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Fair Compensation:</strong> Transparent pricing with secure payment processing
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Professional Growth:</strong> Build your reputation and expand your network
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Flexible Schedule:</strong> Work on your terms with multiple engagement types
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">For Organizations</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Quality Talent:</strong> Access to verified, experienced professionals
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Fast Hiring:</strong> AI-powered matching reduces time-to-hire
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Streamlined Process:</strong> Manage everything from posting to payment
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <strong>Risk Mitigation:</strong> Background checks and NDA management
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Link to="/register">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-white">Join as Consultant</CardTitle>
                  <CardDescription className="text-white/80">
                    Start building your practice today
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Sign Up as Consultant <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/register">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <CardHeader>
                  <Building className="h-8 w-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-white">Join as Organization</CardTitle>
                  <CardDescription className="text-white/80">
                    Find the talent you need
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Sign Up as Organization <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-primary rounded"></div>
                <span className="font-bold">VocConnect</span>
              </div>
              <p className="text-muted-foreground">
                Connecting vocational experts with organizations worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VocConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;