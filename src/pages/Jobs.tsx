import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, DollarSign, Filter, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  job_type: string;
  budget_min: number;
  budget_max: number;
  deadline: string;
  created_at: string;
  organization_id: string;
  profiles: {
    full_name: string;
  };
}

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [applicationModal, setApplicationModal] = useState<string | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [proposedRate, setProposedRate] = useState("");
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchJobs();
  }, [user, navigate]);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select(`
          *,
          profiles!jobs_organization_id_fkey(full_name)
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
      setFilteredJobs(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading jobs",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(job => 
        job.location?.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(job => job.job_type === typeFilter);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, locationFilter, typeFilter, jobs]);

  const handleApply = async (jobId: string) => {
    if (!user || !coverLetter) return;

    try {
      const { error } = await supabase
        .from('job_applications')
        .insert({
          job_id: jobId,
          consultant_id: user.id,
          cover_letter: coverLetter,
          proposed_rate: proposedRate ? parseFloat(proposedRate) : null,
        });

      if (error) throw error;

      toast({
        title: "Application submitted!",
        description: "Your application has been sent to the organization.",
      });

      setApplicationModal(null);
      setCoverLetter("");
      setProposedRate("");
    } catch (error: any) {
      toast({
        title: "Error submitting application",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">VocConnect</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-foreground hover:text-primary transition-colors">Find Jobs</Link>
            <Link to="/messages" className="text-foreground hover:text-primary transition-colors">Messages</Link>
            <Link to="/profile" className="text-foreground hover:text-primary transition-colors">My Profile</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Search Jobs</Label>
                  <Input
                    id="search"
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter location..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="type">Job Type</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setLocationFilter("");
                    setTypeFilter("");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Available Jobs</h1>
              <Badge variant="secondary">{filteredJobs.length} jobs found</Badge>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or check back later for new opportunities.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-card transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <CardDescription className="text-base">
                            Posted by {job.profiles?.full_name || "Unknown Organization"}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {job.job_type.replace('-', ' ')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        {job.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                        )}
                        
                        {(job.budget_min || job.budget_max) && (
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.budget_min && job.budget_max 
                              ? `$${job.budget_min} - $${job.budget_max}`
                              : job.budget_min 
                                ? `From $${job.budget_min}`
                                : `Up to $${job.budget_max}`
                            }
                          </div>
                        )}
                        
                        {job.deadline && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Deadline: {new Date(job.deadline).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Posted {new Date(job.created_at).toLocaleDateString()}
                        </span>
                        
                        <Dialog open={applicationModal === job.id} onOpenChange={(open) => setApplicationModal(open ? job.id : null)}>
                          <DialogTrigger asChild>
                            <Button>Apply Now</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Apply for {job.title}</DialogTitle>
                              <DialogDescription>
                                Submit your application for this position.
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="cover-letter">Cover Letter *</Label>
                                <Textarea
                                  id="cover-letter"
                                  placeholder="Tell the organization why you're the right fit for this job..."
                                  value={coverLetter}
                                  onChange={(e) => setCoverLetter(e.target.value)}
                                  rows={6}
                                />
                              </div>
                              
                              <div>
                                <Label htmlFor="rate">Proposed Rate (optional)</Label>
                                <Input
                                  id="rate"
                                  type="number"
                                  placeholder="Your hourly/project rate in USD"
                                  value={proposedRate}
                                  onChange={(e) => setProposedRate(e.target.value)}
                                />
                              </div>
                              
                              <div className="flex gap-2 pt-4">
                                <Button
                                  onClick={() => handleApply(job.id)}
                                  disabled={!coverLetter}
                                  className="flex-1"
                                >
                                  Submit Application
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setApplicationModal(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;