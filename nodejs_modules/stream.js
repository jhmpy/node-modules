/*

MODULE: stream

DESCRIPTION: The stream module provides an interface for streaming data from one place to another.

*/


const { Readable, Writable, Transform } = require('stream');

// Example of a Readable stream
class MyReadable extends Readable {
  constructor(options) {
    super(options);
    this.index = 0;
  }

  _read() {
    if (this.index > 4) {
      this.push(null);
    } else {
      const chunk = ' ' + ++this.index;
      this.push(chunk);
    }
  }
}

const readable = new MyReadable();
readable.on('data', chunk => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

// Example of a Writable stream
class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    console.log(`Received ${chunk.length} bytes of data.`);
    callback();
  }
}

const writable = new MyWritable();
writable.write('Hello');
writable.write('World');
writable.end();

// Example of a Transform stream
class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = chunk.toString().toUpperCase();
    this.push(transformed);
    callback();
  }
}

const transform = new MyTransform();
transform.write('Hello');
transform.write('World');
transform.end();
transform.on('data', chunk => {
  console.log(`Received transformed chunk: ${chunk}`);
});
