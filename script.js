function muestra_oculta(id){
    let div = document.getElementById(id);
    if(div.style.display=="none"){
        div.style.display="flex";
    }
    else{
        div.style.display="none";
    }}


    document.addEventListener('DOMContentLoaded', function() {
        var botones = document.querySelectorAll('.caja button');
        
        botones.forEach(function(boton) {
            boton.addEventListener('click', function() {
                if(this.textContent === '🡩') {
                    this.textContent = '🡫';
                } else if (this.textContent === '🡫') {
                    this.textContent = '🡩';
                }
            });
        });
    });