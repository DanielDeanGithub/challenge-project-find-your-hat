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
        console.log('Time to find your hat!');
        console.log(`To begin please enter a direction (type 'N' for north, 'S' for South, 'E' for East or 'W' for West)\n`);
        
        
    }
};


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);



myField.print();