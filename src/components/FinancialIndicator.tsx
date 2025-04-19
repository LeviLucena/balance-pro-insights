
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FinancialIndicatorProps {
  title: string;
  value: number;
  format?: "number" | "percentage" | "currency";
  decimals?: number;
  previousValue?: number;
  description?: string;
  comparison?: "higher-better" | "lower-better" | "none";
  threshold?: {
    warning: number;
    critical: number;
  };
  className?: string;
}

const FinancialIndicator = ({
  title,
  value,
  format = "number",
  decimals = 2,
  previousValue,
  description,
  comparison = "none",
  threshold,
  className,
}: FinancialIndicatorProps) => {
  const formatValue = (val: number) => {
    switch (format) {
      case "percentage":
        return `${val.toFixed(decimals)}%`;
      case "currency":
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(val);
      default:
        return val.toFixed(decimals);
    }
  };

  const getChangePercentage = () => {
    if (previousValue === undefined || previousValue === 0) return 0;
    return ((value - previousValue) / Math.abs(previousValue)) * 100;
  };

  const changePercentage = getChangePercentage();
  const isPositiveChange =
    comparison === "higher-better"
      ? changePercentage > 0
      : comparison === "lower-better"
      ? changePercentage < 0
      : false;

  const getStatusClass = () => {
    if (!threshold) return "";
    
    if (comparison === "higher-better") {
      if (value < threshold.critical) return "text-finance-red";
      if (value < threshold.warning) return "text-amber-500";
      return "text-finance-green";
    } else if (comparison === "lower-better") {
      if (value > threshold.critical) return "text-finance-red";
      if (value > threshold.warning) return "text-amber-500";
      return "text-finance-green";
    }
    
    return "";
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", getStatusClass())}>
          {formatValue(value)}
        </div>
        
        {previousValue !== undefined && comparison !== "none" && (
          <div className="flex items-center gap-1 mt-1">
            {changePercentage !== 0 && (
              <>
                {changePercentage > 0 ? (
                  <ArrowUpIcon className={cn("h-3 w-3", isPositiveChange ? "text-finance-green" : "text-finance-red")} />
                ) : (
                  <ArrowDownIcon className={cn("h-3 w-3", isPositiveChange ? "text-finance-green" : "text-finance-red")} />
                )}
                <span
                  className={cn(
                    "text-xs font-medium",
                    isPositiveChange ? "text-finance-green" : "text-finance-red"
                  )}
                >
                  {Math.abs(changePercentage).toFixed(decimals)}%
                </span>
              </>
            )}
            <span className="text-xs text-muted-foreground ml-1">
              desde período anterior
            </span>
          </div>
        )}
        
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default FinancialIndicator;
