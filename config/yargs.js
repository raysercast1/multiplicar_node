const opts = {
    base:{
            demand:true,
            alias:'b'
            
        },
        limite:{
            alias: 'l',
            default: 10
        }    
}

const argv = require("yargs")
    .command('list','print a multiplication list',opts)
    .help()
    .argv; 

    
module.exports = {
    argv  
};
