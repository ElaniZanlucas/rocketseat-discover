# NPM

Node Package Manager

__Glossary: DEpendencies, Packages, Modules__

- [] Verificar se temos o npm instalado `npm -v`
- [] Criar nosso próprio pacote
- [] O que é o arquivos package.json
- Utilizar módulos de terceiros
- [] O que é o diretório node_modules
- [] O que é o arquivo package-lock.json
- [] Criar scripts para rodar o npm

## Criando o pacote com npm
```npm
  npm init
  package name: qualquer-nome
  version: (1.0.0)
  description: aprendendo node
  entry point: (index.js)
  test command: 
  keywords:
  author:
  license: (ISC)
  yes
```

```npm
  npm init -y
  Yes pra tudo
```

## Instalando módulos
```npm
  npm install cfonts(módulos)

  Dependências de desenvolvimento
  npm install D

  Manipular package.json:
  npm update
```

## Rodando scripts
```npm
  npm run nome-do-script
```

## Instalando módulos de forma global
```npm
  npm i módulo -g

  Para descobrir onde foi instalado:
  npm root -g

  Desinstalar de maneira global:
  npm uninstall módulo -g
```

## Gerenciando versões de dependências
v(2.29.1)
major.minor.patch
- patch: resolvendo algum bug dentro do pacote
- minor: vai ter alterações, mas não há possibilidades de quebrar oq está acontecendo no pacote
- versão do projeto que pode quebrar, dependendo doq acontece

^ : atualiza as duas versões
~ : atualiza só o patch
  : mantém a versão fixa
* : vai mudar todas as versões

`npm outdated`: verifica versões
`npm upgrade`: atualiza as versões para a wanted
`npm módulo@latest`: pega a última versão
`npm módulo@1.23.4`: pega uma versão específica

## Desinstalando módulos
```npm
  npm uninstall módulo
```