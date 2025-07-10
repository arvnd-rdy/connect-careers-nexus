import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Bell, MessageSquare, User, Settings, Search, Star, DollarSign, Briefcase, TrendingUp } from "lucide-react";

const ConsultantDashboard = () => {
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
                  placeholder="Search jobs..."
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
                <span className="font-medium">Sarah Chen</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            <Link to="/dashboard/consultant" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-primary text-primary-foreground">
              <Briefcase className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Search className="h-4 w-4" />
              <span>Find Jobs</span>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Briefcase className="h-4 w-4" />
              <span>My Jobs</span>
              <Badge className="ml-auto">3</Badge>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Messages</span>
              <Badge className="ml-auto">2</Badge>
            </Link>
            
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <Star className="h-4 w-4" />
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
              <h1 className="text-3xl font-bold">Welcome back, Sarah! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening with your consultant practice today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last week
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    This week
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,250</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get things done faster</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Browse New Jobs
                  </Button>
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" />
                    Update Profile
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Check Messages
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest updates and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New job match: Workplace Assessment Specialist</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Application accepted by TechCorp Industries</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Interview scheduled with HealthSystem Partners</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Profile viewed by 8 organizations</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Jobs */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recommended for You</CardTitle>
                  <CardDescription>Jobs matching your skills and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Vocational Rehabilitation Specialist</h4>
                        <Badge variant="secondary">New</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Regional Medical Center</p>
                      <p className="text-sm mb-3">Conduct comprehensive vocational assessments for injured workers...</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-success">$75-85/hour</span>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">Job Coach - Manufacturing</h4>
                        <Badge>Urgent</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Industrial Solutions Inc.</p>
                      <p className="text-sm mb-3">Support employees with disabilities in a manufacturing environment...</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-success">$3,500 project</span>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All Recommendations
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

export default ConsultantDashboard;