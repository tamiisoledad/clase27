const yargs = require('yargs/yargs')(process.argv.slice(2))
/* const args = yargs.default({
    nombre: 'pepe',
    apellido: 'copado'
  })
    .argv */

/* const args = yargs.alias({
    n: 'nombre',
    a: 'apellido'
  })
    .argv */

const args = yargs
.boolean('vivo')
.argv

console.log(args)




