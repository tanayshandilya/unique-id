# Unique Id
A simple date based unique id package.

## How to install
```shell
npm i unique-id
```

## How to use
```JavaScript
const uniqueId = require('unique-id');
const randomId = uniqueId(); // 20210306224063LEXJ9S
```
# Id components

```
YYYY-MM-DD-HH-MM-{BASE36}
2021-03-06-22-40-63LEXJ9S
```