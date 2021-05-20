# node-jwt-demo

## To log in as admin

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"user1", "password":"Passw0rdAdmin"}' 'http://localhost:3000/login'
```

## To access the admin lounge

```bash
curl -X GET -H "Authorization: Bearer <jwt>" 'http://localhost:3000/admin'
```

### Docker
```bash
docker build . -t thedull/node-jwt-demo  
docker run -p 3001:3000 -u "node" -v ~/Projects/node-jwt-demo:/usr/src/app -d --name "node-jwt-demo" --init  thedull/node-jwt-demo  
```

### Based on
https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
