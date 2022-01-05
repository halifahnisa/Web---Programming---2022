function Kirim() {
    let nama=document.getElementById("nama").value;
    let pasword=document.getElementById("password").value;
    let youname= "bahagia";
    let password="2566";
    if (nama == youname && pasword == password) {
        window.alert("Login Berhasil")
    } else {
        window.alert("Login Gagal")
    }
}