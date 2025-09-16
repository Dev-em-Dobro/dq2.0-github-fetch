# 🚀 Visualizador de Perfil do GitHub

Uma aplicação web moderna e responsiva para visualizar perfis e repositórios do GitHub de forma elegante e intuitiva.

## ✨ Funcionalidades

- **Busca de Usuários**: Pesquise qualquer usuário do GitHub pelo nome de usuário
- **Informações do Perfil**: Visualize avatar, nome, bio, seguidores e seguindo
- **Listagem de Repositórios**: Exibe os últimos 10 repositórios com:
  - Número de estrelas ⭐
  - Número de forks 🍴
  - Número de watchers 👁️
  - Linguagem principal 💻
- **Eventos Recentes**: Mostra as últimas atividades do usuário (commits e criação de repos)
- **Design Responsivo**: Interface adaptada para desktop, tablet e mobile
- **Animações Suaves**: Gradiente animado de fundo e transições elegantes

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS e animações
- **JavaScript ES6+**: Módulos, async/await, template literals
- **GitHub API**: Integração com a API REST do GitHub
- **Design System**: Baseado nos princípios do shadcn/ui

## 📁 Estrutura do Projeto

```
projeto-fetch-github-api/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── reset.css
    │   └── styles.css
    └── scripts/
        ├── index.js
        ├── variables.js
        ├── objects/
        │   ├── screen.js
        │   └── user.js
        └── services/
            ├── events.js
            ├── repositories.js
            └── user.js
```

## 🎨 Design

- **Paleta de Cores**: Gradiente vibrante com tons de roxo, rosa e laranja
- **Tipografia**: Inter (Google Fonts) para melhor legibilidade
- **Componentes**: Cards minimalistas com bordas sutis e sombras elegantes
- **Estados Interativos**: Hover effects com mudanças de cor e elevação

## 💻 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/projeto-fetch-github-api.git
```

2. Navegue até o diretório do projeto:
```bash
cd projeto-fetch-github-api
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

4. Digite um nome de usuário do GitHub na barra de busca e clique em "Buscar"

## 🔍 Recursos da API

A aplicação utiliza os seguintes endpoints da API do GitHub:

- `/users/{username}` - Dados do perfil do usuário
- `/users/{username}/repos` - Repositórios do usuário
- `/users/{username}/events` - Eventos recentes do usuário

## 📱 Responsividade

O layout se adapta automaticamente para diferentes tamanhos de tela:

- **Desktop**: Layout completo com cards lado a lado
- **Tablet**: Ajuste de espaçamentos e tamanhos
- **Mobile**: Layout em coluna única com elementos otimizados

## 🚀 Melhorias Futuras

- [ ] Adicionar paginação para repositórios
- [ ] Implementar cache local para reduzir chamadas à API
- [ ] Adicionar modo escuro
- [ ] Incluir gráficos de contribuições
- [ ] Permitir comparação entre perfis
- [ ] Adicionar filtros e ordenação de repositórios

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido com 💜 pela Dev em Dobro.

---

**Nota**: Este projeto utiliza a API pública do GitHub, que possui limite de requisições (60 por hora para usuários não autenticados).
