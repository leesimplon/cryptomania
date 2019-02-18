function crypter() {
    var entrer = document.getElementById("entre");
    var indexe = document.getElementById("indice");
    var ind = parseInt(indexe.value);
    var x = entrer.value;
    var res = document.getElementById("code");
    var alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var rang = 0;
    var y = "";
    for (i = 0; i < x.length; i++) {
        var a = x[i];
        if (alph.indexOf(a) > 25) {
            rang = 26 + ((alph.indexOf(a)) + ind) % 26;
        } else {
            rang = ((alph.indexOf(a)) + ind) % 26;
        }
        if (a == " ") {
            y = y + " ";
        } else {
            y = y + alph[rang];
        }
    }
    res.innerHTML = y;
}