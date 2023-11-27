console.log("se cargo correctamente")

window.addEventListener("DOMContentLoaded",(event)=>{
    console.log("DOM copletamente cargado y procesdo");

    const menuBtn=document.getElementById("menu");
    const nav=document.querySelector("header nav");
    const body=document.querySelector("body");

    menuBtn.addEventListener("click", (event)=> {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
    });
});

