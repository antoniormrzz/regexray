# regexray
[![npm version](https://badge.fury.io/js/regexray.svg)](https://badge.fury.io/js/regexray)
<span class="badge-patreon"><a href="https://patreon.com/antoniormrzz" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span> <br/>

A RegEx object scanner, scans JS object string fields for RegEx patterns and gives information about matches. Think X-Ray checkpoint for JS objects.
This package will be used for a complete rewrite of [express-autosanitizer](https://www.npmjs.com/package/express-autosanitizer), a popular tool that cleans xss injections from express requests.

## Support Me
If this does help you, please consider making a tiny donation [here,](https://www.patreon.com/bePatron?u=44856855) even small amounts help! 🤝

# Why RegEx-Ray?
-   Straightforward, easy to use.
-   Provides typescript types and ts file (inside /lib)
-   Provides es6 module (default is commonjs, es6 file under /lib)
-   Async
-   Is tested and passing all tests, ~94% coverage.
-   Made with [object-rover](https://www.npmjs.com/package/object-rover)

## Getting Started

```
npm i regexray
```

### Function
Takes one object and an array of RegEx patterns, then scans all string properties on the object (yes, nested ones too) for matches of any patterns in the array. The result is always an array. If not empty, the result will be an array of objects that have path ([object-rover](https://www.npmjs.com/package/object-rover) paths, if you need to access them, you can use object-rover's getProperty) and log (RegEx match result). See Example below.

```
declare function scan(
  obj: object,
  regexArray: RegExp[]
): Promise<
  {
    path: string;
    log: RegExpMatchArray;
  }[]
>;
```

### Example:

```
const regexray = require('regexray');

const testObj = {
		foo:  'string one hello',
		bar: {
		 a: {
		  b:  'hello'
		 },
		 c:  'hello there general kenobi'
		}
	  };
	  
await regexray(testObj,[/el/,/ken/])

result: 

 [
  {
    path: 'foo',
    log: [ 'el', index: 12, input: 'string one hello', groups: undefined ]
  },
  {
    path: 'bar.c',
    log: [
      'el',
      index: 1,
      input: 'hello there general kenobi',
      groups: undefined
    ]
  },
  {
    path: 'bar.c',
    log: [
      'ken',
      index: 20,
      input: 'hello there general kenobi',
      groups: undefined
    ]
  },
  {
    path: 'bar.a.b',
    log: [ 'el', index: 1, input: 'hello', groups: undefined ]
  }
]
```

### Why?
I believe this could be used for checking undesired patterns backend and frontend (e.g. check request body for profanity). Any time you need to check to see if a RegEx pattern exists on an object, you can use this package.

## License

Distributed under the MIT License. See  `LICENSE`  for more information.

## Contact

Antonio Ramirez:  [sepehralizade@live.com](mailto:sepehralizade@live.com)

Project Link:  [Github](https://github.com/antoniormrzz/regexray)
