//Cuando la ventana esta cargando
window.onload  = function(){
    // get elements
    let btnH1 = document.getElementById("btnh1");
    let btnP = document.getElementById("btnp");

    btnH1.addEventListener("click", event => {
        let h1Tag = document.createElement('h1');
        let textH1 = document.createTextNode('Hola soy un tag H1');
        h1Tag.appendChild(textH1);
        document.body.appendChild(h1Tag);
    });

    btnP.addEventListener("click", event => {
        let pTag = document.createElement('p');
        let textp = document.createTextNode('soy un parrafo que no tiene mucho texto y que fui agregado al DOM desde un evento de javascript');
        pTag.appendChild(textp);
        document.body.appendChild(pTag);
    });


}

function mensaje() {
    alert("Bienvenido");
}