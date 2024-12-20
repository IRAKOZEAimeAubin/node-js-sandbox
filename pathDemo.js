import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath( import.meta.url );

// basename()
// console.log( path.basename( __filename ) );

// dirname()
// console.log( path.dirname( __filename ) );

// extname()
// console.log( path.extname( __filename ) );

// parse()
// console.log( path.parse( __filename ) );

// join()
// const filePath = path.join( path.dirname( __filename ), path.basename( __filename ) );
// console.log( filePath );

// resolve
const filePath = path.resolve( path.dirname( __filename ), path.basename( __filename ) );
console.log( filePath );
