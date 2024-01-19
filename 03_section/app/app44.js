// 44. Events Emitter - Additional Info

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data Recieved user ${name} with id: ${id}`);
});
customEmitter.on('response', () => {
    console.log(`Some other logic here`);
});

customEmitter.emit('response', 'kerim', 27);