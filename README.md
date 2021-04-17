# Unique Id
A simple date based unique id package.

## How to install
```shell
npm i @tanayshandilya/unique-id
```
```shell
yarn add @tanayshandilya/unique-id
```

## How to use
```JavaScript
const uniqueId = require('unique-id');
const id = uniqueId(); // 20210306224063LEXJ9S

// or
import uniqueId from '@tanayshandilya/unique-id';
const id = uniqueId();

// using minified mode
const id = uniqueId(true); // 2KUFLTFLAHTKN4MD 
```
## Id components

```
YYYY-MM-DD-HH-MM-{BASE36}
2021-03-06-22-40-63LEXJ9S
```