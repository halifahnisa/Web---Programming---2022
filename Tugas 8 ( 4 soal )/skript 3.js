// Input jam masuk
let jamMasuk = prompt ("Masukan Jam Masuk ? ");

//Input Jam Keluar
let jamKeluar = prompt ("Masukkan Jam Keluar ? ");

let selisih = Number(jamKeluar) - Number(jamMasuk);
let hargaAwal = 3000;

if(selisih <= 2){
    alert(`Keluaran Biaya : ${hargaAwal}`);
} else {
    let hasil = hargaAwal + (selisij -2) * 1000;
    alert(`Keluaran Biaya ; ${hasil}`);
}
