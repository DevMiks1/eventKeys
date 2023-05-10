const keys = document.querySelectorAll(".key")

document.addEventListener("keydown" , (e) =>{
    const key = e.key
    const code = e.code
    const keyCode = e.keyCode

    keys[0].innerHTML = `${key === " " ? "Blank Space" : key}<small>e.key</small> `;
    keys[1].innerHTML = `${keyCode}<small>e.key</small>`;
    keys[2].innerHTML = `${code}<small>e.key</small>`;
})