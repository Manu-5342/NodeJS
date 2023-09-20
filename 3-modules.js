
const name = require('./4-name.js') 
const sayHi = require('./5-utils.js')
const item = require('./6-alternative-flavour.js')
console.log(item)

for (x of item.items){
    sayHi(x)
}


for (x in name){
    sayHi(x)
}

require('./7-mind-grenade.js')