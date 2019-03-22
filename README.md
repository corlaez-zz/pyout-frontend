# **_Overko Demo_**

[![CircleCI](https://circleci.com/gh/lrn2prgrm/pyout-frontend.svg?style=svg)](https://circleci.com/gh/lrn2prgrm/pyout-frontend)

A sample adset app written with Typescript, Knockout and [Overko](https://github.com/lrn2prgrm/overko). Intended to be used with a python backend.

### Requirements

1. Make sure you have node installed. We are using Node 15.
2. npm install

### Run development server

- npm start

### Build project

- npm run build

### Overko config

You can find it on src/overko the apis are similar to Overmind.js api's.

Some key differences with Overmind:

- I decided not to run onInitialize when the instance is created. You have to manually call onInitialize.
- I decided not to include Derive<>, Operators (Functional actions), namespaced configs and made some simplifications in other parts of the code. In some cases because I think that it won't be necessary with Knockout's Observables in others for simplicity sake (This might change with time).
- Overko is tightly coupled with Knockout because it relies on it. This means the code is simpler and there is no binding library.
- Overko needs to be refined, it needs more tests that can catch bugs, and probably features to give the best experience to Knockout users (I am not very familiar with Knockout yet).
