 
  function horario() { 

var relogio = document.querySelector("#relogio"); 
var d = new Date(); 
var seg = d.getSeconds(); 
var min = d.getMinutes(); 
var hr = d.getHours(); 
var dia = d.getDate(); 
var mes = d.getMonth(); 
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]; 
var diaSem = d.getDay(); 
var diasSemana = ["Domingo","Segunda-Feira","Terca-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]; 
relogio.innerHTML = diasSemana[diaSem] + ", " + dia + " de " + meses[mes] + ", " +  "<br>" +" Hora certa: " + hr + ":" + min + ":" + seg; }

window.onload = setInterval(horario, 1000);


window.onload=horario;

