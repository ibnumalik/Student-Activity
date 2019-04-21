# Student Activity App

In this simple app, students can rent a parking space, view their seminar schedule and order result transcript from their institution.

<sub>This app was built to practice my Angular.js knowledge.</sub>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you can run this app, you need several things installed.

1. Node.js with npm.

    1.1. Go through the [official website](https://nodejs.org/en/) to install Node.js.

    1.2. If you have installed it then check whether it is properly installed using this command.

    ```shell
    $ node -v
    $ npm -v
    ```
2. Docker

    2.1. Download Docker [here](https://www.docker.com/community-edition) and make sure to follow the guide, as it will install `docker-compose` too.

    2.2. If you go through the official guide of installation, then you probably have run the `hello-world` example. But, if still in doubt whether Docker properly installed or not just run this command to check.

    ```
    $ docker --version
    $ docker-compose --version
    ```

### Installing

Alright, here we go. Let's install our app and get started!

1. First step is to clone this project.

    ```
    git clone https://github.com/ibnumalik/Student-Activity.git my-project
    ```

2. Change directory to the cloned project.

    ```
    cd /path/to/my-project
    ```

    2.1. Install npm dependencies
    ```
    npm install
    ```

    2.2. Download and start Docker in background.
    ```
    docker-compose up -d
    ```

### Starting development

To start development server and see how it run

```
npm run dev
```

The server will run on port `8008`. Open `http://localhost:8008` on your browser.

## Built With

**Front End**
- Angular.js
- Angular Material
- TypeScript
- Webpack

**Back End**
- Docker
- Nginx
- PHP
- SQLite

## Issues

- Sometimes there is problem saving data to SQLite due to permission issues. For the time being the workaround is to change the permission to 777.

```
chmod 777 database/portal.db
```

## Todo

- [x] Separate HTTP call in component to service
- [ ] Upgrade ng-annotate-loader to babel-plugin-angularjs-annotate

## License

This project is licensed under the MIT License.
