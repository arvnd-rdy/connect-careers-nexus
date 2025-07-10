import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, MessageCircle, Mail } from "lucide-react";

const FAQ = () => {
  const categories = [
    { name: "All", count: 24 },
    { name: "Getting Started", count: 8 },
    { name: "Billing", count: 6 },
    { name: "Job Posting", count: 5 },
    { name: "Applications", count: 5 }
  ];

  const faqs = [
    {
      category: "Getting Started",
      question: "How do I create an account on VocConnect?",
      answer: "Creating an account is simple! Click 'Get Started' on our homepage, choose whether you're a consultant or organization, and follow the step-by-step onboarding process. You'll need to provide basic information and complete verification."
    },
    {
      category: "Getting Started",
      question: "What documents do I need for verification?",
      answer: "For consultants, you'll need a government-issued ID and relevant certifications or licenses. Organizations need business registration documents and may require additional compliance documentation depending on your industry."
    },
    {
      category: "Getting Started",
      question: "How long does the verification process take?",
      answer: "Most verifications are completed within 24-48 hours. Complex cases may take up to 5 business days. You'll receive email updates throughout the process."
    },
    {
      category: "Billing",
      question: "What are the fees for using VocConnect?",
      answer: "We offer flexible pricing plans starting with a free tier. Professional plans start at $49/month for consultants and $199/month for organizations. Enterprise plans are available with custom pricing."
    },
    {
      category: "Billing",
      question: "How do payments work between consultants and organizations?",
      answer: "Payments are processed securely through our platform. Organizations fund projects upfront, and consultants are paid upon milestone completion or project delivery, ensuring security for both parties."
    },
    {
      category: "Billing",
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged for the next cycle."
    },
    {
      category: "Job Posting",
      question: "How do I post a job as an organization?",
      answer: "After completing your organization profile, navigate to 'Post a Job' in your dashboard. Fill out the job details, requirements, budget, and timeline. Your job will be reviewed and published within 24 hours."
    },
    {
      category: "Job Posting",
      question: "How much should I budget for a project?",
      answer: "Project budgets vary widely based on scope and expertise required. Our platform provides market rate guidance based on similar projects. You can also request quotes from multiple consultants."
    },
    {
      category: "Job Posting",
      question: "Can I edit a job posting after it's published?",
      answer: "Yes, you can edit job postings at any time. However, if consultants have already applied, they'll be notified of significant changes to ensure transparency."
    },
    {
      category: "Applications",
      question: "How do I apply for jobs as a consultant?",
      answer: "Browse available jobs in your dashboard or receive AI-matched recommendations. Click 'Apply' on jobs that interest you, customize your proposal, and submit your application."
    },
    {
      category: "Applications",
      question: "How does the AI matching system work?",
      answer: "Our AI analyzes your skills, experience, preferences, and past performance to match you with relevant opportunities. It also considers organization preferences and project requirements."
    },
    {
      category: "Applications",
      question: "What happens after I submit an application?",
      answer: "Organizations review applications and may invite you for an interview or request additional information. You'll receive notifications about application status changes through the platform."
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Find answers to common questions about VocConnect
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search FAQs..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Filter */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                  <CardDescription>Filter by topic</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={category.name === "All" ? "default" : "outline"}
                      className="w-full justify-between"
                    >
                      {category.name}
                      <Badge variant="secondary">{category.count}</Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-card">
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center space-x-3 text-left">
                          <Badge variant="outline">{faq.category}</Badge>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Live Chat Support</CardTitle>
                <CardDescription>
                  Get instant help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Available Monday - Friday, 9 AM - 6 PM PST
                </p>
                <Button className="w-full">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <Mail className="h-8 w-8 text-success mb-2" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Send us a detailed message about your issue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We typically respond within 24 hours
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Resources</h2>
            <p className="text-muted-foreground">
              Helpful guides and tutorials to get you started
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Getting Started Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete walkthrough for new users
                </p>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tips for successful collaboration
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Step-by-step video guides
                </p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
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

export default FAQ;