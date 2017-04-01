const fs = require('fs')
const path = require('path')

function *generatorReturn(value) {
  yield value
}

function getDirectories (srcpath) {
  fs.readdir(srcpath, (err, files) => {
      for(let i=0; i < files.length; i++) {
          let file = generatorReturn(files[i])
          console.log(file.next().value)
      }
  })
}

console.log(getDirectories('../../'));