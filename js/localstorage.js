const button = document.getElementById('button')
const scoreElement = document.getElementById('score_element')

if(typeof (localStorage) === 'undefined'){
    console.log('Tu navegador no soporta la funcion localStorage')
}

if (localStorage.getItem('score')) {
    scoreElement.innerText = localStorage.getItem('score')
} else {
    localStorage.setItem('score', '0')
}

button.onclick = () => {
    const currentScore = localStorage.getItem('score')
    localStorage.setItem('score', parseInt(currentScore) + 1)
    scoreElement.innerText= localStorage.getItem('score')

}