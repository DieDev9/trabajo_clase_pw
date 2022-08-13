const tempo = document.querySelector('.reloj .tempo');
const iniciar_btn = document.getElementById('iniciar');
const pausar_btn = document.getElementById("pausa");
const reiniciar_btn = document.getElementById("reinicio");

let segundos = 0;
let interval = null;

// Agregando eventos a los botones
iniciar_btn.addEventListener('click', inicio);
pausar_btn.addEventListener("click", pausa);
reiniciar_btn.addEventListener("click", reinicio);

// Actualizando el temporizador
function crono () {
	segundos++;

	// Haciendo las respectivas conversiones
	let hrs = Math.floor(segundos / 3600);
	let mins = Math.floor((segundos - (hrs * 3600)) / 60);
	let secs = segundos % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	tempo.innerText = `${hrs}:${mins}:${secs}`; //usando template strings para concatenar
}

function inicio () {
	if (interval) {
		return
	}

	interval = setInterval(crono, 1000);
}

function pausa () {
	clearInterval(interval);
	interval = null;
}

function reinicio () {
	pausa();
	segundos = 0;
	tempo.innerText = '00:00:00';
}