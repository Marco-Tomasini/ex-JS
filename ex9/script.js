let m3 = [];
let n3 = [];
let j = 0;
let t = 0;

for (let f = 1; f <= 20; f++) {
    if(f % 3 == 0) {

        m3[j] = f;
        j++;
    } 

    else{
        n3[t] = f;
        t++;
    }

}


function tabelas () {
    console.log("nºs múltiplos de 3: " + m3);
    console.log("nºs não múltiplos de 3: " + n3);
}

tabelas ();