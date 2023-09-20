const {readFileSync, writeFileSync} = require('fs')

console.log('Start')


const first = readFileSync('./NodeJS/content/first.txt', 'utf8')
const second = readFileSync('./NodeJS/content/second.txt', 'utf8')


writeFileSync('./NodeJS/content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag : 'a'}) //flag to append

console.log('Done with this task')
console.log('Starting with another')

