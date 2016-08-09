'use strict';

import { hello, HelloWorld } from './hello';
import Bye from './hello'

console.log('start!!');

const fruits = ['apple', 'orange', 'kiwi'];
const f = fruits.map((x) => x.toUpperCase());

console.log(f);
