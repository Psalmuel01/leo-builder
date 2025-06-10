
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Coins, 
  Image, 
  Activity, 
  Zap, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Plus
} from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Build on <span className="gradient-text">Aleo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create tokens and NFTs with zero-knowledge technology. 
              No coding required, maximum privacy guaranteed.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-aleo-gold to-zk-teal text-black font-semibold hover:opacity-90 transition-all duration-200 zk-glow"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Token
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-aleo-gold/50 hover:bg-aleo-gold/10"
            >
              <Image className="h-5 w-5 mr-2" />
              Mint NFT
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-aleo-gold/20 rounded-lg">
                  <Coins className="h-6 w-6 text-aleo-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-muted-foreground">Tokens Created</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zk-teal/20 rounded-lg">
                  <Image className="h-6 w-6 text-zk-teal" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3,456</p>
                  <p className="text-sm text-muted-foreground">NFTs Minted</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-crypto-purple/20 rounded-lg">
                  <Shield className="h-6 w-6 text-crypto-purple" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Privacy Protected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-aleo-gold" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Start building your next ZK application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="ghost" 
                className="w-full justify-between p-4 h-auto hover:bg-secondary/50"
              >
                <div className="flex items-center space-x-3">
                  <Coins className="h-5 w-5 text-aleo-gold" />
                  <div className="text-left">
                    <p className="font-medium">Create Token</p>
                    <p className="text-sm text-muted-foreground">Deploy your custom token</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button 
                variant="ghost" 
                className="w-full justify-between p-4 h-auto hover:bg-secondary/50"
              >
                <div className="flex items-center space-x-3">
                  <Image className="h-5 w-5 text-zk-teal" />
                  <div className="text-left">
                    <p className="font-medium">Mint NFT</p>
                    <p className="text-sm text-muted-foreground">Create unique digital assets</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button 
                variant="ghost" 
                className="w-full justify-between p-4 h-auto hover:bg-secondary/50"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-crypto-purple" />
                  <div className="text-left">
                    <p className="font-medium">Generate Proof</p>
                    <p className="text-sm text-muted-foreground">Create zero-knowledge proofs</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-zk-teal" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Your latest transactions and deployments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
                  <div className="w-2 h-2 bg-aleo-gold rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Token "ZKGOLD" deployed</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
                  <div className="w-2 h-2 bg-zk-teal rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">NFT collection minted</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30">
                  <div className="w-2 h-2 bg-crypto-purple rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Proof generated successfully</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gas Estimator */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-aleo-gold" />
              <span>Network Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Network Load</span>
                  <span>42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Gas Price</span>
                  <span>0.0001 ALEO</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Block Time</span>
                  <span>~12s</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
