console.log('Hello world')

const variable = 'this file will just fuck over'
variable.trim()

function something(string) {
  return string.toUpperCase()
}

(function() { return something(variable)})()
