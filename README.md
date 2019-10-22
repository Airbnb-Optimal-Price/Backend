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

Requires header:
{ Authorization: token }

# GET USER BY ID

- Request

GET /api/users/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ user }

Requires header:
{ Authorization: token }

# UPDATE USER

- Request

PUT /api/users/:id

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{ user }

Requires header:
{ Authorization: token }

# DELETE USER

- Request

DELETE /api/users/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "message": "User deleted successfully." }

Requires header:
{ Authorization: token }

# GET LIST OF ALL LISTINGS FOR A USER

- Request

GET /api/users/:id/listing

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "listings": [] }

Requires header:
{ Authorization: token }

# GET LIST OF ALL LISTINGS

- Request

GET /api/listings/

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "listings": [] }

Requires header:
{ Authorization: token }

# GET LISTING BY ID

- Request

GET /api/listings/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ listing }

Requires header:
{ Authorization: token }

# POST LISTING

- Request

POST /api/listings/:id

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{ listing }

Requires header:
{ Authorization: token }

# UPDATE LISTING

- Request

PUT /api/listings/

- Response

HTTP 201 OK

Status: 201 OK
Content-Type: application/json
{ listing }

Requires header:
{ Authorization: token }

# DELETE LISTING

- Request

DELETE /api/listings/:id

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "message": "Listing deleted successfully." }

Requires header:
{ Authorization: token }

# SEND AIRBNB DETAILS TO RECEIVE SUGGESTED PRICE

- Request

POST /api/price

- Response

HTTP 200 OK

Status: 200 OK
Content-Type: application/json
{ "price": "`${suggestedprice}`" }

Requires header:
{ Authorization: token }
