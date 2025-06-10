
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Wallet, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  const walletAddress = "aleo1abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890";

  const handleConnect = () => {
    setIsConnected(true);
    setShowModal(false);
    toast({
      title: "Wallet Connected",
      description: "Successfully connected to Aleo wallet",
    });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
  };

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="gradient-border bg-background hover:bg-secondary/80 transition-all duration-200"
      >
        <div className="bg-background px-4 py-2 rounded-md flex items-center space-x-2 text-black dark:text-white">
          <Wallet className="h-4 w-4" />
          <span>
            {isConnected
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
              : "Connect Wallet"
            }
          </span>
        </div>
      </Button>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="glass-card border-0">
          <DialogHeader>
            <DialogTitle className="gradient-text">Connect Aleo Wallet</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {!isConnected ? (
              <div className="space-y-3">
                <Button
                  onClick={handleConnect}
                  className="w-full bg-gradient-to-r from-aleo-gold to-zk-teal text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Leo Wallet
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Connect your Aleo wallet to start building on the zero-knowledge blockchain
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Address</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyAddress}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="font-mono text-xs break-all">{walletAddress}</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Balance</span>
                  <span className="font-semibold">1,234.56 ALEO</span>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
