
import { useState } from "react";
import { PlusCircle, Search, Filter, ArrowUpDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dados de exemplo para ativos
const assetsData = [
  {
    id: "1",
    code: "1001",
    name: "Caixa",
    category: "Circulante",
    value: 25000,
    acquisitionDate: "2023-01-15",
    depreciation: 0,
    currentValue: 25000,
  },
  {
    id: "2",
    code: "1002",
    name: "Banco Conta Corrente",
    category: "Circulante",
    value: 45000,
    acquisitionDate: "2023-01-10",
    depreciation: 0,
    currentValue: 45000,
  },
  {
    id: "3",
    code: "1003",
    name: "Aplicações Financeiras",
    category: "Circulante",
    value: 120000,
    acquisitionDate: "2023-02-05",
    depreciation: 0,
    currentValue: 120000,
  },
  {
    id: "4",
    code: "1201",
    name: "Contas a Receber",
    category: "Circulante",
    value: 87000,
    acquisitionDate: "2023-03-10",
    depreciation: 0,
    currentValue: 87000,
  },
  {
    id: "5",
    code: "1301",
    name: "Estoque de Mercadorias",
    category: "Circulante",
    value: 95000,
    acquisitionDate: "2023-01-20",
    depreciation: 0,
    currentValue: 95000,
  },
  {
    id: "6",
    code: "2101",
    name: "Veículos",
    category: "Não Circulante",
    value: 180000,
    acquisitionDate: "2022-06-15",
    depreciation: 18000,
    currentValue: 162000,
  },
  {
    id: "7",
    code: "2201",
    name: "Imóveis",
    category: "Não Circulante",
    value: 750000,
    acquisitionDate: "2020-03-12",
    depreciation: 75000,
    currentValue: 675000,
  },
  {
    id: "8",
    code: "2301",
    name: "Máquinas e Equipamentos",
    category: "Não Circulante",
    value: 320000,
    acquisitionDate: "2021-08-23",
    depreciation: 80000,
    currentValue: 240000,
  },
];

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("pt-BR");
};

const Assets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredAssets = assetsData.filter((asset) => {
    const matchesSearch = asset.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || asset.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalAssets = filteredAssets.reduce(
    (sum, asset) => sum + asset.currentValue,
    0
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Ativos</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Ativo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalAssets)}</div>
            <p className="text-xs text-muted-foreground">Valor atual após depreciação</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ativos Circulantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                filteredAssets
                  .filter((asset) => asset.category === "Circulante")
                  .reduce((sum, asset) => sum + asset.currentValue, 0)
              )}
            </div>
            <p className="text-xs text-muted-foreground">Realizáveis em até 12 meses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ativos Não Circulantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                filteredAssets
                  .filter((asset) => asset.category === "Não Circulante")
                  .reduce((sum, asset) => sum + asset.currentValue, 0)
              )}
            </div>
            <p className="text-xs text-muted-foreground">Realizáveis após 12 meses</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar ativos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas categorias</SelectItem>
              <SelectItem value="Circulante">Circulante</SelectItem>
              <SelectItem value="Não Circulante">Não Circulante</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Valor Original</TableHead>
              <TableHead className="text-right">Depreciação</TableHead>
              <TableHead className="text-right">Valor Atual</TableHead>
              <TableHead>Data Aquisição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAssets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell className="font-medium">{asset.code}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.category}</TableCell>
                <TableCell className="text-right">{formatCurrency(asset.value)}</TableCell>
                <TableCell className="text-right text-finance-red">
                  {formatCurrency(asset.depreciation)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatCurrency(asset.currentValue)}
                </TableCell>
                <TableCell>{formatDate(asset.acquisitionDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredAssets.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Nenhum ativo encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default Assets;
