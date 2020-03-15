
## Get Route /
- Returns
```
{
  "message": "Jwt is working"
}
```

## Post Route /login
body (json)
username:string
password:string
- Returns (example)
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imdlcm8iLCJpYXQiOjE1ODQyMzQ3NTEsImV4cCI6MTU4NDIzODM1MX0.MVm3gTVgelE_n0iDYI2D9TMq49edpEGWabzHiNJcYS0"
}
```

## Post Route /register
body (json)

username:string
password:string
- Returns (example)
```
{
  "message": "User created correctly",
  "user": {
    "id": "5e6e44ca048aa60f49285fb2",
    "username": "dummy"
  }
}
```

## Any other get or post
header:
- Autorization: Bearer (access_token)