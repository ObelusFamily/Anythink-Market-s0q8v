# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. From the root directory, run `docker-compose up`. You'll need to wait while docker pulls the containers required to run both the front and and the back end - go grab a drink of water or a cup of coffee.
2. When complete, visit `http://localhost:3000/api/ping` to ensure that the back end is working.
  a. Note that you may see an error screen because there are database migrations that need to run - click the red button to run these migrations.
3. Pong! Backend working - time to test the front end. Go to `http://localhost:3001/register` and you should see a registration screen. Create a username and password.
