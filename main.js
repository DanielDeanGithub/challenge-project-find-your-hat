const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        this.field.forEach(row => console.log(row.join('')));
    }

    playGame() {
        
    }
};


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

console.log('Time to find your hat!\n');

myField.print();