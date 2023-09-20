const {readFile, writeFile} = require('fs')

console.log('Start')
readFile('./NodeJS/content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./NodeJS/content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./NodeJS/content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})
console.log("Starting the next task")
