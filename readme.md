# VUTTR(Very Useful Tools to Remember)
![Preview-Screens](/preview.png)

## Sobre
[![Netlify Status](https://api.netlify.com/api/v1/badges/ff415bd6-d3fa-4b06-9c1a-5ba5e03bd75e/deploy-status)](https://app.netlify.com/sites/festive-mirzakhani-154dae/deploys)

A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Funcionalidades

- Autentificação
- Criação e edição de usuário.
- Gerenciamento das suas ferramentas
  - Listagem de todas as ferramentas
  - Busca pelo nome da ferramenta
  - Busca por Tag
  - Criação
  - Edição
  - Remoção

## Getting Started

### Instalação

**Clonando o repositório**

```bash
git clone https://github.com/diogomachado1/desafio-frontend.git

cd desafio-frontend
```

**Instalando as dependências**

```bash
yarn
```
**ou**
```bash
npm install
```

### Conectando ao servidor

Por padrão, a aplicação tentará conectar-se com o servidor neste [neste endereço](https://vuttr-api.diogomachado.site/), onde encontra-se o backend desta aplicação.

Porém, caso queria rodar o server na sua máquina [aqui está o link](https://github.com/diogomachado1/desafio-backend) com o código e as instruções de instalação dele. Após seguir os passos de instalação do server adicione a variável de ambiente REACT_APP_API_URL no `.env` .

Exemplo:
```
REACT_APP_API_URL=http://localhost:3333/
```

### Start

Para rodar a aplicação basta usar:

```bash
yarn start
```
**ou**
```bash
npm start
```
