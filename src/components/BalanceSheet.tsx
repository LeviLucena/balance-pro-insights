
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

export interface BalanceSheetItem {
  id: string;
  name: string;
  value: number;
  type: "asset" | "liability" | "equity";
  parent?: string;
}

interface BalanceSheetProps {
  items: BalanceSheetItem[];
  date?: string;
  company?: string;
  className?: string;
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const BalanceSheet = ({ items, date, company, className }: BalanceSheetProps) => {
  const assets = items.filter((item) => item.type === "asset");
  const liabilities = items.filter((item) => item.type === "liability");
  const equity = items.filter((item) => item.type === "equity");

  const totalAssets = assets.reduce((sum, item) => sum + item.value, 0);
  const totalLiabilities = liabilities.reduce((sum, item) => sum + item.value, 0);
  const totalEquity = equity.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Balanço Patrimonial</h2>
          {company && <p className="text-sm text-muted-foreground">{company}</p>}
          {date && <p className="text-sm text-muted-foreground">Data: {date}</p>}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-1" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Exportar
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-lg">Ativos</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right">{formatCurrency(item.value)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-bold">Total de Ativos</TableCell>
                <TableCell className="text-right font-bold">{formatCurrency(totalAssets)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 text-lg">Passivos</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {liabilities.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">{formatCurrency(item.value)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-bold">Total de Passivos</TableCell>
                  <TableCell className="text-right font-bold">{formatCurrency(totalLiabilities)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-lg">Patrimônio Líquido</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equity.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">{formatCurrency(item.value)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-bold">Total do Patrimônio</TableCell>
                  <TableCell className="text-right font-bold">{formatCurrency(totalEquity)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-muted rounded-md">
        <div className="flex justify-between">
          <div>
            <span className="font-semibold">Total do Ativo</span>
            <p className="text-xl font-bold">{formatCurrency(totalAssets)}</p>
          </div>
          <div>
            <span className="font-semibold">Total do Passivo + PL</span>
            <p className="text-xl font-bold">{formatCurrency(totalLiabilities + totalEquity)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
