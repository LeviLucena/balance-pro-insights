import { ArrowRight, BarChart3, Building2, Calculator, ChartPieIcon, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container max-w-7xl mx-auto py-6 px-4 md:py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="h-16 w-16 bg-finance-blue rounded-xl flex items-center justify-center mb-6">
          <span className="font-bold text-white text-3xl">B</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">BalancePro</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Sistema especializado na gestão contábil e análise patrimonial para empresas, 
          contadores e gestores financeiros
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="p-6 border rounded-lg bg-card">
          <BarChart3 className="h-12 w-12 text-finance-blue mb-4" />
          <h2 className="text-xl font-bold mb-2">Gestão Patrimonial Completa</h2>
          <p className="text-muted-foreground mb-4">
            Cadastro de ativos, passivos e patrimônio líquido com cálculo 
            automático de depreciação e controle de bens.
          </p>
          <Link to="/dashboard">
            <Button variant="outline" className="w-full">
              Acessar Dashboard 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="p-6 border rounded-lg bg-card">
          <FileText className="h-12 w-12 text-finance-blue mb-4" />
          <h2 className="text-xl font-bold mb-2">Relatórios Automatizados</h2>
          <p className="text-muted-foreground mb-4">
            Geração de balanço patrimonial em formatos variados: padrão contábil
            brasileiro, IFRS e simplificado.
          </p>
          <Link to="/reports">
            <Button variant="outline" className="w-full">
              Ver Relatórios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="p-6 border rounded-lg bg-card">
          <Calculator className="h-12 w-12 text-finance-blue mb-4" />
          <h2 className="text-xl font-bold mb-2">Análises Inteligentes</h2>
          <p className="text-muted-foreground mb-4">
            Indicadores financeiros automáticos de liquidez, endividamento, 
            composição de capital e rentabilidade.
          </p>
          <Link to="/indicators">
            <Button variant="outline" className="w-full">
              Analisar Indicadores
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Diferenciais do BalancePro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <ChartPieIcon className="h-5 w-5 text-finance-blue" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Assistente de Lançamentos Contábeis</h3>
              <p className="text-muted-foreground">
                Sugere classificações baseadas em histórico e padrões de lançamentos anteriores.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <BarChart3 className="h-5 w-5 text-finance-blue" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Comparativo Setorial</h3>
              <p className="text-muted-foreground">
                Benchmark com empresas similares do mesmo segmento para comparar desempenho.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Shield className="h-5 w-5 text-finance-blue" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Modo Auditoria</h3>
              <p className="text-muted-foreground">
                Rastreabilidade completa de alterações em lançamentos contábeis.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Building2 className="h-5 w-5 text-finance-blue" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Previsão Patrimonial</h3>
              <p className="text-muted-foreground">
                Projeções baseadas em cenários para planejamento financeiro estratégico.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Comece a gerenciar sua empresa agora</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/dashboard">
            <Button size="lg">
              Acessar Dashboard
            </Button>
          </Link>
          <Link to="/companies">
            <Button variant="outline" size="lg">
              Gerenciar Empresas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
