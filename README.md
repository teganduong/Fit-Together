# Fit Together

> For those who love to breathe deep, get active, and stay connected, we offer you the experience that is sure to please: Fit Together. Fit Together integrates with your FitBit, your Move devices, or your phone to log real-time responses from your daily fitness regimen. We analyze that data to present personalized suggestions and statistics to help you stay on track with your goals. We also make fitness fun by inviting you to compete with friends, families, and anyone in the world with challenges and character leveling. Are you ready to Fit Together?

## Team

  - Tegan Duong
  - Lynn Chen
  - AJ Grande
  - Peter Chim

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 0.10.x
- Webpack

Webpack needs to be installed globally
```sh
sudo npm install -g webpack 
```

## Development

### Installing Dependencies

From within the root directory:

Install repo's dependencies:
```sh
npm install
```

To seed the database with example data:
```sh
npm run seed
```

To build and run:
```sh
npm start
```

Running the commmand may open your browser to localhost:3000,
just hit the refresh button once to see the page.

If you want to autoupdate on saved changes made to client files, run in a separate terminal window:
```sh
npm watch-c
```
You may need to refresh the browser to see it change.

If you want to autoupdate on saved changes made to server files, run in a separate terminal window:
```sh
npm watch-s
```

Before making any pull requests, be sure to run the command below to make sure no tests are broken and the linting is okay.
```sh
npm test
```

Also, after every rebase be sure to run 
```sh
npm start
```
to see check that the code still works.

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## TODO
UPDATE README 6/23/16
