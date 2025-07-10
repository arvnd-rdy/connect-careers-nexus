import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus, Edit, Trash, Upload, X } from "lucide-react";
import { useState } from "react";
import AddEducationModal from "@/components/modals/AddEducationModal";
import AddExperienceModal from "@/components/modals/AddExperienceModal";
import AddCertificationModal from "@/components/modals/AddCertificationModal";
import AddLicenseModal from "@/components/modals/AddLicenseModal";

const ConsultantOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 11;
  
  // Modal states
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showCertificationModal, setShowCertificationModal] = useState(false);
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  
  // Data states
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [certificationList, setCertificationList] = useState([]);
  const [licenseList, setLicenseList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  
  const progressPercentage = (currentStep / totalSteps) * 100;

  const skills = [
    "Vocational Assessment", "Career Counseling", "Job Coaching", "Workplace Training",
    "Disability Assessment", "Return-to-Work Planning", "Ergonomic Assessment",
    "Functional Capacity Evaluation", "Labor Market Analysis", "Case Management"
  ];

  const services = [
    "Vocational Rehabilitation", "Career Transition", "Workplace Accommodation",
    "Training & Development", "Assessment Services", "Counseling Services"
  ];

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
    setCurrentStep(9);
  };

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleServiceToggle = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Personal Details</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's start with your basic information
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" className="linkedin-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input id="middleName" placeholder="Optional" className="linkedin-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" className="linkedin-input" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="linkedin-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" className="linkedin-input" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="photo">Profile Photo</Label>
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
                <Label htmlFor="state">Province/State</Label>
                <Input id="state" placeholder="Enter your state/province" className="linkedin-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter your city" className="linkedin-input" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input id="address" placeholder="Enter your street address" className="linkedin-input" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input id="zip" placeholder="Enter your ZIP/postal code" className="linkedin-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Time Zone</Label>
                <Select>
                  <SelectTrigger className="linkedin-input">
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
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Tell us about your educational background
              </p>
            </div>
            
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Education History</h3>
                  <Button onClick={() => setShowEducationModal(true)} className="linkedin-button">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                </div>
                
                {educationList.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No education entries yet. Click "Add Education" to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {educationList.map((edu, index) => (
                      <Card key={index} className="p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <p className="text-muted-foreground">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">Graduated {edu.graduationYear}</p>
                            {edu.description && <p className="text-sm mt-2">{edu.description}</p>}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="sm"><Trash className="h-4 w-4" /></Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <AddEducationModal
              isOpen={showEducationModal}
              onClose={() => setShowEducationModal(false)}
              onSave={(education) => setEducationList([...educationList, education])}
            />
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Share your professional experience
              </p>
            </div>
            
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Work History</h3>
                  <Button onClick={() => setShowExperienceModal(true)} className="linkedin-button">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
                
                {experienceList.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No work experience entries yet. Click "Add Experience" to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {experienceList.map((exp, index) => (
                      <Card key={index} className="p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{exp.jobTitle}</h4>
                            <p className="text-muted-foreground">{exp.organization}</p>
                            <p className="text-sm text-muted-foreground">
                              {exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
                            </p>
                            {exp.responsibilities && (
                              <div className="mt-2">
                                <p className="text-sm whitespace-pre-line">{exp.responsibilities}</p>
                              </div>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="sm"><Trash className="h-4 w-4" /></Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <AddExperienceModal
              isOpen={showExperienceModal}
              onClose={() => setShowExperienceModal(false)}
              onSave={(experience) => setExperienceList([...experienceList, experience])}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Bio & Title</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Help clients understand who you are and what you do
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input id="title" placeholder="e.g. Rehabilitation Counselor" className="linkedin-input" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Professional Summary</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  placeholder="Write a 2-3 sentence elevator pitch about your expertise and approach..."
                  className="linkedin-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio & Samples</Label>
                <Card className="linkedin-card">
                  <CardContent className="p-8">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Upload portfolio files or add links</p>
                      <p className="text-sm text-muted-foreground">PDF, DOC, or provide URLs</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Skills & Services</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Select your primary skills and available services
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <Label className="text-lg font-medium mb-4 block">Primary Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className={`cursor-pointer p-2 ${
                        selectedSkills.includes(skill) 
                          ? "bg-primary text-white" 
                          : "hover:bg-primary/10"
                      }`}
                      onClick={() => handleSkillToggle(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-lg font-medium mb-4 block">Available Services</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([...selectedServices, service]);
                          } else {
                            setSelectedServices(selectedServices.filter(s => s !== service));
                          }
                        }}
                      />
                      <Label htmlFor={service}>{service}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Certifications</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Add your professional certifications
              </p>
            </div>
            
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <Button onClick={() => setShowCertificationModal(true)} className="linkedin-button">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Certification
                  </Button>
                </div>
                
                {certificationList.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No certifications added yet. Click "Add Certification" to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {certificationList.map((cert, index) => (
                      <Card key={index} className="p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{cert.name}</h4>
                            <p className="text-muted-foreground">{cert.issuingBody}</p>
                            <p className="text-sm text-muted-foreground">Year: {cert.yearObtained}</p>
                            {cert.credentialUrl && (
                              <a href={cert.credentialUrl} className="text-primary text-sm hover:underline">
                                View Credential
                              </a>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="sm"><Trash className="h-4 w-4" /></Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <AddCertificationModal
              isOpen={showCertificationModal}
              onClose={() => setShowCertificationModal(false)}
              onSave={(certification) => setCertificationList([...certificationList, certification])}
            />
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Licenses</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Add your professional licenses
              </p>
            </div>
            
            <Card className="linkedin-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Professional Licenses</h3>
                  <Button onClick={() => setShowLicenseModal(true)} className="linkedin-button">
                    <Plus className="h-4 w-4 mr-2" />
                    Add License
                  </Button>
                </div>
                
                {licenseList.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No licenses added yet. Click "Add License" to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {licenseList.map((license, index) => (
                      <Card key={index} className="p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{license.name}</h4>
                            <p className="text-muted-foreground">{license.issuingBody}</p>
                            <p className="text-sm text-muted-foreground">License #: {license.licenseNumber}</p>
                            <p className="text-sm text-muted-foreground">Expires: {license.expiryDate}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="sm"><Trash className="h-4 w-4" /></Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <AddLicenseModal
              isOpen={showLicenseModal}
              onClose={() => setShowLicenseModal(false)}
              onSave={(license) => setLicenseList([...licenseList, license])}
            />
          </div>
        );

      case 8:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Preferences & Pricing</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Set your work preferences and pricing structure
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-medium">Preferred Work Type</Label>
                <RadioGroup defaultValue="">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="freelance" id="freelance" />
                    <Label htmlFor="freelance">Freelance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="contract" id="contract" />
                    <Label htmlFor="contract">Contract</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fulltime" id="fulltime" />
                    <Label htmlFor="fulltime">Full-time</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-medium">Preferred Work Mode</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remote" />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="inperson" />
                    <Label htmlFor="inperson">In-Person</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nopreference" />
                    <Label htmlFor="nopreference">No Preference</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-medium">Pricing Structure</Label>
                <Card className="linkedin-card">
                  <CardContent className="p-6 space-y-4">
                    <RadioGroup defaultValue="">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hourly" id="hourly" />
                          <Label htmlFor="hourly">Hourly Rate</Label>
                        </div>
                        <div className="ml-6 grid grid-cols-2 gap-4">
                          <Input placeholder="Min rate" className="linkedin-input" />
                          <Input placeholder="Max rate" className="linkedin-input" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="project" id="project" />
                          <Label htmlFor="project">Per-Project Range</Label>
                        </div>
                        <div className="ml-6 grid grid-cols-2 gap-4">
                          <Input placeholder="Min project fee" className="linkedin-input" />
                          <Input placeholder="Max project fee" className="linkedin-input" />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="retainer" id="retainer" />
                          <Label htmlFor="retainer">Monthly Retainer</Label>
                        </div>
                        <div className="ml-6">
                          <Input placeholder="Monthly retainer fee" className="linkedin-input" />
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
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
            
            {currentStep < 9 && (
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

export default ConsultantOnboarding;
