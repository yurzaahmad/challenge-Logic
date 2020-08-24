

class tyre {
    constructor(merek, size){
    this.merek = merek;
    this.ukuran = size;
    }
}

class Car {
    constructor(merkBan, ukuranBan, pintu, kursi, tahun, warranty){
        // super(merek, size)
        this.ban = new tyre (merkBan, ukuranBan);
        this.pintu = pintu;
        this.kursi = kursi;
        this.tahun = tahun;
        this.warranty = warranty;
    }

}

class pajero extends Car {
    constructor(tahun){
    super("dunlop", '245/45', 4, 8, tahun);
    this.model = 'Pajero';
    this.warranty = 3;
    }
}
// const mobil1 = new pajero("dunlop", 245/45, 4, 8)

class fortuner extends Car {
    constructor(tahun){
        super("dunlop", '245/45', 4, 8, tahun );
        this.model = 'Fortuner';
        this.warranty = 4;
    }
}

class carFactory{
    constructor(){
        this.Car = [];
    }

    static random (){
        return Math.floor(Math.random() * 5)
    }

    produksi(tahun) {
        for (let i = 0; i < carFactory.random(); i++){
            this.Car.push(new pajero(tahun))
        }
        for (let i = 0; i < carFactory.random(); i++){
            this.Car.push(new fortuner(tahun))
        }
    }
    
    garansi(tahunSimulasi){
        console.log('hasil produksi');
        this.Car.forEach (element => {
            console.log(`jenis varian : ${element.model}
            tahun pembuatan : ${element.tahun}
            jumlah pintu : ${element.pintu}
            jumlah kursi : ${element.kursi}
            ban : merk : ${element.ban.merek} ukuran : ${element.ban.ukuran}
            garansi : ${element.warranty} tahun
            status garansi : ${(tahunSimulasi - element.tahun) > element.warranty ? 'expired' : 'aktif'  }
            `);
        });
    }
    
}
let mobil = new carFactory();
// mobil.produksi(2018);
mobil.produksi(2020)
mobil.garansi(2023);