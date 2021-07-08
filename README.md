# Drag and Drop PoC

## Backend

### Prerequisites

- a running PostgreSQL database instance
- Node v14+ for es modules

### Setting up the database

`backend/database/` has two files in it, a schema which contains the table structure and some sample data. You can use `psql` to set this up like so:

`cd backend/database/`

then

`psql -h [hostname] -U [username] -W -d [database] < schema.sql`

and then

`psql -h [hostname] -U [username] -W -d [database] < sample-data.sql`

### Running the backend

First step is to create a `.env` file based on the `.env.sample`. This file will contain the credentials for the database connection. Just put the file next to the sample in `backend/`. Then you can

`yarn && yarn start`

## Frontend

### Running the frontend

`yarn && yarn start`

### Running tests

`yarn test`
