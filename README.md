# Unique Id
Collection of few useful id functions.

## How to install
```shell
npm i @tanayshandilya/unique-id
```
```shell
yarn add @tanayshandilya/unique-id
```

## How to use
```JavaScript
const { dateId, intId, base62Id } = require('unique-id');
const date_id = dateId(); // 20210306224063LEXJ9S
const int_id = intId(); // 39423541874 [default length: 12]
const b62_id = base62Id(); // x0SeEbRNcZRQ [default length: 12]

// or
import { dateId, intId, base62Id } from '@tanayshandilya/unique-id';
const date_id = dateId(); // 20210306224063LEXJ9S
const int_id = intId(); // 39423541874 [default length: 12]
const b62_id = base62Id(); // x0SeEbRNcZRQ [default length: 12]

// using minified mode for dateId
const id = dateId(true); // 2KUFLTFLAHTKN4MD 
```
## Id components

**DateId**
```
YYYY-MM-DD-HH-MM-{BASE36}
2021-03-06-22-40-63LEXJ9S
```

**IntId**
```
{0-9}(length)
39423541874
```

**Base62Id**
```
{0-9 a-z A-Z}(length)
x0SeEbRNcZRQ
```