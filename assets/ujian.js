let button = document.querySelector(".button");
let menu = document.querySelector(".menu");

button.addEventListener('click', function(event){
    if(menu.style.transform == ('translateX(-100%)')){
        menu.style.transform = ('translateX(0%)');
    }else{menu.style.transform = ('translateX(-100%)')
     }
    
});
