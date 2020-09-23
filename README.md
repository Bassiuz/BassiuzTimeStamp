#Bassiuz Time Stamp#

All 'origin' times of other time stamps do not make a lot of sense; so I created my own. Also, milliseconds is a very weird metric of time. Does anyone actually experience how long 1 millisecond is? Or how long 100 are? 

With the Bassiuz Time Stamp you can measure how often you can watch The Office US after eachother since I was born.

How to use:

```
const bassiuz = require('bassiuz-time-stamp');
const fun = bassiuz.now();
const fun2 = bassiuz.dateToBassiuzTime(new Date())

console.log(fun);
console.log(fun2);
```