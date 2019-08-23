# ga-project-3-animeDB-api

This website is a database of anime and users. the users will be able to create lists of their favorites as well as what anime they are currently watching.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- node.js

### Installing

1. fork and clone this repo

1. cd to ga-project-3-animeDB-api

1. run npm install

## Running the tests

REST routes for Anime model:
path: `api/anime`

| URL            | Path            | Method | Action       | Description                          |
| -------------- | --------------- | ------ | ------------ | ------------------------------------ |
| `/anime`       | `/`             | `GET`  | #index       | List of all Anime                    |
| `/anime/id`    | `/id/:id`       | `GET`  | #findId      | Find one Anime by ID                 |
| `/anime/new`   | `/new`          | `POST` | #create      | Create a new Anime                   |
| `/anime/title` | `/title/:title` | `PUT`  | #updateTitle | Update existing Anime entry by title |
| `anime/id`     | `/id/:id`       | `PUT`  | #updateId    | Update existing Anime entry by id    |

REST routes for User model:
path: `/api/users`

| URL               | Path          | Method   | Action     | Description                                     |
| ----------------- | ------------- | -------- | ---------- | ----------------------------------------------- |
| `/users`          | `/`           | `GET`    | #index     | List of all Users                               |
| `/users/ref/`     | `/ref/:email` | `GET`    | #getbyref  | Get user by email                               |
| `/users/acc/`     | `/acc/:email` | `GET`    | #getbyacc  | Get user by email used for UserAuth             |
| `/users/signup/`  | `/signup`     | `POST`   | #signUp    | Add new user to database                        |
| `/users/login`    | `/login`      | `POST`   | #login     | User Authentication                             |
| `/users/acc`      | `/acc/:email` | `PUT`    | #update    | Update User entry by email                      |
| `/users/id`       | `/id/:id`     | `DELETE` | #delete    | Remove user from dateabase by id                |
| `users/deleteall` | `/deleteall`  | `DELETE` | #deleteAll | Empty user database (for testing purposes only) |

## Deployment

Deployed with Heroku with the database hosted on MongoDB Atlas

## Built With

- [Heroku](https://www.heroku.com/home) - Deployment Service
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud based Database

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Keene Wong** - User Authentication - Creator - [KeeneWong](https://github.com/KeeneWong)

- **Kyle Clabough** - Initial Development - Creator - [SirAirdude](https://github.com/SirAirdude)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Data obtained from James Harris' [Kitsu-api](https://kitsu.docs.apiary.io/#introduction/json-api)
