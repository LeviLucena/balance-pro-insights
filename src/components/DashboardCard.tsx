
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  icon?: ReactNode;
  value?: string | number;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
  children?: ReactNode;
}

const DashboardCard = ({
  title,
  icon,
  value,
  description,
  trend,
  className,
  children,
}: DashboardCardProps) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        {value && (
          <div className="text-2xl font-bold">
            {value}
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className="flex items-center mt-1">
            <span
              className={cn(
                "text-xs font-medium",
                trend.positive ? "text-finance-green" : "text-finance-red"
              )}
            >
              {trend.positive ? "+" : "-"}{Math.abs(trend.value).toFixed(2)}%
            </span>
          </div>
        )}
        {children}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
