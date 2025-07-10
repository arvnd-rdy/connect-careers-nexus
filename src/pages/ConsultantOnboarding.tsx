import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";

const ConsultantOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 11;
  
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard/consultant");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    // Skip to review step
    setCurrentStep(9);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
              <p className="text-muted-foreground mb-6">
                Let's start with your basic information
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="photo">Profile Photo</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <p className="text-muted-foreground">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 5MB</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state">Province/State</Label>
                <Input id="state" placeholder="Enter your state/province" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter your city" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input id="address" placeholder="Enter your street address" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input id="zip" placeholder="Enter your ZIP/postal code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Time Zone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Standard Time</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time</SelectItem>
                    <SelectItem value="cst">Central Standard Time</SelectItem>
                    <SelectItem value="est">Eastern Standard Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground mb-6">
                Tell us about your educational background
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Education History</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                </div>
                
                <div className="text-center py-8 text-muted-foreground">
                  <p>No education entries yet. Click "Add Education" to get started.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <p className="text-muted-foreground mb-6">
                Share your professional experience
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Work History</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
                
                <div className="text-center py-8 text-muted-foreground">
                  <p>No work experience entries yet. Click "Add Experience" to get started.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Professional Bio & Title</h2>
              <p className="text-muted-foreground mb-6">
                Help clients understand who you are and what you do
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input id="title" placeholder="e.g. Rehabilitation Counselor" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Professional Summary</Label>
              <Textarea 
                id="bio" 
                rows={4}
                placeholder="Write a 2-3 sentence elevator pitch about your expertise and approach..."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio & Samples</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <p className="text-muted-foreground">Upload portfolio files or add links</p>
                <p className="text-sm text-muted-foreground">PDF, DOC, or provide URLs</p>
              </div>
            </div>
          </div>
        );
      
      case 9:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Review & Save Draft</h2>
              <p className="text-muted-foreground mb-6">
                Review your profile information before proceeding
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Personal Details</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Your basic information and contact details</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Education & Experience</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Your educational background and work history</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Professional Profile</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Your professional bio, skills, and certifications</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-medium mb-4">Everything look good?</p>
              <p className="text-muted-foreground">
                You can always come back and edit your profile later.
              </p>
            </div>
          </div>
        );
      
      case 10:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Verification</h2>
              <p className="text-muted-foreground mb-6">
                Complete identity verification to build trust with clients
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Verification in Progress</h3>
                <p className="text-muted-foreground mb-4">
                  Please wait while we verify your identity. This usually takes 2-3 minutes.
                </p>
                <div className="text-sm text-muted-foreground">
                  Status: <span className="text-accent font-medium">Processing...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 11:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Complete Registration</h2>
              <p className="text-muted-foreground mb-6">
                You're almost done! Just accept our terms to complete your profile.
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" />
                  <div>
                    <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                      I have read and agree to the{" "}
                      <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">🎉 Congratulations!</h3>
              <p className="text-muted-foreground">
                Your consultant profile is ready to go live.
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Step {currentStep}</h2>
              <p className="text-muted-foreground mb-6">
                This step is under construction. Content will be added soon.
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  Step {currentStep} content coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/register" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">VocConnect</span>
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </p>
              <Progress value={progressPercentage} className="w-32" />
            </div>
            
            <div className="w-32"> {/* Spacer for centering */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {renderStep()}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t bg-card py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            {currentStep < 9 && (
              <Button 
                variant="ghost" 
                onClick={handleSkip}
                className="text-muted-foreground"
              >
                Skip for Now
              </Button>
            )}
            
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? "Complete My Profile" : "Save & Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultantOnboarding;