function spiral(size) {
    let matrik = [];
    let count = 0;

    for (var i = 0; i < size; i++) {
        matrik[i] = []
        for (var j = 0; j < size; j++) {
            matrik[i][j] = count;
            count++;
        }

    }
    // console.log(matrik);


    let x = 0; let y = 0;
    let batasAtas = size;
    let batasBawah = 0;

    let result = []
    while (result.length < size * size) {

        for (; x < batasAtas; x++) {
            result.push(matrik[y][x]);

        }
        x--;
        y++;
        for (; y < batasAtas; y++) {
            result.push(matrik[y][x]);

        }
        y--;
        x--;
        for (; x >= batasBawah; x--) {
            result.push(matrik[y][x]);
        }
        x++;
        y--;
        for (; y > batasBawah; y--) {
            result.push(matrik[y][x]);
        }
        x++;
        y++;
        batasAtas--;
        batasBawah++;
       
    }


    console.log(result)

}
spiral(5);
spiral(6);
spiral(7);