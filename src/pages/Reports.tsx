
import { useState } from "react";
import { Download, FileText, Filter, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BalanceSheet from "@/components/BalanceSheet";

// Importar o tipo BalanceSheetItem
import { BalanceSheetItem } from "@/components/BalanceSheet";

// Dados de exemplo para o balanço patrimonial
const balanceSheetData: BalanceSheetItem[] = [
  {
    id: "a1",
    name: "Ativo Circulante",
    value: 372000,
    type: "asset"
  },
  {
    id: "a1.1",
    name: "Caixa e Equivalentes",
    value: 70000,
    type: "asset",
    parent: "a1"
  },
  {
    id: "a1.2",
    name: "Aplicações Financeiras",
    value: 120000,
    type: "asset",
    parent: "a1"
  },
  {
    id: "a1.3",
    name: "Contas a Receber",
    value: 87000,
    type: "asset",
    parent: "a1"
  },
  {
    id: "a1.4",
    name: "Estoques",
    value: 95000,
    type: "asset",
    parent: "a1"
  },
  {
    id: "a2",
    name: "Ativo Não Circulante",
    value: 1077000,
    type: "asset"
  },
  {
    id: "a2.1",
    name: "Realizável a Longo Prazo",
    value: 0,
    type: "asset",
    parent: "a2"
  },
  {
    id: "a2.2",
    name: "Investimentos",
    value: 0,
    type: "asset",
    parent: "a2"
  },
  {
    id: "a2.3",
    name: "Imobilizado",
    value: 1077000,
    type: "asset",
    parent: "a2"
  },
  {
    id: "p1",
    name: "Passivo Circulante",
    value: 225000,
    type: "liability"
  },
  {
    id: "p1.1",
    name: "Fornecedores",
    value: 85000,
    type: "liability",
    parent: "p1"
  },
  {
    id: "p1.2",
    name: "Empréstimos e Financiamentos",
    value: 60000,
    type: "liability",
    parent: "p1"
  },
  {
    id: "p1.3",
    name: "Obrigações Fiscais",
    value: 45000,
    type: "liability",
    parent: "p1"
  },
  {
    id: "p1.4",
    name: "Obrigações Trabalhistas",
    value: 35000,
    type: "liability",
    parent: "p1"
  },
  {
    id: "p2",
    name: "Passivo Não Circulante",
    value: 374000,
    type: "liability"
  },
  {
    id: "p2.1",
    name: "Empréstimos e Financiamentos LP",
    value: 350000,
    type: "liability",
    parent: "p2"
  },
  {
    id: "p2.2",
    name: "Provisões para Contingências",
    value: 24000,
    type: "liability",
    parent: "p2"
  },
  {
    id: "e1",
    name: "Capital Social",
    value: 500000,
    type: "equity"
  },
  {
    id: "e2",
    name: "Reservas de Capital",
    value: 0,
    type: "equity"
  },
  {
    id: "e3",
    name: "Reservas de Lucro",
    value: 200000,
    type: "equity"
  },
  {
    id: "e4",
    name: "Lucros Acumulados",
    value: 150000,
    type: "equity"
  }
];

const Reports = () => {
  const [reportType, setReportType] = useState("balance-sheet");
  const [period, setPeriod] = useState("current");
  const [format, setFormat] = useState("standard");

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Relatórios Financeiros</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Balanço Patrimonial</CardTitle>
            <CardDescription>Situação atual da empresa</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" onClick={() => setReportType("balance-sheet")}>
              <FileText className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>DRE</CardTitle>
            <CardDescription>Demonstração de Resultados do Exercício</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" onClick={() => setReportType("income-statement")}>
              <FileText className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise de Indicadores</CardTitle>
            <CardDescription>Índices financeiros e comparativos</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" onClick={() => setReportType("financial-indicators")}>
              <FileText className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">
              {reportType === "balance-sheet" && "Balanço Patrimonial"}
              {reportType === "income-statement" && "Demonstração de Resultados"}
              {reportType === "financial-indicators" && "Análise de Indicadores"}
            </h2>
            <p className="text-sm text-muted-foreground">Empresa Exemplo LTDA</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Período Atual</SelectItem>
                <SelectItem value="last-quarter">Último Trimestre</SelectItem>
                <SelectItem value="last-semester">Último Semestre</SelectItem>
                <SelectItem value="last-year">Último Ano</SelectItem>
                <SelectItem value="custom">Período Personalizado</SelectItem>
              </SelectContent>
            </Select>

            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Formato do Relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Padrão Contábil Brasileiro</SelectItem>
                <SelectItem value="ifrs">IFRS</SelectItem>
                <SelectItem value="simplified">Simplificado</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {reportType === "balance-sheet" && (
          <Tabs defaultValue="full" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="full">Completo</TabsTrigger>
              <TabsTrigger value="simplified">Simplificado</TabsTrigger>
              <TabsTrigger value="comparative">Comparativo</TabsTrigger>
            </TabsList>
            <TabsContent value="full">
              <BalanceSheet 
                items={balanceSheetData}
                date="31/03/2023"
                company="Empresa Exemplo LTDA" 
              />
            </TabsContent>
            <TabsContent value="simplified">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Versão simplificada do balanço patrimonial será exibida aqui.</p>
              </div>
            </TabsContent>
            <TabsContent value="comparative">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Versão comparativa do balanço patrimonial será exibida aqui.</p>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {reportType === "income-statement" && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">O relatório de Demonstração de Resultados será exibido aqui.</p>
          </div>
        )}

        {reportType === "financial-indicators" && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">O relatório de Indicadores Financeiros será exibido aqui.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
