# Vital Health

> The world of healthcare can be cluttered with unnecessary inefficiencies and noise when our main focus should be on the patients’ health. Vital Health is an electronic health record system that provides a smooth and seamless integration and interface for healthcare providers. The software allows access to evidence-based tools that providers can use to make decisions about a patient’s care. In addition, it automates and streamlines provider workflow.

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
