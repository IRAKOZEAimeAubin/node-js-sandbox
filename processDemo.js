// argv
console.log( process.argv );

// process.env
console.log( process.env.COMPUTERNAME ); // For MacOS try 'LOGNAME' instead of 'COMPUTERNAME'

// pid
console.log( process.pid );

// cwd()
console.log( process.cwd() );

// title
console.log( process.title );

// memoryUsage()
console.log( process.memoryUsage() );

// uptime()
console.log( process.uptime() );

// Events
process.on( 'exit', ( code ) => {
    console.log( `About to exit with code ${ code }...` );
} );

// exit()
process.exit( 0 );
