
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Dashboard } from "@/components/Dashboard";
import { TokenWizard } from "@/components/TokenWizard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Coins, 
  Image, 
  Activity, 
  FileText, 
  Settings,
  BookOpen,
  Users,
  Sparkles,
  Shield
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aleo-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zk-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-crypto-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-secondary/50 backdrop-blur">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="tokens" className="flex items-center space-x-2">
                <Coins className="h-4 w-4" />
                <span className="hidden sm:inline">Tokens</span>
              </TabsTrigger>
              <TabsTrigger value="nfts" className="flex items-center space-x-2">
                <Image className="h-4 w-4" />
                <span className="hidden sm:inline">NFTs</span>
              </TabsTrigger>
              <TabsTrigger value="assets" className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Assets</span>
              </TabsTrigger>
              <TabsTrigger value="guides" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Guides</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="m-0">
            <Dashboard />
          </TabsContent>

          <TabsContent value="tokens" className="m-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Token Creation</h2>
                <p className="text-muted-foreground">
                  Create your own tokens on Aleo with zero-knowledge privacy
                </p>
              </div>
              <TokenWizard />
            </div>
          </TabsContent>

          <TabsContent value="nfts" className="m-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center space-y-6 py-20">
                <div className="space-y-4">
                  <Image className="h-16 w-16 mx-auto text-zk-teal animate-pulse-glow" />
                  <h2 className="text-3xl font-bold">NFT Minting</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Create unique digital assets with privacy-preserving technology. 
                    Coming soon with advanced metadata encryption.
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zk-teal to-crypto-purple text-white font-semibold"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Join Waitlist
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assets" className="m-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center space-y-6 py-20">
                <div className="space-y-4">
                  <Activity className="h-16 w-16 mx-auto text-aleo-gold animate-pulse-glow" />
                  <h2 className="text-3xl font-bold">Asset Manager</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Manage all your tokens, NFTs, and proofs in one secure dashboard. 
                    Track performance with zero-knowledge analytics.
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-aleo-gold to-zk-teal text-black font-semibold"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  View Assets
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="guides" className="m-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Guides & Resources</h2>
                  <p className="text-muted-foreground">
                    Learn how to build privacy-preserving applications on Aleo
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="glass-card border-0 hover:scale-105 transition-transform">
                    <CardHeader>
                      <BookOpen className="h-8 w-8 text-aleo-gold mb-2" />
                      <CardTitle>Getting Started</CardTitle>
                      <CardDescription>
                        Learn the basics of zero-knowledge development
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full">Read Guide</Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-0 hover:scale-105 transition-transform">
                    <CardHeader>
                      <Coins className="h-8 w-8 text-zk-teal mb-2" />
                      <CardTitle>Token Standards</CardTitle>
                      <CardDescription>
                        Understand Aleo token implementation patterns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full">Read Guide</Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-0 hover:scale-105 transition-transform">
                    <CardHeader>
                      <Users className="h-8 w-8 text-crypto-purple mb-2" />
                      <CardTitle>Community</CardTitle>
                      <CardDescription>
                        Join the LeoBuilder developer community
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full">Join Discord</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="m-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Settings</h2>
                  <p className="text-muted-foreground">
                    Customize your LeoBuilder experience
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="glass-card border-0">
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Manage your profile and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Two-Factor Authentication</span>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-0">
                    <CardHeader>
                      <CardTitle>Developer Settings</CardTitle>
                      <CardDescription>
                        Configure your development environment
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Default Network</span>
                        <Button variant="outline" size="sm">Testnet</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Gas Price Setting</span>
                        <Button variant="outline" size="sm">Auto</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
