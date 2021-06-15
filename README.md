# Task Manager API with AdonisJS

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Manually clone the repo and then run 
```bash
npm install
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Anthentication

```
API authentication is based on BearerJWT.
The authentication token must be informed with the prefix "Bearer".
If the token is not provided, or is invalid, the API will return status code 401.
```


### Routes

## Auth

```
    POST /auth : Return authentication token

    Response status:
        - 200: Login successfully;
        - 404: User not found;
        - 401: Incorrect password;
```

## Users
```
GET /users : Return all users

    Response status:
        - 200: No errors occurred;
        - 500: API has encountered a situation it does not know how to handle;
```

```
GET /users/:id : Returns a specific user

    Response status:
        - 200: No errors occurred;
        - 404: User not found;
        - 500: API has encountered a situation it does not know how to handle;
```

```
POST /users : Create a new user

    Response status:
        - 200: No errors occurred and the resource was created;
        - 400: Invalid fields passed in payload(body);
        - 409: There is already a user with the email informed registered;
        - 500: API has encountered a situation it does not know how to handle;
```

```
PUT /users/:id : Update a user

    Response status:
        - 200: No errors occurred and the resource was created;
        - 400: Invalid fields passed in payload(body);
        - 409: There is already a user with the email informed registered;
        - 500: API has encountered a situation it does not know how to handle;
```

```
DELETE /users/:id : Delete a user

    Response status:
        - 200: No errors occurred and the resource was deleted;
        - 404: User not found;
        - 500: API has encountered a situation it does not know how to handle;
```


## Tasks
```
GET /tasks : Return all tasks

    Response status:
        - 200: No errors occurred;
        - 500: API has encountered a situation it does not know how to handle;
```

```
GET /tasks/:id : Returns a specific task

    Response status:
        - 200: No errors occurred;
        - 401: Not authorized;
        - 404: Task not found;
        - 500: API has encountered a situation it does not know how to handle;
```

```
POST /task : Create a new task

    Response status:
        - 200: No errors occurred and the resource was created;
        - 400: Invalid fields passed in payload(body);
        - 401: Not authorized;
        - 500: API has encountered a situation it does not know how to handle;
```

```
PUT /tasks/:id : Update a task

    Response status:
        - 200: No errors occurred and the resource was created;
        - 400: Invalid fields passed in payload(body);
        - 401: Not authorized;
        - 500: API has encountered a situation it does not know how to handle;
```

```
DELETE /tasks/:id : Delete a task

    Response status:
        - 200: No errors occurred and the resource was deleted;
        - 401: Not authorized;
        - 404: Task not found;
        - 500: API has encountered a situation it does not know how to handle;
```



