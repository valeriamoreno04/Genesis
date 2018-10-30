
/**
* función que muestra la pantalla de carga y luego la culta por la principal
**/
function loadSection(){
    document.getElementById('carga').style.display = "none";
    document.getElementById('index').style.display = "block";
  } 
 
 
 /**
* Función para mostar una sola sección en especifico.
* @param sectionName: nombre de la seccion que se va a mostrar
**/
function displaySection(sectionName){

    event.preventDefault(); //Disable default function
    sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
  
      if(sections[i].id == sectionName){
        sections[i].style.display = "block";
      }
      else{
        sections[i].style.display = "none";
      }
    }
  }
 
  var jugar, sintomas, fundacion, creditos;

  window.onload = inicializar;
  
  function inicializar()
  {
      inicializarOpcionesEventos();
  
  }
  
  function inicializarOpcionesEventos()
  {
      jugar = document.getElementById("jugar");
      sintomas = document.getElementById("sintomas");
      
  }