import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Define the ready state change event listener
myEmitter.on('readystatechange', (state) => {
  console.log(`Ready state changed to: ${state}`);
});

// Simulate state changes
myEmitter.emit('readystatechange', 'loading');
setTimeout(() => myEmitter.emit('readystatechange', 'interactive'), 1000);
setTimeout(() => myEmitter.emit('readystatechange', 'complete'), 2000);