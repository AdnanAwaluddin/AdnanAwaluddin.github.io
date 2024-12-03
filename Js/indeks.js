function hitung(){
    let berat = document.getElementById("berat-badan-input").value;
    let tinggi = document.getElementById("tinggi-badan-input").value;
    let usia = document.getElementById("usia-input").value;
    
    let hasil = parseInt(berat)/(parseInt(tinggi)^2);
    document.writeln("Hasilnya : " + hasil);
}