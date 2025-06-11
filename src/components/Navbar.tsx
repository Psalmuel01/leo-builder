
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { WalletConnect } from "./WalletConnect";
import {
  Menu,
  X,
  Zap,
  Activity,
  FileText,
  Settings,
  Coins,
  Image
} from "lucide-react";
import { ConnectWalletButton } from "./ConnectWallet";

const navigationItems = [
  { name: "Token Creation", href: "#tokens", icon: Coins },
  { name: "NFT Minting", href: "#nfts", icon: Image },
  { name: "Asset Manager", href: "#assets", icon: Activity },
  { name: "Activity Logs", href: "#activity", icon: Activity },
  { name: "Blog/Guides", href: "#guides", icon: FileText },
  { name: "Settings", href: "#settings", icon: Settings },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="gradient-border">
              <div className="bg-background p-2 rounded-md">
                <Zap className="h-6 w-6 text-aleo-gold" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">LeoBuilder</span>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div> */}

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <ConnectWalletButton />
            <WalletConnect />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <ThemeToggle />
                <WalletConnect />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
