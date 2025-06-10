
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  ChevronLeft, 
  Code, 
  Coins, 
  Settings,
  CheckCircle,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Basic Info", icon: Info },
  { id: 2, title: "Token Settings", icon: Settings },
  { id: 3, title: "Code Preview", icon: Code },
  { id: 4, title: "Deploy", icon: Coins },
];

export const TokenWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tokenData, setTokenData] = useState({
    name: "",
    symbol: "",
    description: "",
    totalSupply: "",
    decimals: "6",
    mintable: true,
    burnable: false,
  });
  const { toast } = useToast();

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const deployToken = () => {
    toast({
      title: "Token Deployed!",
      description: `${tokenData.symbol} has been successfully deployed to Aleo`,
    });
  };

  const generateLeoCode = () => {
    return `program ${tokenData.symbol?.toLowerCase() || 'token'}_token.aleo;

struct TokenInfo:
    name as field;
    symbol as field;
    decimals as u8;
    total_supply as u64;

record Token:
    owner as address.private;
    amount as u64.private;

function mint:
    input r0 as address.private;
    input r1 as u64.private;
    cast r0 r1 into r2 as Token.record;
    output r2 as Token.record;

function transfer:
    input r0 as Token.record;
    input r1 as address.private;
    input r2 as u64.private;
    sub r0.amount r2 into r3;
    cast r0.owner r3 into r4 as Token.record;
    cast r1 r2 into r5 as Token.record;
    output r4 as Token.record;
    output r5 as Token.record;`;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Token Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Zero Knowledge Gold"
                  value={tokenData.name}
                  onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="symbol">Token Symbol</Label>
                <Input
                  id="symbol"
                  placeholder="e.g., ZKGOLD"
                  value={tokenData.symbol}
                  onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value.toUpperCase() })}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your token's purpose and utility..."
                  value={tokenData.description}
                  onChange={(e) => setTokenData({ ...tokenData, description: e.target.value })}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="supply">Total Supply</Label>
                <Input
                  id="supply"
                  type="number"
                  placeholder="1000000"
                  value={tokenData.totalSupply}
                  onChange={(e) => setTokenData({ ...tokenData, totalSupply: e.target.value })}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="decimals">Decimals</Label>
                <Input
                  id="decimals"
                  type="number"
                  value={tokenData.decimals}
                  onChange={(e) => setTokenData({ ...tokenData, decimals: e.target.value })}
                  className="mt-1"
                />
              </div>
              
              <div className="space-y-3">
                <Label>Token Features</Label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={tokenData.mintable}
                      onChange={(e) => setTokenData({ ...tokenData, mintable: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Mintable (can create new tokens)</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={tokenData.burnable}
                      onChange={(e) => setTokenData({ ...tokenData, burnable: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Burnable (can destroy tokens)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Generated Leo Smart Contract</Label>
              <div className="mt-2 p-4 bg-secondary/50 rounded-lg border border-border">
                <pre className="text-xs font-mono overflow-x-auto whitespace-pre-wrap">
                  {generateLeoCode()}
                </pre>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Estimated Gas Cost</Label>
                <div className="text-lg font-semibold text-aleo-gold">0.1 ALEO</div>
              </div>
              
              <div className="space-y-2">
                <Label>Deploy Time</Label>
                <div className="text-lg font-semibold text-zk-teal">~30 seconds</div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <CheckCircle className="h-16 w-16 text-aleo-gold mx-auto" />
              <h3 className="text-2xl font-bold">Ready to Deploy!</h3>
              <p className="text-muted-foreground">
                Your token contract is ready for deployment to the Aleo network
              </p>
            </div>
            
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Token Name:</span>
                    <span className="font-semibold">{tokenData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Symbol:</span>
                    <span className="font-semibold">{tokenData.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Supply:</span>
                    <span className="font-semibold">{tokenData.totalSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Features:</span>
                    <div className="flex space-x-2">
                      {tokenData.mintable && <Badge variant="secondary">Mintable</Badge>}
                      {tokenData.burnable && <Badge variant="secondary">Burnable</Badge>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= step.id
                ? 'border-aleo-gold bg-aleo-gold text-black'
                : 'border-muted-foreground text-muted-foreground'
            }`}>
              <step.icon className="h-5 w-5" />
            </div>
            {index < steps.length - 1 && (
              <div className={`h-1 w-16 mx-4 ${
                currentStep > step.id ? 'bg-aleo-gold' : 'bg-muted'
              }`} />
            )}
          </div>
        ))}
      </div>

      <Progress value={(currentStep / steps.length) * 100} className="h-2" />

      {/* Step Content */}
      <Card className="glass-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Step {currentStep}: {steps[currentStep - 1].title}</span>
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Enter basic information about your token"}
            {currentStep === 2 && "Configure your token's properties and features"}
            {currentStep === 3 && "Review the generated smart contract code"}
            {currentStep === 4 && "Deploy your token to the Aleo network"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        {currentStep < steps.length ? (
          <Button
            onClick={nextStep}
            className="bg-gradient-to-r from-aleo-gold to-zk-teal text-black font-semibold"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={deployToken}
            className="bg-gradient-to-r from-aleo-gold to-zk-teal text-black font-semibold"
          >
            Deploy Contract
            <Coins className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};
