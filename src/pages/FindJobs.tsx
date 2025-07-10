
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, MapPin, Clock, DollarSign, Bookmark, Heart } from "lucide-react";

const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Vocational Rehabilitation Counselor",
      company: "TechCorp Inc.",
      location: "Toronto, ON",
      type: "Contract",
      duration: "3 months",
      budget: "$75-95/hour",
      description: "We are seeking an experienced vocational rehabilitation counselor to assist with workplace accommodation assessments...",
      skills: ["Vocational Assessment", "Case Management", "Report Writing"],
      posted: "2 days ago",
      applicants: 12,
      saved: false
    },
    {
      id: 2,
      title: "Workplace Training Specialist",
      company: "MedHealth Solutions",
      location: "Vancouver, BC",
      type: "Project",
      duration: "6 weeks",
      budget: "$8,000-12,000",
      description: "Looking for a specialist to develop and deliver workplace safety training programs for healthcare workers...",
      skills: ["Training Development", "Adult Education", "Safety Protocols"],
      posted: "1 week ago",
      applicants: 8,
      saved: true
    },
    {
      id: 3,
      title: "Job Coach for Return-to-Work Program",
      company: "Rehabilitation Services",
      location: "Calgary, AB",
      type: "Contract",
      duration: "6 months",
      budget: "$65-80/hour",
      description: "Support individuals returning to work after injury through personalized job coaching and skill development...",
      skills: ["Job Coaching", "Disability Support", "Career Development"],
      posted: "3 days ago",
      applicants: 15,
      saved: false
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.type.toLowerCase() === selectedCategory;
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <Card className="linkedin-card sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Job Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="search">Search Jobs</Label>
                  <Input
                    id="search"
                    placeholder="Job title, company, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="linkedin-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Job Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="linkedin-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                      <SelectItem value="permanent">Permanent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="linkedin-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Toronto">Toronto, ON</SelectItem>
                      <SelectItem value="Vancouver">Vancouver, BC</SelectItem>
                      <SelectItem value="Calgary">Calgary, AB</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Experience Level</Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Entry Level</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Mid Level</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Senior Level</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Find Jobs</h1>
              <p className="text-muted-foreground">
                {filteredJobs.length} jobs found {searchTerm && `for "${searchTerm}"`}
              </p>
            </div>
            
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="linkedin-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary hover:underline cursor-pointer">
                            {job.title}
                          </h3>
                          <Button variant="ghost" size="sm">
                            {job.saved ? (
                              <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                            ) : (
                              <Bookmark className="h-5 w-5" />
                            )}
                          </Button>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.duration}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.budget}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-primary/5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            Posted {job.posted} • {job.applicants} applicants
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Save Job
                            </Button>
                            <Button size="sm">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <Card className="linkedin-card">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    No jobs found matching your criteria. Try adjusting your filters.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
