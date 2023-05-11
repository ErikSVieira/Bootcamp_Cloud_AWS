# Desafio de Infraestrutura como Código com Serverless Framework na AWS
## Criação de um Serverless Framework na AWS 

- Neste projeto foi criado um usuário no AWS com o nome de "serverless-user" com suas devidas permições.

- Configurado o Node.js com o comando:

        $ aws configure

- Instalado o framework serverless

        $ npm i -g serverless

- Rodar o novo projeto executando o serverless:

        $ serverless

- Realizado as configurações e criado um projeto com o nome "serverless-project".

- Configurado "serverless.yml" com a data e hora da região desejada meu caso foi "sa-east-1":

        provider:
                name: aws
                runtime: nodejs18.x
                region: sa-east-1

- Criado uma nova tabela no "serverless.yml":

        resources:
          Resources:
            ItemTableNew:
              Type: AWS::DynamoDB::Table
              Properties: 
                TableName: ItemTableDesafio
                BillingMode: PAY_PER_REQUEST
                AttributeDefinitions: 
                  - AttributeName: id
                  AttributeType: S
                KeySchema:
                  - AttributeName: id
                  KeyType: HASH

- Intalado no "uuid" e "aws-adk" no projeto:
        $ npm i uuid aws-sdk

- Criado a pasta "src" movimentado "index.js" para pasta "src" e editado o handler no arquivo "serverless.yml":

        handler: src/index.handler

- Criado a função "insertItem.js" e o configurado.

- Criar rota "insertItem" no "functions" em "serverless.yml":

          insertItem:
            handler: src/insertItem.handler
            events:
              - httpApi:
                path: /item
                method: post

- Configurado "iam" no "provider" em "serverless.yml":

        iam:
          role:
          statements:
            - Effect: Allow
              Action: 
                - dynamodb:PutItem
                - dynamodb:UpdateItem
                - dynamodb:GetItem
                - dynamodb:scan
              Resource: 
                - arn:aws:dynamodb:sa-east-1:075601468397:table/ItemTableDesafio


- Criado a função "fetchItems.js" e o configurado.

- Criar rota "fetchItems" no "functions" em "serverless.yml":

- Criado a função "fetchItem.js" e o configurado.

- Criar rota "fetchItem" no "functions" em "serverless.yml":

