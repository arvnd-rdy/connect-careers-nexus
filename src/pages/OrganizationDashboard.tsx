import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Bell, MessageSquare, Building, Settings, Search, Plus, Users, Briefcase, DollarSign, TrendingUp } from "lucide-react";

const OrganizationDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">VocConnect</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="search" 
                  placeholder="Search consultants..."
                  className="pl-10 pr-4 py-2 border border-input rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <MessageSquare className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-xs"></span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
                <span className="font-medium">TechCorp</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            <Link to="/dashboard/organization" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-primary text-primary-foreground">
              <Building className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Building className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Search className="h-4 w-4" />
              <span>Find Consultants</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Plus className="h-4 w-4" />
              <span>Post a Job</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Briefcase className="h-4 w-4" />
              <span>Manage Jobs</span>
              <Badge className="ml-auto">5</Badge>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Messages</span>
              <Badge className="ml-auto">7</Badge>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>Subscription Plan</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Welcome Header */}
            <div>
              <h1 className="text-3xl font-bold">Welcome back, TechCorp! 🏢</h1>
              <p className="text-muted-foreground">Here's an overview of your hiring activity and consultant engagements.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Job Postings</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">
                    2 closing this week
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Applications</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    +4 since yesterday
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hires This Month</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    Both started this week
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Spend This Month</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,400</div>
                  <p className="text-xs text-muted-foreground">
                    Within budget
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks to manage your hiring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Post a Job
                  </Button>
                  <Button variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Find Consultants
                  </Button>
                  <Button variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    View Applications
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates on your job postings and applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Sarah Chen applied to "Workplace Training Specialist"</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Interview completed with Michael Rodriguez</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New job posting "Vocational Evaluator" published</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Jennifer Williams started her contract</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Performance */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Active Job Postings</CardTitle>
                  <CardDescription>Performance of your current job listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Workplace Training Specialist</h4>
                        <Badge variant="secondary">8 Applications</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Posted 5 days ago • Remote</p>
                      <p className="text-sm mb-3">$65-80/hour • Intermediate level</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Closing in 9 days</span>
                        <Button size="sm" variant="outline">View Applications</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Vocational Evaluator</h4>
                        <Badge>3 Applications</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Posted 2 days ago • Hybrid</p>
                      <p className="text-sm mb-3">$4,500 project • Advanced level</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Closing in 12 days</span>
                        <Button size="sm" variant="outline">View Applications</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Manage All Jobs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrganizationDashboard;