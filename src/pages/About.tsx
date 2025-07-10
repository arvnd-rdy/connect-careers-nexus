import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Target, Heart } from "lucide-react";

const About = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About VocConnect</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We're building the future of vocational consulting by connecting skilled 
            professionals with organizations that need their expertise.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-card text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize access to vocational expertise and empower 
                  professionals to build thriving independent practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trust, transparency, and quality are at the heart of everything 
                  we do. We believe in fair compensation and mutual respect.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Our Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're building a supportive community where professionals 
                  can grow, learn, and succeed together.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Story */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                VocConnect was founded in 2024 by a team of vocational rehabilitation professionals 
                who experienced firsthand the challenges of connecting with quality clients and 
                finding trusted consultants.
              </p>
              <p>
                After years of relying on word-of-mouth referrals and struggling with traditional 
                hiring processes, we realized there had to be a better way. We set out to build 
                a platform that would make it easier for organizations to find qualified consultants 
                and for consultants to build sustainable practices.
              </p>
              <p>
                Today, VocConnect serves thousands of professionals and organizations across the 
                vocational industry, from rehabilitation counselors and job coaches to workplace 
                assessment specialists and vocational evaluators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Industry experts building the future of vocational consulting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <CardTitle>Dr. Sarah Chen</CardTitle>
                <CardDescription>Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  15+ years in vocational rehabilitation with a PhD in Rehabilitation Psychology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <CardTitle>Michael Rodriguez</CardTitle>
                <CardDescription>Co-Founder & CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Former tech executive with expertise in marketplace platforms and AI matching.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <CardTitle>Jennifer Williams</CardTitle>
                <CardDescription>Head of Community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certified Vocational Evaluator with a passion for building professional communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">
              We're located in the heart of downtown, always open to meeting with our community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Main Office</h3>
                    </div>
                    <address className="not-italic text-muted-foreground space-y-1">
                      <p>123 Professional Plaza</p>
                      <p>Suite 450</p>
                      <p>San Francisco, CA 94105</p>
                      <p>United States</p>
                    </address>
                    
                    <div className="mt-6">
                      <p className="text-sm text-muted-foreground">
                        <strong>Office Hours:</strong><br />
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted h-64 md:h-auto flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start building meaningful connections today
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started Now
            </Button>
          </Link>
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

export default About;