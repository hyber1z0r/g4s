# G4S Node.js API

[![Latest Version](https://img.shields.io/npm/v/g4s/latest)](https://www.npmjs.com/package/g4s/v/latest)
[![License](https://img.shields.io/github/license/hyber1z0r/g4s)](./LICENSE.md)

An **EXPERIMENTAL** node.js package for using the G4S API.
It is still under development, so a lot of features may not be supported _yet_.

**DISCLAIMER:** This package is **NOT** affiliated with G4S SECURITY SERVICES A/S or it's affiliates.
 It is a open source package being developed for **fun**.

## Installation

First - this package is not 100% stable.
Please **DO NOT** use it if you cannot afford to face breaking changes in the future.

```sh
# if you prefer npm
npm install --save g4s

# if you prefer yarn
yarn add g4s
```

## Usage

First, instantiate the G4S class as follows:

```js
const G4S = require('g4s');

const g4s = new G4S('email', 'password');

// Do whatever you want on the g4s instance, like arm the alarm:
g4s.armPanel()
  .then(() => {
    console.log('Alarm armed');
  })
  .catch(console.error.bind(console));
```

## Motivation

The motivation behind this project was to engage with the G4S to create a homebridge plugin, 
so that I could manage my alarm straight in the Home app on my Apple Devices instead of using the G4S app.

## Related Work

- [G4S homebridge plugin by @hyber1z0r](https://www.npmjs.com/package/homebridge-g4s-alarm)
