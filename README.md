# rwanda-phone-utils

This is a simple npm package that validates the structure and format phone numbers from Rwanda.

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
import phone from "@exuus/rwanda-phone-utils";

console.log(phone("0780000000"));
// {
//     isValid: true,
//     error: null,
//     normalized: "0780000000",
//     formatted: "(+250) 780 000 000",
//     telco: "MTN",
//     short: "780000000",
//     dashed: "+(250)-780-000-000",
// }

console.log(phone("80000000"));
// {
//     isValid: false,
//     error: "Phone number is invalid",
//     normalized: "80000000",
//     formatted: null,
//     telco: null,
//     short: null,
//     dashed: null
// }
```

# Methods

## isValid()

```js
import { isValid } from "@exuus/rwanda-phone-utils";

console.log(isValid("0780000000"));
// true
```

Or

```js
phone("0780000000").isValid;
```

## format()

```js
import { format } from "@exuus/rwanda-phone-utils";

console.log(format("0780000000"));
// "(+250) 780 000 000"
```

Or

```js
phone("0780000000").formatted;
```

## normalize()

```js
import { normalize } from "@exuus/rwanda-phone-utils";

console.log(normalize("0780000000"));
// "0780000000"
```

Or

```js
phone("0780000000").normalized;
```

## short()

```js
import { short } from "@exuus/rwanda-phone-utils";

console.log(short("0780000000"));
// "780000000"
```

Or

```js
phone("0780000000").short;
```

## telco()

```js
import { telco } from "@exuus/rwanda-phone-utils";

console.log(telco("0780000000"));
// "MTN"
```

Or

```js
phone("0780000000").telco;
```

## telco()

```js
import { dashed } from "@exuus/rwanda-phone-utils";

console.log(dashed("0780000000"));
// "+(250)-780-000-000"
```

Or

```js
phone("0780000000").dashed;
```

## phone()

```js
import phone from "@exuus/rwanda-phone-utils";

console.log(phone("0780000000"));
// {
//     isValid: true,
//     error: null,
//     normalized: "0780000000",
//     formatted: "(+250) 780 000 000",
//     telco: "MTN",
//     short: "780000000",
//     dashed: "+(250)-780-000-000"
// }
```

# Contributors

| [<img src="https://github.com/eliemugenzi.png" width="100px;"><br><sub><b>Elie Mugenzi</b></sub>](https://github.com/eliemugenzi) |
| :-------------------------------------------------------------------------------------------------------------------------------: |

## Licence

MIT

## Author

Elie Mugenzi
