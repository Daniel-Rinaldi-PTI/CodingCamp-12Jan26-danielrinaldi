welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("Siapa nama Anda?");
    if(userResponse == null || userResponse.trim() === "") {
        userResponse = "Tamu";
    }
    document.getElementById("welcome").innerText = "Selamat datang, " + userResponse + " di Portfolio Saya";
}

function validateForm(params) {
    pesan = document.getElementById("pesan").value;
    if (pesan == null || pesan.trim() === "") {
        alert("Pesan tidak boleh kosong!");
        return false;
    }
}