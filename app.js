// si despues de const o let vienen { } es una Destructuracion de objetos
const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const {createFile} = require('./multiplicar/multiplicar')
const {listTable} = require('./multiplicar/multiplicar')

let base = argv.base;

let limite = argv.limite;

let commando = argv._[0];


switch(commando){
    case 'list':
        console.log(listTable(base,limite))
        break;
    case 'create':
        createFile(base, limite).then((file) => console.log(colors.rainbow(`File has been create ${file}`))).catch(e => console.log(e))
        break;
    default:
        console.log('command no recognize');
           
}



// let parametro = argv[2];
// let base = parametro.split('=')[1]

// let data = '';
// 
// for(let i = 0; i < 10; i++){
//     
//     data += `${base} * ${i} = ${(base*i)} \n` 
//     
// };
// 
// fs.writeFile(`Tablas/tabla_${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log('The file has been created!');
// });

