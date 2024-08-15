class Seat {
    constructor() {
        this.isAvailable = true;
    }
}

class Cinema {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.seats = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < columns; j++) {
                row.push(new Seat());
            }
            this.seats.push(row);
        }
    }

    reserve(column, row) {
        if (row < this.rows && column < this.columns && this.seats[row][column].isAvailable) {
            this.seats[row][column].isAvailable = false;
            console.log(`seat at row ${row}, column ${column} reserved`);
        } else {
            console.log(`seat at row ${row}, column ${column} is already reserved or out of range`);
        }
    }

    showCine() {
        let board = "";
        for (let j=0; j<this.columns; j++) {
            board += `  ${j}`;
        }
        board += "\n";
        for (let i = 0; i < this.rows; i++) {
            board += `${i}`;
            for (let j = 0; j < this.columns; j++) {
                board += this.seats[i][j].isAvailable ? `[${j},${i}]` : "[X]";
            }
            board += "\n";
        }
        console.log(board);
    }
}

const cine = new Cinema(2, 2); 
cine.showCine(); 
cine.reserve(0, 0); 
cine.showCine(); 
cine.reserve(0, 1); 
cine.showCine(); 
cine.reserve(0, 0); 
cine.showCine(); 
cine.reserve(8, 8); 
cine.showCine(); 