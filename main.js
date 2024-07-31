const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }
    set field(newField) {
        this._field = newField;
    }

    print() {
        this.field.forEach(row => console.log(row.join('')));
    }
};


class Game {
    constructor(field) {
        this.field = field;
        this._gameRun = false;
        this._player = [0,0];
    }
    
    get gameRun() {
        return this._gameRun;
    }

    set gameRun(gameRun) {
        this._gameRun = gameRun;
    }


    playGame() {

        console.log('Time to find your hat!');
        console.log(`To begin please enter a direction (type 'N' for north, 'S' for South, 'E' for East or 'W' for West)\n`); 


        //console.log(this.gameRun);
        this.gameRun = true;
        //console.log(this.gameRun);

        //console.log(this.field.field[0][0])

    }



};



const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

const hatGame = new Game(myField);


hatGame.playGame();

//hatGame.field.print();
