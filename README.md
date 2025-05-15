# 📊 BalancePro: Sistema de Gestão e Análise de Balanços Patrimoniais

O BalancePro é um sistema SaaS (Software as a Service) projetado especificamente para atender as necessidades de contadores, gestores financeiros e empresários. Ele oferece uma plataforma abrangente que facilita a gestão e a análise de balanços patrimoniais de forma eficiente e segura.

![Gemini_Generated_Image_mi3fl1mi3fl1mi3f](https://github.com/user-attachments/assets/2b77fef4-88d6-486c-a90e-7e5a4bad60c7)

| | |
|-|-|
| ![](https://github.com/user-attachments/assets/026b6d21-c4dc-4666-91d8-a8b9eb376035) | ![](https://github.com/user-attachments/assets/f0d0a1f6-1cba-4b57-a9b8-1a8dbd46096c) 
| ![](https://github.com/user-attachments/assets/8c53bcf3-557b-49ad-8351-66f3f13f7f1b) | ![](https://github.com/user-attachments/assets/076b932c-2060-4d59-bc2f-50195a00983c) | | 

## 🔍 Principais Diferenciais
### Para Contadores
- Geração automática de balanços nos padrões BR-GAAP e IFRS
- Controle de versões com histórico de alterações
- Módulo de auditoria integrado para conformidade fiscal

### Para Gestores Financeiros
- Painéis executivos com KPIs financeiros em tempo real
- Análise comparativa entre períodos e empresas do mesmo segmento
- Projeções patrimoniais baseadas em cenários econômicos

### Para Empresários
- Visão simplificada da saúde financeira da empresa
- Alertas preventivos sobre riscos patrimoniais
- Integração nativa com bancos e sistemas de gestão

## ✨ Funcionalidades Principais

- 🏦 Geração automática de balanço patrimonial
- 📈 Cálculo de indicadores financeiros
- 🔄 Integração com sistemas contábeis
- 📊 Relatórios personalizáveis
- 🧮 Cálculos de depreciação e amortização
- 👥 Multiempresa (vários CNPJs)

## 🛠 Tecnologias Utilizadas
### Backend
- Node.js (Runtime)
- Express (Framework web)
- Knex.js (Query Builder)
- PostgreSQL (Banco de dados)


### Frontend
- React (Biblioteca UI)
- Chart.js (Gráficos)
- Material-UI (Componentes)
- Vite
- TypeScript
- shadcn-ui
- Tailwind CSS

### DevOps
- Docker (Containerização)
- GitHub Actions (CI/CD)
- AWS (Hospedagem)

## 🚀 Como Executar o Projeto
### Pré-requisitos
- Node.js 16+
- PostgreSQL 12+
- Yarn ou npm

### Instalação
1. Clone o repositório:
```
git clone https://github.com/LeviLucena/balance-pro-insights.git
cd balance-pro-insights
```

2. Instale as dependências:
```
cd server && npm install
cd ../client && npm install
```

3. Configure o banco de dados:
```
cp server/.env.example server/.env
# Edite as variáveis no arquivo .env
```

4. Execute as migrations:
```
cd server
npx knex migrate:latest
```

5. Inicie os serviços:
```
cd server
npx knex migrate:latest
```

## 📄 Licença

O BalancePro é distribuído sob a **Licença MIT** - um modelo de licença permissivo com condições mínimas de reutilização.
