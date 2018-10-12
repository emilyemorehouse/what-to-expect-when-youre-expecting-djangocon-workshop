# ⚙️ Setup

## 📋 Requirements

It is recommended to bring a laptop running Mac, Windows or Linux. Chromebooks and tablets may have
limited functionality and may not be suitable for the entire workshop. If you don't have a laptop,
don't worry! We'll pair you up to work with someone who does.

You should come prepared with:

- Terminal of choice, running your shell of choice
- Text editor of choice
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Optional Requirements for Local Development:

The following items are optional -- you'll be able to follow along with the demo and example code if
you don't want to get all of these things set up

- [Node v8+](https://nodejs.org/en/download/)
- Node package manager of choice
  - [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
  - NPM
- [Node Canvas](https://github.com/Automattic/node-canvas#installation)

Optional Requirements for Containerized Development:

- [Docker](https://docs.docker.com/install/)

## 🔥 Quick Start

Double check that you have a proper Node version (8+):

```sh
⚡ node --version
v8.12.0
```

If testing locally, run the application you wish to test first!

### Using Yarn

```sh
⚡ yarn install  # Install dependencies
⚡ yarn generate-golden # Generate golden screenshots
⚡ yarn test # Run your tests
```

### Using NPM

```sh
⚡ npm install  # Install dependencies
⚡ npm run generate-golden  # Generate golden screenshots
⚡ npm run test  # Run your tests
```

## Dockerfile

From the `agnostic-visual-regression-testing/code` directory, run:

```bash
docker build -t visual-tests-example .
docker run visual-tests-example
```

## ▶️ Next up

[1 - Examining The Boilerplate](./01_examining_the_boilerplate.md)
