var accionador = document.getElementById("accionador");

accionador.onclick = Contador => clickCounter();

function clickCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
      }
    document.getElementById("numeros").innerHTML = sessionStorage.clickcount;
  }