
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Edit, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Star,
  Award,
  GraduationCap,
  Briefcase,
  Settings
} from "lucide-react";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="linkedin-card mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold">Dr. Jane Smith</h1>
                      <p className="text-xl text-muted-foreground">
                        Certified Rehabilitation Counselor (CRC)
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(!isEditing)}
                      className="linkedin-button"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? "Save Changes" : "Edit Profile"}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Toronto, Ontario, Canada
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      jane.smith@email.com
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      +1 (416) 555-0123
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary text-white">
                      <Star className="h-3 w-3 mr-1" />
                      4.9 Rating
                    </Badge>
                    <Badge variant="outline">95% Job Success</Badge>
                    <Badge variant="outline">127 Projects Completed</Badge>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Experienced vocational rehabilitation counselor with over 10 years of expertise in 
                    workplace assessments, return-to-work programs, and disability management. 
                    Passionate about helping individuals achieve their career goals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>About</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea 
                      rows={6}
                      defaultValue="Experienced vocational rehabilitation counselor with over 10 years of expertise in workplace assessments, return-to-work programs, and disability management. I specialize in helping individuals with disabilities transition back to meaningful employment through comprehensive vocational evaluations, job coaching, and workplace accommodation strategies."
                      className="linkedin-input"
                    />
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      Experienced vocational rehabilitation counselor with over 10 years of expertise in 
                      workplace assessments, return-to-work programs, and disability management. I specialize 
                      in helping individuals with disabilities transition back to meaningful employment through 
                      comprehensive vocational evaluations, job coaching, and workplace accommodation strategies.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Experience Section */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Experience
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Senior Rehabilitation Counselor</h4>
                    <p className="text-muted-foreground">Rehabilitation Services Inc.</p>
                    <p className="text-sm text-muted-foreground">2018 - Present • 6 years</p>
                    <p className="text-sm mt-2">
                      Lead vocational assessments and return-to-work programs for over 200 clients annually. 
                      Developed innovative assessment protocols that improved client outcomes by 35%.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-gray-300 pl-4">
                    <h4 className="font-semibold">Vocational Counselor</h4>
                    <p className="text-muted-foreground">WorkPlace Solutions</p>
                    <p className="text-sm text-muted-foreground">2015 - 2018 • 3 years</p>
                    <p className="text-sm mt-2">
                      Provided vocational counseling and job placement services for individuals with disabilities. 
                      Maintained 90% successful job placement rate.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Education Section */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Master of Science in Rehabilitation Counseling</h4>
                    <p className="text-muted-foreground">University of Toronto</p>
                    <p className="text-sm text-muted-foreground">2013 - 2015</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Bachelor of Arts in Psychology</h4>
                    <p className="text-muted-foreground">York University</p>
                    <p className="text-sm text-muted-foreground">2009 - 2013</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Skills</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Vocational Assessment",
                      "Case Management", 
                      "Job Coaching",
                      "Disability Support",
                      "Report Writing",
                      "Career Counseling",
                      "Workplace Training",
                      "Ergonomic Assessment"
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Certifications
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Certified Rehabilitation Counselor (CRC)</h4>
                    <p className="text-xs text-muted-foreground">CRCC • 2015</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Certified Case Manager (CCM)</h4>
                    <p className="text-xs text-muted-foreground">CCMC • 2017</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Certified Disability Management Specialist</h4>
                    <p className="text-xs text-muted-foreground">CDMS • 2019</p>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Status:</span>
                    <Badge className="bg-green-100 text-green-800">Available</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Rate:</span>
                    <span className="text-sm font-medium">$85-120/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Response Time:</span>
                    <span className="text-sm">Usually within 2 hours</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="linkedin-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Public Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
