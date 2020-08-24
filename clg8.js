function pola(str) {
    let misteri = str.replace("*", " ").replace("=", " ").split(" ");
    // console.log(misteri)
    // console.log(misteri)
    let tebak1 = "";
    multiply = "";
    let tebak2 = "";

    for (let i = 0; i < 10; i++) {
        tebak1 += misteri[0].replace("#", i);
        // console.log(tebak1)

        multiply += tebak1 * misteri[3]

        for (let j = 0; j < 10; j++) {
            tebak2 += misteri[6].replace("#", j);
            // console.log(multiply +" "+ tebak2)
            if (multiply === tebak2) {
                return [i, j];
            }
            tebak2 = "";
        }

        tebak1 = "";
        multiply = "";


    }

}
    console.log(pola("42#3 * 188 = 80#204"));
    console.log(pola("8#61 * 895 = 78410#5"));


