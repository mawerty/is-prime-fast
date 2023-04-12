# is-prime-fast [![NPM version](https://img.shields.io/npm/v/is-prime-fast.svg?style=flat)](https://www.npmjs.com/package/is-prime-fast) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-prime-fast.svg?style=flat)](https://npmjs.org/package/is-prime-fast) [![NPM total downloads](https://img.shields.io/npm/dt/is-prime-fast.svg?style=flat)](https://npmjs.org/package/is-prime-fast) 
> Detect whether a value is an prime number.



## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install is-prime-fast 
```

## Usage

```js
var isPrime = require('is-prime-fast');


//it works with integers
isPrime(50);
//=> "I'm detecting non-prime behavior in this number." (every time you get random response)

// it also works with strings
isPrime("321");
//=> "I'm getting the sense that this number is composite."

//it also works with numbers written using words
isPrime("one hundred and eighteen");
//=> "I'm getting the feeling that this number is not a prime."

// It also works with almost every language:

//German
isPrime('vierundzwanzig');// 24
//=> "I don't think this is a prime."

//Spanish 
isPrime("sesenta y ocho");// 68
//=> "It appears that this number is not a prime."

//Polish
isPrime("Sześćdziesiąt dziewięć") // 69
//=> "This number isn't showing any prime-like properties."

//And sometimes it doesn't work
isPrime(7)
//=> "This number doesn't seem to fit the definition of a prime."

```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).


### Running tests
Bruh, who needs tests?

### Author

**Krzysztof Pniaczek**

* [github/mawerty](https://github.com/mawerty/)

### License

Copyright © 2023, [Krzysztof Pniaczek](https://github.com/mawerty/).
Released under the [Beerware License (Modified)](LICENSE).
