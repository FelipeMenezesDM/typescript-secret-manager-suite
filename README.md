# General TypeScript Library Template
Modelo padrão para criação de bibliotecas TypeScript.

## Tópicos
- [Instalação](#instalação)
- [Deploy manual](#deploy-manual)
- [Configuração](#configuração)
- [Exemplo](#exemplo)

## Instalação
Na pasta onde está localizado o _package.json_ do seu projeto, crie o arquivo _.npmrc_ e adicione os registries necessários:
```
@felipemenezesdm:registry=https://npm.pkg.github.com
registry=https://registry.npmjs.org/
```

Para instalar a dependência, execute o comando abaixo:
```
npm install @felipemenezesdm/typescript-secret-manager-suite@1.0.0
```

ou, adicione-a diretamente no _package.json_ e execute o `npm install`:
```json
{
  "dependencies": {
    "@felipemenezesdm/typescript-secret-manager-suite": "1.0.0"
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

## Configuração
Para a configuração da biblioteca, é necessário definir as variáveis de ambiente listadas abaixo. Você pode criar um arquivo _.env_ na raíz do projeto e usar o _dotenv_ para carregar as variáveis de ambiente.

| Name                           | Valor padrão       | Example                                                                          |
|--------------------------------|--------------------|----------------------------------------------------------------------------------|
| APP_SUITE                      | gcp, aws ou vazio  | Definição do suite para recuperação de secrets                                   |
| AWS_ACCOUNT_ID                 | 000000000000       | Definir a ID da conta AWS para a aplicação                                       |
| AWS_ENDPOINT                   | http:\/\/127.0.0.1 | Definir o endpoint dos serviços AWS (indicado quando houver o uso do localstack) |
| AWS_DEFAULT_REGION             | us-east-1          | Definir a região padrão para uma aplicação alocada na AWS                        |
| GCP_PROJECT_ID                 | N/A                | ID do projeto no Google Cloud Plataform                                          |
| GOOGLE_APPLICATION_CREDENTIALS | N/A                | Arquivo de credenciais do Google Cloud Platform                                  |

## Exemplo
```dotenv
APP_SUITE=gcp
GCP_PROJECT_ID=my-project-id
GOOGLE_APPLICATION_CREDENTIALS=/path/to/file/auth-gcloud.json
```

```typescript
import suite from '@felipemenezesdm/typescript-secret-manager-suite@1.0.0'

const mySecretValue = await suite().getSecretData('my-secret-name');
```

