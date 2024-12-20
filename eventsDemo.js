import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler ( name ) {
    console.log( 'Hello ' + name );
}

function farewellHandler ( name ) {
    console.log( 'Goodbye ' + name );
}

// Register events listeners
myEmitter.on( 'greet', greetHandler );
myEmitter.on( 'farewell', farewellHandler );

// Emit events
myEmitter.emit( 'greet', 'John Doe!' );
myEmitter.emit( 'farewell', 'John Doe!' );

// Error Handling
myEmitter.on( 'error', ( err ) => {
    console.log( 'An error occured:', err );
} );

// Simulate Error
myEmitter.emit( 'error', new Error( 'Critical Error 💣' ) );
