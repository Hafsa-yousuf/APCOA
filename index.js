const navE1 = document.querySelector('.navbar')

window.addEventListener('scroll' , ()=>{
    if (window.scrollY >= 50) {
        navE1.classList.add("bg-color");
    } else if (window.scrollY < 50){
        navE1.classList.remove("bg-color");
    }
});


  