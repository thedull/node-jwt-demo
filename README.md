# node-jwt-demo

## To log in as admin

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"user1", "password":"Passw0rdAdmin"}' 'http://localhost:3000/login'
```

## To access the admin lounge

```bash
curl -X GET -H "Authorization: Bearer <jwt>" 'http://localhost:3000/admin'
```
