import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, CheckCircle, Star, Building, UserCheck, Clock, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">VocConnect</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect Vocational <br />
            <span className="text-accent">Experts & Organizations</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            The premier marketplace connecting skilled vocational-industry consultants 
            with organizations that need their expertise. Get matched, collaborate securely, 
            and grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start as Consultant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Hire Consultants <Building className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose VocConnect?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're built specifically for the vocational industry, understanding 
              your unique needs and challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <UserCheck className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Verified Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">All consultants undergo thorough verification and background checks.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <Users className="h-8 w-8 text-success mb-2" />
                <CardTitle className="text-lg">AI Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Smart algorithms match you with the perfect consultant for your needs.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <Clock className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Fast Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Post jobs and get qualified applications within 24 hours.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Clear, upfront pricing with no hidden fees or surprises.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Professionals</h2>
            <p className="text-muted-foreground">See what our consultants and organizations are saying</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Vocational Rehabilitation Counselor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "VocConnect helped me find consistent, high-quality clients. The verification process 
                  gives organizations confidence in my credentials, leading to better opportunities."
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">TechCorp Industries</CardTitle>
                <CardDescription>Fortune 500 Manufacturing Company</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "We reduced our hiring time from weeks to days. The AI matching connected us 
                  with exactly the expertise we needed for our workplace safety program."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground">Flexible pricing for every need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="text-3xl font-bold mt-4">Free</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Basic profile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>5 job applications/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Basic messaging</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elevated border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-xl">Professional</CardTitle>
                <CardDescription>For active professionals</CardDescription>
                <div className="text-3xl font-bold mt-4">$49<span className="text-base font-normal">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Enhanced profile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Unlimited applications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Priority matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Advanced messaging</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-3xl font-bold mt-4">$199<span className="text-base font-normal">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Multiple team members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Unlimited job postings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Dedicated support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals already using VocConnect
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
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

export default Home;