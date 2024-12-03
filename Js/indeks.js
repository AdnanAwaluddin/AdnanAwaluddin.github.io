function hitung(){
    let berat = document.getElementById("berat-badan-input").value;
    let tinggi = document.getElementById("tinggi-badan-input").value;
    let usia = document.getElementById("usia-input").value;
    
    let hasil = (parseInt(berat))/(parseFloat(tinggi)**2)*10000;
    document.writeln("Hasilnya : " + hasil.toFixed(1));
    let kategori;
    if (hasil < 18.5) {
        kategori = "Anda mengalami kekurangan berat badan";
    } else if (hasil < 24.9){
        kategori = "Anda memiliki berat badan normal(ideal)";
    } else if (hasil < 29.9){
        kategori = "Anda memiliki berat badan berlebihan";
    } else {kategori = "Anda mengalami kegemukan (obesitas)"
    }
    document.write("Kategori : " + kategori)
}