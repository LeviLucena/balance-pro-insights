
import { Link } from "react-router-dom";
import {
  BarChart3,
  CircleDollarSign,
  Home,
  Landmark,
  PieChart,
  FileBarChart,
  Building2,
  CreditCard,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link to={href} className="w-full">
      <div
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all hover:text-primary",
          active ? "bg-muted font-medium text-primary" : "text-muted-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
    </Link>
  );
};

interface SidebarProps {
  className?: string;
  activePath?: string;
}

const Sidebar = ({ className, activePath = "" }: SidebarProps) => {
  return (
    <aside className={cn("w-64 border-r bg-background py-4", className)}>
      <div className="space-y-4">
        <div className="px-4">
          <h2 className="mb-2 text-lg font-semibold">Navegação</h2>
          <div className="space-y-1">
            <SidebarItem
              icon={Home}
              label="Home"
              href="/"
              active={activePath === "/"}
            />
            <SidebarItem
              icon={BarChart3}
              label="Dashboard"
              href="/dashboard"
              active={activePath === "/dashboard"}
            />
          </div>
        </div>
        <div className="px-4">
          <h2 className="mb-2 text-lg font-semibold">Gestão Patrimonial</h2>
          <div className="space-y-1">
            <SidebarItem
              icon={Landmark}
              label="Ativos"
              href="/assets"
              active={activePath === "/assets"}
            />
            <SidebarItem
              icon={CreditCard}
              label="Passivos"
              href="/liabilities"
              active={activePath === "/liabilities"}
            />
            <SidebarItem
              icon={CircleDollarSign}
              label="Patrimônio Líquido"
              href="/equity"
              active={activePath === "/equity"}
            />
          </div>
        </div>
        <div className="px-4">
          <h2 className="mb-2 text-lg font-semibold">Análises</h2>
          <div className="space-y-1">
            <SidebarItem
              icon={FileBarChart}
              label="Relatórios"
              href="/reports"
              active={activePath === "/reports"}
            />
            <SidebarItem
              icon={PieChart}
              label="Indicadores"
              href="/indicators"
              active={activePath === "/indicators"}
            />
          </div>
        </div>
        <div className="px-4">
          <h2 className="mb-2 text-lg font-semibold">Administração</h2>
          <div className="space-y-1">
            <SidebarItem
              icon={Building2}
              label="Empresas"
              href="/companies"
              active={activePath === "/companies"}
            />
            <SidebarItem
              icon={Settings}
              label="Configurações"
              href="/settings"
              active={activePath === "/settings"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
