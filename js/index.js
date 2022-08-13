const entrada = document.querySelector("input");
const agregar = document.querySelector(".agregar");
const vaciar = document.querySelector(".vaciar");
const lista = document.querySelector("ul");

agregar.addEventListener("click", (e) => {
    e.preventDefault(); //este método sirve para que la página no se vuelva a recargar luego de ingresar los valores en el input ya que el boton se encuentra dentro de un form.

  const texto = entrada.value;

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = texto;

  li.appendChild(p);
  lista.appendChild(li);

  entrada.value = ""; //para que el input quede vacío luego de agregar algun texto

})
  
    vaciar.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item);
     
    });

