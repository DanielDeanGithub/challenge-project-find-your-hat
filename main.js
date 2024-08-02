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
        this.map = field;
        this._gameRun = false;
        this._player = [0,0];
    }
    
    get gameRun() {
        return this._gameRun;
    }

    set gameRun(gameRun) {
        this._gameRun = gameRun;
    }

    get player() {
        return this._player;
    }

    set player(player) {
        this._player = player;
    }


    playGame() {

        console.log('Time to find your hat!');
        console.log(`To begin please enter a direction (type 'N' for north, 'S' for South, 'E' for East or 'W' for West)\n`); 

        const mapArr = this.map.field;

        //console.log(this.gameRun);
        this.gameRun = true;
        //console.log(this.gameRun);

        //this.map.print()
        //console.log(mapArr.length);

        while(this.gameRun) {
            let userInput = prompt('Please enter a direction to explore:').toUpperCase();

            while (userInput !== 'N' && userInput !== 'S' && userInput !== 'E' && userInput !== 'W') {
                console.log(`Error. Please enter a valid direction ('N','S','E', or 'W')`);
                userInput = prompt('Please enter a direction to explore:').toUpperCase();
            }


            console.log(userInput);

            let x = this.player[0];

            let y = this.player[1];

            console.log(`x: ${x} - y: ${y}`);

            
            switch (userInput) {
                case 'N':
                    y--;   
                    break;
            
                case 'S':
                    y++
                    break;
                case 'E':
                    x++;
                    break;
            
                case 'W':
                    x--;
                    break;
                default:
                    break;
            }



            console.log(`x: ${x} - y: ${y}`);
            console.log(mapArr.length);
            

            this.map.print();

            this.gameRun = false;
        }
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
