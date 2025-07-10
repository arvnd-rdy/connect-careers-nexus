import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus, Edit, Upload } from "lucide-react";
import { useState } from "react";
import AddContactModal from "@/components/modals/AddContactModal";

const OrganizationOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 7;
  
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactList, setContactList] = useState([]);
  
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard/organization");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(5);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Basic Company Information</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Tell us about your organization
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" placeholder="Enter your organization name" className="linkedin-input" />
              </div>
              
              <div className="space-y-4">
                <Label className="text-lg font-medium">Company Size</Label>
                <RadioGroup defaultValue="" className="grid grid-cols-3 gap-4">
                  <Card className="linkedin-card cursor-pointer hover:border-primary">
                    <CardContent className="p-4 text-center">
                      <RadioGroupItem value="small" id="small" className="mb-2" />
                      <Label htmlFor="small" className="cursor-pointer">
                        <div className="font-medium">Small</div>
                        <div className="text-sm text-muted-foreground">1-50 employees</div>
                      </Label>
                    </CardContent>
                  </Card>
                  <Card className="linkedin-card cursor-pointer hover:border-primary">
                    <CardContent className="p-4 text-center">
                      <RadioGroupItem value="medium" id="medium" className="mb-2" />
                      <Label htmlFor="medium" className="cursor-pointer">
                        <div className="font-medium">Medium</div>
                        <div className="text-sm text-muted-foreground">51-500 employees</div>
                      </Label>
                    </CardContent>
                  </Card>
                  <Card className="linkedin-card cursor-pointer hover:border-primary">
                    <CardContent className="p-4 text-center">
                      <RadioGroupItem value="large" id="large" className="mb-2" />
                      <Label htmlFor="large" className="cursor-pointer">
                        <div className="font-medium">Large</div>
                        <div className="text-sm text-muted-foreground">501+ employees</div>
                      </Label>
                    </CardContent>
                  </Card>
                </RadioGroup>
              </div>
              
              <div className="space-y-4">
                <Label className="text-lg font-medium">Industry Sectors</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="healthcare" />
                    <Label htmlFor="healthcare">Healthcare</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="insurance" />
                    <Label htmlFor="insurance">Insurance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="manufacturing" />
                    <Label htmlFor="manufacturing">Manufacturing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="education" />
                    <Label htmlFor="education">Education</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="government" />
                    <Label htmlFor="government">Government</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nonprofit" />
                    <Label htmlFor="nonprofit">Non-profit</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" type="url" placeholder="https://yourcompany.com" className="linkedin-input" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="logo">Upload Logo</Label>
                <Card className="linkedin-card">
                  <CardContent className="p-8">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">PNG, JPG up to 5MB</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger className="linkedin-input">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="Enter state/province" className="linkedin-input" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter city" className="linkedin-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP/Postal Code</Label>
                  <Input id="zip" placeholder="Enter ZIP/postal code" className="linkedin-input" />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact & Key Personnel</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Add key contacts for your organization
              </p>
            </div>
            
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Contacts</h3>
                  <Button onClick={() => setShowContactModal(true)} className="linkedin-button">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </div>
                
                {contactList.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No contacts added yet. Click "Add Contact" to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contactList.map((contact, index) => (
                      <Card key={index} className="p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{contact.firstName} {contact.lastName}</h4>
                            <p className="text-muted-foreground">{contact.jobTitle}</p>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            <p className="text-sm text-muted-foreground">{contact.phone}</p>
                            <p className="text-xs text-muted-foreground">Prefers: {contact.preferredMethod}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <AddContactModal
              isOpen={showContactModal}
              onClose={() => setShowContactModal(false)}
              onSave={(contact) => setContactList([...contactList, contact])}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Post Your First Job</h2>
              <p className="text-muted-foreground mb-6">
                Let's create your first job posting to attract consultants
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" placeholder="e.g. Workplace Injury Assessment Specialist" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobCategory">Job Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="assessment">Vocational Assessment</SelectItem>
                  <SelectItem value="counseling">Vocational Counseling</SelectItem>
                  <SelectItem value="coaching">Job Coaching</SelectItem>
                  <SelectItem value="training">Workplace Training</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea 
                id="jobDescription" 
                rows={6}
                placeholder="Describe the role, responsibilities, and requirements..."
              />
            </div>
            
            <div className="space-y-2">
              <Label>Required Skills</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="assessment-skills" />
                  <Label htmlFor="assessment-skills">Vocational Assessment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="counseling-skills" />
                  <Label htmlFor="counseling-skills">Career Counseling</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="case-management" />
                  <Label htmlFor="case-management">Case Management</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="report-writing" />
                  <Label htmlFor="report-writing">Report Writing</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Expertise Level Required</Label>
              <RadioGroup defaultValue="" className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Advanced</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Service & Collaboration Defaults</h2>
              <p className="text-muted-foreground mb-6">
                Set default preferences for working with consultants
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Default Work Mode</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remote" />
                  <Label htmlFor="remote">Remote</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="onsite" />
                  <Label htmlFor="onsite">On-site</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hybrid" />
                  <Label htmlFor="hybrid">Hybrid</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="defaultExpertise">Default Expertise Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select default level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Default Engagement Durations</Label>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="onetime" />
                  <Label htmlFor="onetime">One-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="shortterm" />
                  <Label htmlFor="shortterm">Short-term</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="longterm" />
                  <Label htmlFor="longterm">Long-term</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interviewFormat">Interview Format</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select interview format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chat">Chat/Messaging</SelectItem>
                  <SelectItem value="video">Video Call</SelectItem>
                  <SelectItem value="inperson">In-person</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Review & Save Draft</h2>
              <p className="text-muted-foreground mb-6">
                Review your organization profile before proceeding
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Company Information</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Organization details, logo, and office location</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Contacts</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Key personnel and contact information</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">First Job</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Job posting details and requirements</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Defaults</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Default collaboration and hiring preferences</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Business Verification</h2>
              <p className="text-muted-foreground mb-6">
                Complete business verification to build trust with consultants
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-success rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Verification Passed</h3>
                <p className="text-muted-foreground mb-4">
                  Your business verification has been completed successfully.
                </p>
                <div className="text-sm text-muted-foreground">
                  Status: <span className="text-success font-medium">Verified ✓</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Complete Registration</h2>
              <p className="text-muted-foreground mb-6">
                You're all set! Just accept our terms to complete your organization profile.
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
              <h3 className="text-lg font-semibold mb-2">🎉 Welcome to VocConnect!</h3>
              <p className="text-muted-foreground">
                Your organization profile is ready and your first job will be published shortly.
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
            
            <Card className="linkedin-card">
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
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/register" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold text-primary">VocConnect</span>
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Step {currentStep} of {totalSteps}
              </p>
              <Progress value={progressPercentage} className="w-40 h-2" />
            </div>
            
            <div className="w-40"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {renderStep()}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t bg-card py-6 sticky bottom-0">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={currentStep === 1}
              className="linkedin-button"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            {currentStep < 5 && (
              <Button 
                variant="ghost" 
                onClick={handleSkip}
                className="text-muted-foreground hover:text-foreground"
              >
                Skip for Now
              </Button>
            )}
            
            <Button onClick={handleNext} className="linkedin-button">
              {currentStep === totalSteps ? "Complete My Profile" : "Save & Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrganizationOnboarding;
