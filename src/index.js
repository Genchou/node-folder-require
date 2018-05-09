const fs = require('fs')

/**
 *
 * @param dirname
 * @returns {Promise<any>}
 */
module.exports = function (dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, entries) => {
      if (err) {
        reject(err)
        return
      }
      const result = entries.map(entry => {
        const moduleName = entry.split('.js').shift()
        try {
          const module = require(`${dirname}/${entry}`)
          return { name: moduleName, module: module }
        } catch (err) {
          return false
        }
      })
      resolve(result.filter(r => r))
    })
  })
}
