# NodeJs Express CRUD MongoDb Jwt

repository github : https://github.com/johnnyaustor/express-crud-mongodb-jwt

docker hub : https://hub.docker.com/repository/docker/johnnyaustor/agus-triantoro-api


## Description

mini project jenius agus triantoro. nodeJs ExpressJs CRUD menggunakan database MongoDb, token security jwt.

```
1. Create microseservices (nodejs) for CRUD operation and store in database (mongodb) for user data
2. User data: Id, userName, accountNumber, emailAddress, identityNumber
3. Protect the API with the authorization header
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dependency

```bash
$ docker run mongo
$ docker run johnnyaustor/agus-triantoro-api
```

mongodb://localhost:27017

## ENV

```
PORT=3000
MONGODB_DATASOURCE=mongodb://localhost:27017/agus_triantoro
```

## Endpoint

Host : http://localhost:3000

Header : `{ Authorization : Bearer {token} }`

Default User : 
```json
{
  "username": "admin",
  "password": "password"
}
```

| Action | Method | Auth | Endpoint | Desc |
| --- | --- | --- | --- | --- |
| Token | POST | N | /auth/token | Mendapatkan Token Authentication |
| User | POST | Y | /users | Membuat User Baru |
| User List | GET | Y | /users | Melihat Semua User |
| User Detail | GET | Y | /users/:id | Melihat Detail User |
| User Update | PATCH  | Y | /users/:id | Memperbaharui Detail User |
| User Delete | DELETE  | Y | /users/:id | Menghapus Detail User |