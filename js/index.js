function luasSegitiga(){
    var tinggi = parseFloat(document.getElementById("tinggi-input").value);
    var alas = parseFloat(document.getElementById("alas-input").value);
    if (isNaN(tinggi) || isNaN(alas)) {
        document.getElementById("hasil").innerText = "Masukkan nilai yang valid.";
        return;
      }
    var hasil= 1/2*alas*tinggi;
    document.getElementById("rumus").innerText="Rumus: 1/2 * Alas * Tinggi";
    document.getElementById("hasil").innerText="Luas Segitiga: "+hasil;
}

function reset(){
    document.getElementById("tinggi-input").value = "";
    document.getElementById("alas-input").value = "";
    document.getElementById("hasil").innerText = "";
}