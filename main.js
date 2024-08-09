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
        this._map = field;
        this._preview = new Field(JSON.parse(JSON.stringify(field.field)));
        this._gameRun = false;
        this._player = [0,0];
    }
    
    get map() { return this._map; }
    get gameRun() { return this._gameRun; }
    set gameRun(gameRun) { this._gameRun = gameRun; }
    get player() { return this._player; }
    set player(player) { this._player = player; }
    get preview() { return this._preview; }
    set preview(preview) { this._preview = preview; }

    resetPreview() {
        return this.preview.field.forEach((row, i) => {       
            row.forEach((e,j) => {
                if (e != pathCharacter) {
                    this.preview.field[i][j] = fieldCharacter;
                }
            });    
        });
    }

    playGame() {
        this.resetPreview();
        console.log(`Time to find your hat!\nTo begin please enter a direction (type 'W' for up, 'A' for left, 'S' for down or 'D' for right)`); 

        this.preview.print();
        const mapArr = this.map.field;
        this.gameRun = true;

        while(this.gameRun) {
            let userInput = prompt('Please enter a direction to explore:').toUpperCase();
            
            while (userInput !== 'W' && userInput !== 'A' && userInput !== 'S' && userInput !== 'D') {
                console.log(`Error. Please enter a valid direction ('W','A','S', or 'D')`);
                userInput = prompt('Please enter a direction to explore:').toUpperCase();
            }

            let x = this.player[0];
            let y = this.player[1];
            
            switch (userInput) {
                case 'W':
                    y--;   
                    break;
                case 'A':
                    x--;
                    break;
                case 'S':
                    y++
                    break;
                case 'D':
                    x++;
                    break;
                default:
                    break;
            }

            // error checking to make sure movement is within bounds
            if (y > 0 && y < mapArr.length || x > 0 && x < mapArr[y].length) {
                if (mapArr[y][x] === hole) {
                    console.log('You fell down a hole. Game over =[');
                    return this.gameRun = false;
                }
                
                if (mapArr[y][x] === hat) {
                    console.log('You found your hat, Congratulations!!!');
                    return this.gameRun = false;
                }

                console.log('The search continues...')
                this.player = [x,y];
                this.preview.field[y][x] = pathCharacter;
                this.preview.print();

            } else {
                console.log('Ouch! You just walked into a walk.');
            }          
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