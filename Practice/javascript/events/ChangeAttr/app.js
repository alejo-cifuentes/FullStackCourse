//Cuando la ventana esta cargando
window.onload  = function(){
   
    // get elements
    let btnBack = document.getElementById("btnBack");
    let btnSize = document.getElementById("btnSize");
    let btnBorder = document.getElementById("btnBorder");

    btnBack.addEventListener("click", event => {
        let divContent = document.getElementById("divContenido");
        divContent.style.backgroundColor = 'red';
    });

    btnSize.addEventListener("click", event => {
        let divContent = document.getElementById("divContenido");
        divContent.style.width === '200px' ? divContent.style.width = '400px' : divContent.style.width = '200px';
        divContent.style.height === '200px' ? divContent.style.height = '400px' : divContent.style.height = '200px';
    });

    btnBorder.addEventListener("click", event => {
        let divContent = document.getElementById("divContenido");
        divContent.style.border = 'solid 5px black';
    });
}