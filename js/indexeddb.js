let db; // Variable base de datos
var ban = true;
var nombre, edad;


 const input = document.querySelector('input.edad');
 input.addEventListener('input', e => {
   const value = parseInt(e.currentTarget.value);
   if (value > 100 || value <=0) {
     input.value = 1;
     alert('Por favor ingresa un número menor a 150 y mayor a 0');
   }
 });


async function inicial() { 
  db = await idb.openDb('BDpacientes', 1, db => {
    db.createObjectStore('pacients', {keyPath: 'nombre'});
  });

  listaPaciente();
}
inicial();

async function listaPaciente() {
  let lst = db.transaction('pacients');
  let listaP = lst.objectStore('pacients');

  let pacients = await listaP.getAll();

  if (pacients.length) {
    listPacient.innerHTML = pacients.map(pacient => `	<tr><td>
        ${pacient.nombre}</td><td>${pacient.edad}</td></tr>
      `).join('');
  } else {
    listPacient.innerHTML = '<p>Aún no hay pacientes, por favor prueba agrega uno.</p>'
  }


}

 function delPacient() {
  let del = db.transaction('pacients', 'readwrite');
  del.objectStore('pacients').clear();
listaPaciente();
}

 function newPacient() {

 nombre = document.getElementById('name').value;
 edad = document.getElementById('edad').value;

  let escribir = db.transaction('pacients', 'readwrite');


    escribir.objectStore('pacients').add({nombre, edad});
     listaPaciente();


}
