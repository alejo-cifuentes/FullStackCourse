//Cuando la ventana esta cargando
window.onload  = function(){
   
    //Código JS
    alert('Voy a crear algunos elementos HTML con JS');
    
    //Se crea elementos div 
    let etiquetaDiv = document.createElement('div');
    //<div></div>
    let textoDiv  = document.createTextNode('Hola Ucampers');
     //Hola Ucampers

    //Se asigna el atributo class
    etiquetaDiv.className = 'claseDiv';
    //<div class='claseDiv'></div>
    //Se añade en la etiqueta el nodo text
    etiquetaDiv.appendChild(textoDiv);
    //<div class='claseDiv'>Hola Ucampers</div>

     //Esto lo añade al body
    document.body.appendChild(etiquetaDiv);
     
    ///////////////Resultado/////////////////////////
    //<body>
    // <div class='claseDiv'>Hola Ucampers</div> 
    //</body>

}
