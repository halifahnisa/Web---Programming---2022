function cetak_background() {
    const background = document.getElementById("background");
    const gambar = document.getElementById("gambar");

    if(background.value === "aestetic"){
        gambar.src = "aestetik.png"
        alert("ini background aestetic");
    }
    if(background.value === "hitam putih"){
        gambar.src = "hitamputih.png"
        alert("ini background hitam putih");
    }
    if(background.value === "pastel"){
        gambar.src = "pastel.png"
        alert("ini background hitam putih");
    }
    if(background.value === "pemandangan"){
        gambar.src = "pemandangan.png"
        alert("ini background hitam putih");
    }
    if(background.value === "awan"){
        gambar.src = "awan.png"
        alert("ini background hitam putih");
    }
}