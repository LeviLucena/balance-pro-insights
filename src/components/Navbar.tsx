
import { Link } from "react-router-dom";
import { Bell, HelpCircle, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="h-9 w-9 bg-finance-blue rounded-md flex items-center justify-center">
                <span className="font-bold text-white text-xl">B</span>
              </span>
              <span className="ml-2 font-bold text-xl text-finance-darkblue">BalancePro</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
            Dashboard
          </Link>
          <Link to="/assets" className="text-sm font-medium hover:text-primary">
            Ativos
          </Link>
          <Link to="/liabilities" className="text-sm font-medium hover:text-primary">
            Passivos
          </Link>
          <Link to="/reports" className="text-sm font-medium hover:text-primary">
            Relatórios
          </Link>
          <Link to="/companies" className="text-sm font-medium hover:text-primary">
            Empresas
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
