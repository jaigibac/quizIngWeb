function mostrarOcultar(id1,id2){
  document.getElementById(id1).style.display = 'block'
  document.getElementById(id2).style.display = 'none'
};
function confimacionEnvioDatos(id) {
  document.getElementById(id).innerHTML = "<p id='datos'>datos enviados<p>"
}