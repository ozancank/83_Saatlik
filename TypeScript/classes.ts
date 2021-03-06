class Ev {
    private odaSayisi: number;
    pencereSayisi: number;
    kat: number;
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    yemekYe() {
        console.log(this.kat + " katlı evde yemek yenildi.")
    }
}

let ev = new Ev(3, 4, 5)
ev.yemekYe();

class Kisi {
    private _isim: string

    get isim(): string {
        return "Sayın, " + this._isim;
    }

    set isim(ad: string) {
        this._isim = ad;
    }

    kaydet() {
        console.log("Kişi kaydedildi.");
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satış yapıldı.");
    }
}

class Personel extends Kisi {
    maasOde() {
        console.log("Maaş ödendi.");
    }
}

let musteri = new Musteri();
musteri.isim = "Ozan"
console.log(musteri.isim);
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();