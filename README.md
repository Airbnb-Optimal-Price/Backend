# Backend

API Endpoints for "Airbnb Optimal Price"

REST API
The endpoints, their status and response values are described below.

# REGISTER A USER

- Request

POST /api/auth/register

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{ "message": "User has been created" }

# LOGIN WITH A REGISTERED USER

- Request

POST /api/auth/login

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "message": "Welcome `${user.username}!`, token" }

# GET LIST OF ALL USERS

- Request

GET /api/users/

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "users": [] }

# SEND AIRBNB DETAILS TO RECEIVE SUGGESTED PRICE

- Request

POST /api/price

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "price": "`${suggestedprice}`" }
