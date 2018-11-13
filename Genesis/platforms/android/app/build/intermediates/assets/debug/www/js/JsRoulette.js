window.onload= start;
var levelTime=0;

function start(){

  //Cargar el juego 

    loadSection ();
    init();
  
  //Inicializar los botones  del menu inicial
    var btnPlayLandind = document.getElementById("btnPlayLandindg");
    var btnSintomsLanding = document.getElementById("btnSintomsLanding");
    var btnFundationLanding = document.getElementById("btnFundationLanding");
    var btnCreditsLanding = document.getElementById("btnCreditsLanding");
  
  //Inicializar los botones  del menu de niveles  
    var btnLevelBack=document.getElementById("btnLevelBack");
    var btnLevel1=document.getElementById("btnLevel1");
    var btnLevel2=document.getElementById("btnLevel2");
    var btnLevel3=document.getElementById("btnLevel3");
    var btnLevel4=document.getElementById("btnLevel4");
    var btnLevel5=document.getElementById("btnLevel5");
    
    
  //Inicializar los botones los niveles
  //Nivel 1
    var btnLevel1Back=document.getElementById("btnLevel1Back");
    var btnLevel1Stop=document.getElementById("btnLevel1Stop");

    //Nivel 2
    var btnLevel2Back=document.getElementById("btnLevel2Back");
    var btnLevel2Stop=document.getElementById("btnLevel2Stop");

    //Nivel 3
    var btnLevel3Back=document.getElementById("btnLevel3Back");
    var btnLevel3Stop=document.getElementById("btnLevel3Stop");

    //Nivel 4
    var btnLevel4Back=document.getElementById("btnLevel4Back");
    var btnLevel4Stop=document.getElementById("btnLevel4Stop");

    //Nivel 5
    var btnLevel5Back=document.getElementById("btnLevel5Back");
    var btnLevel5Stop=document.getElementById("btnLevel5Stop");
    
  //Inicializar el boton de creditos    
    var btnCreditsBack=document.getElementById("btnCreditsBack");

  
  //Inicializar el boton de sintomas  
    var btnSintomsBack=document.getElementById("btnSintomsBack");

  //Inicializar el boton de fundacion  
    var btnFundationBack=document.getElementById("btnFundationBack");
  
  //Inicializar el boton de ir al sitio web de la Fundacion 
  var btnFundationWeb=document.getElementById("btnFundationWeb");
  
  //Inicializar el boton home de los Modales

    //Victory
    var btnVictoryBack=document.getElementById("btnVictoryBack");
    var btnNextLevel=document.getElementById("btnNextLevel");

    //TryAgain
    var btnTryAgainBack=document.getElementById("btnTryAgainBack");
    var btnTryTry=document.getElementById("btnTryTry");

    //Stop
    var btnStopHelp=document.getElementById("btnStopHelp");
    var btnStopSintoms=document.getElementById("btnStopSintoms");
    var btnStopHome=document.getElementById("btnStopHome");
    var btnContinue=document.getElementById("btnContinue");

    //Help
    var btnHelpBack=document.getElementById("btnHelpBack");

  //Agregar los eventos a los botones del menu inicial
    btnPlayLandind.addEventListener("click", function(){
	    transition("Start", "Levels");
    });
    
    btnSintomsLanding.addEventListener("click", function(){
	    transition("Start", "Sintoms");
    });
    
    btnCreditsLanding.addEventListener("click", function(){
	    transition("Start", "Credits");
    });
    
    btnFundationLanding.addEventListener("click", function(){
	    transition("Start", "Fundation");
    });
  
  //Agregar los evento a los botones del menu de niveles

    btnLevelBack.addEventListener("click", function(){
      transition("Levels", "Start");
      levelTime=0;
    });

    btnLevel1.addEventListener("click", function(){
      transition("Levels", "Level1");
      levelTime=1;
    });

    btnLevel2.addEventListener("click", function(){
      transition("Levels", "Level2");
      levelTime=2;
    });

    btnLevel3.addEventListener("click", function(){
      transition("Levels", "Level3");
      levelTime=3;
    });

    btnLevel4.addEventListener("click", function(){
      transition("Levels", "Level4");
      levelTime=4;
    });

    btnLevel5.addEventListener("click", function(){
      transition("Levels", "Level5");
      levelTime=5;
    });

  //Agregar eventos a los botones de cada nivel

    btnLevel1Back.addEventListener("click", function(){
      transition("Level1", "Levels");
    });
    btnLevel2Back.addEventListener("click", function(){
      transition("Level2", "Levels");
    });
    btnLevel3Back.addEventListener("click", function(){
      transition("Level3", "Levels");
    });
    btnLevel4Back.addEventListener("click", function(){
      transition("Level4", "Levels");
    });
    btnLevel5Back.addEventListener("click", function(){
      transition("Level5", "Levels");
    });

    btnLevel1Stop.addEventListener("click",function(){
      openModalPause("ModalTryAgain",1);
    });
    btnLevel2Stop.addEventListener("click",function(){
        openModalPause("ModalVictory",2);
    });
    btnLevel3Stop.addEventListener("click",function(){
      openModalPause("ModalStop",3);
    });
    btnLevel4Stop.addEventListener("click",function(){
      openModalPause("ModalStop",4);
    });
    btnLevel5Stop.addEventListener("click",function(){
      openModalPause("ModalStop",5);
    });

  //Agregar evento a el boton de creditos

    btnCreditsBack.addEventListener("click", function(){
      transition("Credits", "Start");
    });

  //Agregar evento a el boton de fundacion

    btnFundationBack.addEventListener("click", function(){
      transition("Fundation", "Start");
    });
  
  //Agregar evento al boton Web de la fundacion
    btnFundationWeb.onclick = function(){
    window.open('http://fundacionfuper.org','_blank');

  };

  //Agregar evento a el boton de sintomas

  btnSintomsBack.addEventListener("click", function(){
    openPauseSH("Sintoms", "ModalStop");
  });

  
  //Agregar evento a los botones de los modales
  //Victory
  btnVictoryBack.addEventListener("click", function(){
      closePause("Start","Level"+levelTime,"ModalVictory");
      
  });
  
  btnNextLevel.addEventListener("click",function(){
    closePause("Level"+(levelTime+1),"Level"+levelTime,"ModalVictory");
  });

  //Try Again
  btnTryAgainBack.addEventListener("click", function(){
      closePause("Start","Level"+levelTime,"ModalTryAgain");
  });   
  btnTryTry.addEventListener("click", function(){    
      closeModal("ModalTryAgain");
  }); 

  //Stop
  btnStopHome.addEventListener("click", function(){
    closePause("Start","Level"+levelTime,"ModalStop");
    
  });

  btnStopHelp.addEventListener("click",function(){
    closePause("Help","Level"+levelTime,"ModalStop");
  });

  btnStopSintoms.addEventListener("click",function(){
    closePause("Sintoms","Level"+levelTime,"ModalStop");
  });

  btnContinue.addEventListener("click", function(){
    closeModal("ModalStop");
}); 

  //Agregar evento a el boton de Help
 
  btnHelpBack.addEventListener("click", function(){
      openPauseSH("Help", "ModalStop");
  });

}

//Carga el Splash duracion 3 seg
function loadSection () {
  setTimeout(function() {
    document.getElementById("Splash").style.display = "none";
    document.getElementById("Start").style.display = "block";
  }, 1000);
}

//Cambia los display para la navegabilidad
//Recibe dos textos y busca el objeto con el id correspondiente a ese texto para cambiarle el display
function transition(id_invisible, id_visible) {
    document.getElementById(id_invisible).style.display = "none";
    document.getElementById(id_visible).style.display = "block";
}

function closeModal(id_invisible) {
   document.getElementById(id_invisible).style.display = "none";
   levelTime=0;
}

function openModal(id_visible) {
  
  document.getElementById(id_visible).style.display = "block";
}

// Aca hay problema
// Cierra  ayuda o sintoma y abre el modal y el nivel 
function openModalPause(id_visible,level) {
  
  document.getElementById(id_visible).style.display = "block";
  levelTime=level;
}

// No funciona
// Cierra el modal, el nivel y abre ayuda o sintoma
function closePause(id_clase, id_nivel, id_modal){
   document.getElementById(id_clase).style.display="block";
   document.getElementById(id_nivel).style.display="none";
   document.getElementById(id_modal).style.display="none";

}

// Aca hay problema
// Cierra  ayuda o sintoma y abre el modal y el nivel
function openPauseSH(id_clase,id_modal){
  if(levelTime==0){
    document.getElementById("Start").style.display="block";
    document.getElementById(id_clase).style.display="none";
  }else{
    document.getElementById(id_clase).style.display="none";
    document.getElementById("Level"+levelTime).style.display="block";
    document.getElementById(id_modal).style.display="block";
    
  }
}