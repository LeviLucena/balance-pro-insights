
import { useState } from "react";
import { Calendar, CircleDollarSign, TrendingDown, TrendingUp, BarChart } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";
import FinancialChart, { ChartData } from "@/components/FinancialChart";
import FinancialIndicator from "@/components/FinancialIndicator";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dashboard = () => {
  const [period, setPeriod] = useState("monthly");

  // Dados de exemplo para os gráficos
  const balanceData: ChartData[] = [
    { name: "Jan", Ativos: 120000, Passivos: 70000, "Patrimônio Líquido": 50000 },
    { name: "Fev", Ativos: 125000, Passivos: 68000, "Patrimônio Líquido": 57000 },
    { name: "Mar", Ativos: 130000, Passivos: 65000, "Patrimônio Líquido": 65000 },
    { name: "Abr", Ativos: 140000, Passivos: 75000, "Patrimônio Líquido": 65000 },
    { name: "Mai", Ativos: 145000, Passivos: 72000, "Patrimônio Líquido": 73000 },
    { name: "Jun", Ativos: 160000, Passivos: 80000, "Patrimônio Líquido": 80000 },
  ];

  const assetDistribution: ChartData[] = [
    { name: "Caixa e Bancos", value: 30000 },
    { name: "Contas a Receber", value: 45000 },
    { name: "Estoque", value: 38000 },
    { name: "Imobilizado", value: 85000 },
    { name: "Investimentos", value: 22000 },
  ];

  const liabilityDistribution: ChartData[] = [
    { name: "Fornecedores", value: 25000 },
    { name: "Empréstimos", value: 35000 },
    { name: "Impostos", value: 12000 },
    { name: "Salários", value: 18000 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
        <div className="flex items-center gap-4">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensal</SelectItem>
              <SelectItem value="quarterly">Trimestral</SelectItem>
              <SelectItem value="yearly">Anual</SelectItem>
            </SelectContent>
          </Select>
          <Button>Atualizar Dados</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total de Ativos"
          icon={<CircleDollarSign className="h-4 w-4" />}
          value="R$ 160.000,00"
          description="Valor total em ativos"
          trend={{ value: 10.3, positive: true }}
        />
        <DashboardCard
          title="Total de Passivos"
          icon={<CircleDollarSign className="h-4 w-4" />}
          value="R$ 80.000,00"
          description="Valor total em passivos"
          trend={{ value: 6.7, positive: false }}
        />
        <DashboardCard
          title="Patrimônio Líquido"
          icon={<CircleDollarSign className="h-4 w-4" />}
          value="R$ 80.000,00"
          description="Capital próprio da empresa"
          trend={{ value: 16.2, positive: true }}
        />
        <DashboardCard
          title="Relação Dívida/Capital"
          icon={<BarChart className="h-4 w-4" />}
          value="0.5"
          description="Proporção entre dívidas e capital próprio"
          trend={{ value: 4.2, positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FinancialChart
          title="Evolução Patrimonial"
          subtitle="Últimos 6 meses"
          data={balanceData}
          type="line"
          dataKeys={["Ativos", "Passivos", "Patrimônio Líquido"]}
          colors={["#33C3F0", "#ea384c", "#4CAF50"]}
          height={300}
          action={
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4 mr-1" />
              Mais
            </Button>
          }
        />
        <FinancialChart
          title="Composição dos Ativos"
          subtitle="Distribuição atual"
          data={assetDistribution}
          type="pie"
          dataKeys={["value"]}
          height={300}
          action={
            <Button variant="ghost" size="sm">
              <TrendingUp className="h-4 w-4 mr-1" />
              Detalhes
            </Button>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FinancialChart
          title="Composição dos Passivos"
          subtitle="Distribuição atual"
          data={liabilityDistribution}
          type="pie"
          dataKeys={["value"]}
          height={300}
          action={
            <Button variant="ghost" size="sm">
              <TrendingDown className="h-4 w-4 mr-1" />
              Detalhes
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <FinancialIndicator
            title="Liquidez Corrente"
            value={1.85}
            format="number"
            decimals={2}
            previousValue={1.72}
            comparison="higher-better"
            threshold={{ warning: 1.0, critical: 0.8 }}
            description="Capacidade de pagamento a curto prazo"
          />
          <FinancialIndicator
            title="Liquidez Seca"
            value={1.42}
            format="number"
            decimals={2}
            previousValue={1.33}
            comparison="higher-better"
            threshold={{ warning: 0.9, critical: 0.7 }}
            description="Capacidade de pagamento sem estoques"
          />
          <FinancialIndicator
            title="Endividamento Geral"
            value={38.5}
            format="percentage"
            decimals={1}
            previousValue={42.1}
            comparison="lower-better"
            threshold={{ warning: 60, critical: 75 }}
            description="Porcentagem de recursos de terceiros"
          />
          <FinancialIndicator
            title="ROE"
            value={12.4}
            format="percentage"
            decimals={1}
            previousValue={10.8}
            comparison="higher-better"
            threshold={{ warning: 8, critical: 5 }}
            description="Retorno sobre patrimônio líquido"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
