
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Briefcase, 
  Shield, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Building,
  GraduationCap,
  Heart,
  MessageSquare
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold text-primary">VocConnect</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/faq" className="text-foreground hover:text-primary transition-colors">Help</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="rounded-full">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="rounded-full bg-primary hover:bg-primary/90">Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Connect with top
                <span className="text-primary block">vocational experts</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The leading marketplace connecting organizations with certified vocational rehabilitation professionals. 
                Find the right expertise for workplace assessments, counseling, and training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="rounded-full px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="linkedin-card">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Certified Consultants</h3>
                    <p className="text-sm text-muted-foreground">Vetted professionals ready to help</p>
                  </CardContent>
                </Card>
                <Card className="linkedin-card mt-8">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Secure Platform</h3>
                    <p className="text-sm text-muted-foreground">Protected and compliant</p>
                  </CardContent>
                </Card>
                <Card className="linkedin-card -mt-4">
                  <CardContent className="p-6">
                    <Briefcase className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Quality Work</h3>
                    <p className="text-sm text-muted-foreground">Professional results</p>
                  </CardContent>
                </Card>
                <Card className="linkedin-card mt-4">
                  <CardContent className="p-6">
                    <Star className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Top Rated</h3>
                    <p className="text-sm text-muted-foreground">Highest satisfaction</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why VocConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between organizations needing vocational expertise and qualified professionals ready to deliver results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="linkedin-card text-center">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Verified Professionals</h3>
                <p className="text-muted-foreground">
                  All consultants undergo rigorous verification including credential checks and background screening.
                </p>
              </CardContent>
            </Card>
            
            <Card className="linkedin-card text-center">
              <CardContent className="p-8">
                <MessageSquare className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Seamless Communication</h3>
                <p className="text-muted-foreground">
                  Built-in messaging, video calls, and project management tools keep everyone connected.
                </p>
              </CardContent>
            </Card>
            
            <Card className="linkedin-card text-center">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Success Guarantee</h3>
                <p className="text-muted-foreground">
                  Our quality assurance program ensures successful outcomes for every engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Users Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">HR Director, TechCorp</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "VocConnect helped us find the perfect consultant for our workplace accommodation program. 
                  The quality of professionals and ease of use is outstanding."
                </p>
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Vocational Rehabilitation Counselor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a consultant, VocConnect has opened doors to meaningful projects with organizations 
                  that truly value professional expertise. The platform is intuitive and professional."
                </p>
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground">
              Flexible pricing for organizations of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="linkedin-card">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small organizations</CardDescription>
                <div className="text-3xl font-bold">$99<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Up to 3 active job postings</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Basic messaging</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Standard support</li>
                </ul>
                <Button className="w-full mt-6 rounded-full">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="linkedin-card border-primary relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Best for growing organizations</CardDescription>
                <div className="text-3xl font-bold">$299<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Unlimited job postings</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Advanced messaging & video calls</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Priority support</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Analytics & reporting</li>
                </ul>
                <Button className="w-full mt-6 rounded-full">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="linkedin-card">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-3xl font-bold">Custom</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Everything in Professional</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Custom integrations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Dedicated account manager</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Custom contracts & SLAs</li>
                </ul>
                <Button variant="outline" className="w-full mt-6 rounded-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals and organizations already using VocConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Join as Consultant
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-primary">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold">VocConnect</span>
              </div>
              <p className="text-muted-foreground">
                Connecting vocational professionals with organizations that need their expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VocConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
