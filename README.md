# General TypeScript Library Template
Modelo padrão para criação de bibliotecas TypeScript.

## Tópicos
- [Instalação](#instalação)
- [Deploy manual](#deploy-manual)

## Instalação
Na pasta onde está localizado o _package.json_ do seu projeto, crie o arquivo _.npmrc_ e adicione os registries necessários:
```
@felipemenezesdm:registry=https://npm.pkg.github.com
registry=https://registry.npmjs.org/
```

Para instalar a dependência, execute o comando abaixo:
```
npm install @felipemenezesdm/general-maven-library-template@1.0.0
```

ou, adicione-a diretamente no _package.json_ e execute o `npm install`:
```json
{
  "dependencies": {
    "@felipemenezesdm/general-maven-library-template": "1.0.0"
  }
}
```

## Deploy manual
O deploy da biblioteca é realizado automaticamente sempre que houver a criação de uma nova tag de versão. Entretatando, se for necessário realizar seu deploy manual, basta executar os comandos abaixo.

Execute o comando para se autenticar no _registry_ e informe as suas credenciais, quando solicitado:
```
npm login --scope=@felipemenezesdm --auth-type=legacy --registry=https://npm.pkg.github.com
```
Execute o comando para publicar a nova versão do pacote:
```
npm publish
```
