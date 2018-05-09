const folderRequire = require('../src')
const path = require('path')

const container = {}

folderRequire(path.join(__dirname, 'modules'))
  .then(modules => {
    console.log(modules)
    modules.forEach(module => {
      container[module.name] = module.module
    })
    console.log(container)
    console.log(container.test3(5))
    console.log(container.test5)
  })
  .catch(err => console.error(err))
