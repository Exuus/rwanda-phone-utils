# @exuus/rwanda-phone-utils

This is a simple npm package that validates and format the structure of phone numbers from Rwanda.

[![NPM](https://nodei.co/npm/@exuus/rwanda-phone-utils.png)](https://nodei.co/npm/@exuus/rwanda-phone-utils/)

## Installation

```cli
npm install @exuus/rwanda-phone-utils
```

or

```cli
yarn add @exuus/rwanda-phone-utils
```

## Basic Usage

```js
// Load full build
import phoneUtils from "@exuus/rwanda-phone-utils";

phoneUtils("0780000000")
// {
//     isValid: true,
//     error: null,
//     normalized: "0780000000",
//     formatted: "(+250) 780 000 000",
//     telco: "MTN",
//     short: "780000000",
//     dashed: "+(250)-780-000-000",
//     format: function
// }

phoneUtils("80000000");
// {
//     isValid: false,
//     error: "Phone number is invalid",
//     normalized: null,
//     formatted: null,
//     unformatted: 80000000,
//     telco: null,
//     short: null,
//     dashed: null
//     format: function
// }
```

# Format
Get the formatted phone number according to the option (shape) passed in.

```js 
phoneUtils("+250780000000").format() // default
// 780000000

phoneUtils("+250788000000").format("dashed-normalized")
// 0780-000-000
```


List of all available formats

| **Format**             | **Output**           |
|------------------------|----------------------|
| `short`                | 780000000            |
| `normalized`           | 0780000000           |
| `unformatted`          | 250780000000         |
| `dashed`               | +(250)-795-844-487   |
| `dashed-short`         | 795-844-487          |
| `dashed-normalized`    | 0795-844-487         |
| `dashed-unformatted`   | 250-795-844-487      |
| `space`                | +(250) 795 844 487   |
| `space-short`          | 795 844 487          |
| `space-normalized`     | 0795 844 487         |
| `space-unformatted`    | 250 795 844 487      |


Formatting an invalid number will give your an error message 
```js
phoneUtils("+1780000000").format("short")
// Phone number is invalid
```


# Contributors

| [<span><img src="https://github.com/eliemugenzi.png" width="100px;"><div><sub><b>Elie Mugenzi</b></sub></div></span>](https://github.com/eliemugenzi) | [<span><img src="https://github.com/dusmel.png" width="100px;"><div><sub><b>Hadad <img src="https://img.icons8.com/office/12/000000/twitter.png"/></b></sub></div></span>](https://twitter.com/hadad__) |
| ------------------------ | ------------------------------ |


## Licence

MIT

## Author

Elie Mugenzi
