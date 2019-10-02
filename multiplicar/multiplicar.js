const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit) => {
    
    
    for(let i = 0; i < limit; i++){
            
            console.log(`${base} * ${i} = ${(base*i)} \n` )           
            
        };
    
    
//     return new Promise((resolve, reject) => {
//         
//         if (!Number(base) || !Number(limit)) return reject(`Both base: ${base} & limit: ${limit} MUST to be an integer`)
//         
//         let data = '';
// 
//         for(let i = 0; i < limit; i++){
//             
//             data += `${base} * ${i} = ${(base*i)} \n` 
//             
//         };
//         
//          return resolve(console.log(data)); 
//          
//     });
}

let createFile = (base, limite) => {
// module.exports.createFile = (base) => {
    
    return new Promise((resolve, reject) => {
        
        if (!Number(base)) return reject(`La base ${base} no es un numero`)
        
        let data = '';

        for(let i = 0; i < limite; i++){
            
            data += `${base} * ${i} = ${(base*i)} \n` 
            
        };

        fs.writeFile(`Tablas/tabla_${base}.txt`, data, (err) => {
            
            if (err) reject(err)
            else resolve(`tabla_${base}.txt`)     
            
        });
                   
    });
    
}


module.exports = {
    createFile,
    listTable    
};

