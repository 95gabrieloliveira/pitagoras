let catetoOposto = document.querySelector('#oposto');
let catetoAdjacente = document.querySelector('#adjacente');
let resultado = document.querySelector('.resultado');

function hipot() {
    let hipotenusa = Math.hypot(catetoOposto.value, catetoAdjacente.value)
    resultado.innerHTML = `Hipotenusa = ${hipotenusa}`
}