
import { useState } from "react";
import { PlusCircle, Search, Building2, Edit, Trash2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Dados de exemplo para empresas
const companiesData = [
  {
    id: "1",
    name: "Empresa Exemplo LTDA",
    cnpj: "12.345.678/0001-90",
    type: "LTDA",
    sector: "Comércio",
    active: true,
    address: "Av. Paulista, 1000, São Paulo - SP",
    phone: "(11) 3456-7890",
    email: "contato@empresaexemplo.com.br",
  },
  {
    id: "2",
    name: "Tech Solutions S.A.",
    cnpj: "98.765.432/0001-21",
    type: "S.A.",
    sector: "Tecnologia",
    active: true,
    address: "Rua Vergueiro, 500, São Paulo - SP",
    phone: "(11) 2345-6789",
    email: "contato@techsolutions.com.br",
  },
  {
    id: "3",
    name: "Indústria Nacional EIRELI",
    cnpj: "45.678.901/0001-23",
    type: "EIRELI",
    sector: "Indústria",
    active: true,
    address: "Rod. Anhanguera, Km 100, Campinas - SP",
    phone: "(19) 9876-5432",
    email: "contato@industrianacional.com.br",
  },
  {
    id: "4",
    name: "Agro Sustentável LTDA",
    cnpj: "56.789.012/0001-34",
    type: "LTDA",
    sector: "Agronegócio",
    active: true,
    address: "Fazenda Modelo, s/n, Ribeirão Preto - SP",
    phone: "(16) 3456-7890",
    email: "contato@agrosustentavel.com.br",
  },
  {
    id: "5",
    name: "Construções Integradas S.A.",
    cnpj: "67.890.123/0001-45",
    type: "S.A.",
    sector: "Construção Civil",
    active: false,
    address: "Av. Brasil, 2000, Rio de Janeiro - RJ",
    phone: "(21) 2345-6789",
    email: "contato@construcoesintegradas.com.br",
  },
];

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companiesData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.cnpj.includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestão de Empresas</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nova Empresa
        </Button>
      </div>

      <div className="relative max-w-md mx-auto md:max-w-full mb-6">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar por nome ou CNPJ..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription>{company.cnpj}</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tipo:</span>
                  <span className="text-sm">{company.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Setor:</span>
                  <span className="text-sm">{company.sector}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge variant={company.active ? "default" : "destructive"}>
                    {company.active ? "Ativo" : "Inativo"}
                  </Badge>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1">Endereço:</span>
                  <span className="text-sm text-muted-foreground">{company.address}</span>
                </div>
                <div>
                  <span className="text-sm font-medium block mb-1">Contato:</span>
                  <span className="text-sm text-muted-foreground">{company.phone}</span>
                  <span className="text-sm text-muted-foreground block">{company.email}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <Building2 className="mr-2 h-4 w-4" />
                Ver Balanço
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-10">
          <Building2 className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-medium mb-2">Nenhuma empresa encontrada</h2>
          <p className="text-muted-foreground mb-4">
            Não encontramos empresas com os termos pesquisados.
          </p>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Cadastrar Empresa
          </Button>
        </div>
      )}
    </div>
  );
};

export default Companies;
