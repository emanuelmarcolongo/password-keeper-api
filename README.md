<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



### <p align="center">Projeto desenvolvido com NestJs - Um framework <a href="http://nodejs.org" target="_blank">Node.js</a>  para criar aplicações eficientes e escaláveis</p>

    
    
## Sobre:

### <p align="center">Password-Keeper-Api</p>

Esta é uma API desenvolvida com o NestJS para uma aplicação de gerenciamento de senhas. Através desta API, o usuário pode se cadastrar, fazer login, salvar e recuperar senhas de diversas plataformas.

## Tecnologias

- NestJS
- Postgres
- Prisma
- JWT


## Documentação:

### `POST /auth/register`

<details>
  <summary>Exibir Detalhes:</summary>
  
  ### Endpoint para cadastrar um novo usuário.
#### Request Body:

```
{
"name": "Seu Nome"
"email": "exemplo@exemplo.com",
"password": "senha123"
}
```

#### Response Body:

```
{
  "id": 8,
  "name": "Your Name",
  "email": "exemplo.exemplo",
  "password": "encrypted password"
}
```
</details>




### `POST /auth/login`

<details>
  <summary>Exibir Detalhes:</summary>
  
  ### Endpoint para se logar na api.
#### Request Body:

```
{
"email": "exemplo@exemplo.com",
"password": "senha123"
}
```

#### Response Body:

```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYW51ZWwxMjMyMzEyMzEyMTIzMTMyMzNAZW1haWwuY29tIiwiaWQiOjgsImlhdCI6MTY4MzQxMzI1NCwiZXhwIjoxNjg0MDE4MDU0fQ.LNaUfZxP_XfHcJ3QbouhTwxIXMPba8xnP1f_l4jPRIc"
}
```
  
</details>



### Rotas autenticadas a partir de agora:

Header da Requisição no formato:

Authorization: Bearer {Token}


Onde {Token} = Acess Token gerado no POST auth/login

### `POST /credentials` 

<details>
  <summary>Exibir Detalhes:</summary>
  
  ### Endpoint para cadastrar nova senha.
#### Request Body:

```
{
"title": "Facebook",
"url": "https://www.facebook.com",
"username": "meu usuario",
"password": "senhadomeufacebook"
}
```

#### Response Body:

```
{
  "id": 8,
  "title": "Facebook",
  "url": "https://www.facebook.com",
  "username": "meu usuario",
  "password": "d06fdea33ef9c644cb457c0be6ebb3e70c6f43075d62148eb2ec760866fd4ca12a40b5823f05c8146354dd9518ed84dce34fd434048e14b353e1e50fdab23a5669b4dc37f87068f07ee00f85c4cd7b1c46240590d0b75432dd630bb7de7088e2f9f35e31e6a33de523651aa1590c6da1b93d0123f74a9270c6cb64402dbef64b28d455",
  "userId": 8
}
```
</details>




### `GET /credentials` 

<details>
  <summary>Exibir detalhes:</summary>
  
  ### Endpoint para resgatar senhas salvas do usuário.
#### Request Body: Null;

#### Response Body:

```
[
{
  "id": 8,
  "title": "Facebook",
  "url": "https://www.facebook.com",
  "username": "meu usuario",
  "password": "minha senha não criptografada",
  "userId": 8
},
{
  "id": 9,
  "title": "Gmail",
  "url": "https://www.google.com",
  "username": "meu usuario",
  "password": "minha senha não criptografada",
  "userId": 8
},
]
```
</details>




### `DELETE /credentials/:id` 

<details>
  <summary>Exibir Detalhes:</summary>
  
### Endpoint para deletar uma senha salva.

#### Ex.: /credentials/8

#### Response Body:

```
{
  "id": 8,
  "title": "Facebook",
  "url": "https://www.facebook.com",
  "username": "meu usuario",
  "password": "minha senha não criptografada",
  "userId": 8
}
```
</details>




## Instalação

1- Clone o repositório

```bash
$ git clone https://github.com/emanuelmarcolongo/password-keeper-api.git
```

2- Instale as dependências

```bash
$ cd password-keeper-api
npm install
```

3- Configure o arquivo .env na raiz do projeto de acordo com as suas configurações de banco de dados, JWT e Crypter:

Ver arquivo .env.example ou:

```
DATABASE_URL=postgres://usuario:senha@endereco:porta/database
JWT_SECRET=suachavejwtsecreta
CRYPTR_SECRET=suachavecryptersecreta
```

4- Rode a migração do prisma

```bash
npx prisma migrate:dev
```

5- Inicie o projeto

```bash
npm run start:dev
```


## Licença

Nest is [MIT licensed](LICENSE).
