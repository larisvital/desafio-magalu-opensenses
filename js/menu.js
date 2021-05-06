window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('aumentartamfonte');
    var elementBtnDecreaseFont = document.getElementById('diminuirtamfonte');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 1;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 0.10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        if(fontSize<=1.20){
            fontSize = fontSize + increaseDecrease;
            elementBody.style.fontSize = fontSize + 'em';
        }
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        if(fontSize!=1) {
            fontSize = fontSize - increaseDecrease;
            elementBody.style.fontSize = fontSize + 'em';
        }
        
    });

    var changeMode = document.querySelector('html');
    var changeDarkMode = document.getElementById('darkmode');
    var changeLightMode = document.getElementById('lightmode');
        
    // Evento de click para alterar para dark-mode
    changeDarkMode.addEventListener('click', function(event) {
        if(changeMode.className!='dark-mode'){
            changeMode.classList.toggle('dark-mode') 
            changeMode.classList.remove('light-mode')
        }              
    });
    // Evento de click para alterar para light-mode
    changeLightMode.addEventListener('click', function(event) {
        if(changeMode.className=='dark-mode'){
            changeMode.classList.toggle('light-mode')
            changeMode.classList.remove('dark-mode')
        }
    });

       
}

