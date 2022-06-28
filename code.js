
const boton = document.querySelector(".boton");

boton.addEventListener("click",()=>{
    let id = document.querySelector(".span2");
    let advice = document.querySelector(".span");
    const peticion = fetch("https://api.adviceslip.com/advice")
    const info = peticion.then(res => res.json())
    .then(data => {
        id.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    })
})


