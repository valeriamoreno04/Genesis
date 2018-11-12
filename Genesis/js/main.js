var btnLvl1, btnLvl2, btnLvl3, btnLvl4, btnLvl5;
var container1, container2, container3, container4, container5;
var generado1, generado2, generado3, generado4, generado5;

var niveles;
var element;
var sintomas;
var radio;
var angulo;
var step;
var altoContainer;
var anchoContainer;
var cont;
var obejetivosAnim;
var coincide;
var enfermedad;
var numEnfermedad;
var temp;
var botones = [];
var btnEnfermedad = [];
var btnEnfermedadClose = [];
var modalEnfermedad = [];

function init(){
	inicializarVariables();
	inicializarEventos();	
}

function inicializarVariables(){
    for(let i = 0; i < 13; i++){
        btnEnfermedad.push(document.getElementById('btnEnfermedad'+(i+1)));
        btnEnfermedadClose.push(document.getElementById('btnModalEnfermedad'+(i+1)));
        modalEnfermedad.push(document.getElementById('modalEnfermedad'+(i+1)));
    }

    for(let i = 0; i < 13; i++){
        btnEnfermedad[i].addEventListener("click",function(){
            openModal(modalEnfermedad[i].id);
        });

        btnEnfermedadClose[i].addEventListener("click", function(){
            closeModal(modalEnfermedad[i].id);
        });
    }
    btnLvl1 = document.getElementById("btnLevel1");
    btnLvl2 = document.getElementById("btnLevel2");
    btnLvl3 = document.getElementById("btnLevel3");
    btnLvl4 = document.getElementById("btnLevel4");
    btnLvl5 = document.getElementById("btnLevel5");    
    
    element = document.querySelector(".div1");
    container1 = document.getElementById("div1");
    container2 = document.getElementById("div2");
    container3 = document.getElementById("div3");
    container4 = document.getElementById("div4");
    container5 = document.getElementById("div5");

    generado1 = false;
    generado2 = false;
    generado3 = false;
    generado4 = false;
    generado5 = false;

    sintomas = [];
    cont = 0;
    numEnfermedad = 0;
    obejetivosAnim = [];

    niveles = [];
    for(var i=0;i<5;i++){
        niveles[i] = {};
        niveles[i].enfermedades = [];
        niveles[i].sintomas = [];        
        for(var j=0;j<10;j++)
            niveles[i].sintomas[j] = {};
    }
    
    radio = 250;    
    anchoContainer = parseInt(getComputedStyle(element).width, 10);
    altoContainer = parseInt(getComputedStyle(element).height, 10);
    angulo = 0;
    step = (2*Math.PI)/10;
}

function inicializarEventos(){
    btnLvl1.addEventListener("click",crearNivel1);
    btnLvl2.addEventListener("click",crearNivel2);
    btnLvl3.addEventListener("click",crearNivel3);
    btnLvl4.addEventListener("click",crearNivel4);
    btnLvl5.addEventListener("click",crearNivel5);
}

function formarEnfermedad(indice, id, nivel){
    temp = {};
    temp.id = '#' + id;
    temp.indice = indice;
    temp.dom = document.getElementById(id);    
    obejetivosAnim.push(temp);
    if(sintomas[1]==undefined){               
        sintomas.push(indice);        
        if(cont==0){            
            TweenMax.to(temp.id, 1, {left:279, top:615, scale:0.7});
            cont++;
        }else if(cont==1){
            TweenMax.to(temp.id, 1, {left:266, top:515, scale:0.7});
            cont++;
        }        
    }
    else{
        sintomas.push(indice);
        TweenMax.to(temp.id, 1, {left:362, top:551, scale:0.7});
        for(var i=0;i<niveles[nivel].enfermedades.length;i++){            
            if((niveles[nivel].enfermedades[i].sintoma1==sintomas[0]||
                niveles[nivel].enfermedades[i].sintoma1==sintomas[1]||
                niveles[nivel].enfermedades[i].sintoma1==sintomas[2])&&
               (niveles[nivel].enfermedades[i].sintoma2==sintomas[0]||
                niveles[nivel].enfermedades[i].sintoma2==sintomas[1]||
                niveles[nivel].enfermedades[i].sintoma2==sintomas[2])&&
               (niveles[nivel].enfermedades[i].sintoma3==sintomas[0]||
                niveles[nivel].enfermedades[i].sintoma3==sintomas[1]||
                niveles[nivel].enfermedades[i].sintoma3==sintomas[2])){

                    coincide = true;
                    enfermedad = i;
                    break;
            }            
        }
        if(coincide){    
            //debugger;        
            var imgEnfermedad = document.createElement("img");            
            imgEnfermedad.setAttribute("src", niveles[nivel].enfermedades[enfermedad].icono);            
            imgEnfermedad.setAttribute("id",niveles[nivel].enfermedades[enfermedad].id);            
            imgEnfermedad.style.position = 'absolute';
            imgEnfermedad.style.width = '125px';
            imgEnfermedad.style.height = '125px';
            imgEnfermedad.style.top = ((altoContainer/2 - 17) - parseInt(imgEnfermedad.style.width, 10)/2) + 'px';
            imgEnfermedad.style.left = ((anchoContainer/2 + 6) - parseInt(imgEnfermedad.style.height, 10)/2) + 'px';
            document.getElementById("div" + (nivel+1)).appendChild(imgEnfermedad);
            if(nivel!=0){
                if(numEnfermedad==0){
                    TweenMax.to(imgEnfermedad, 1, {scale:2,delay:1});
                    TweenMax.to(imgEnfermedad, 1, {left:123, top:1062, scale:1.15, delay:2});
                }
                else if(numEnfermedad==1){   
                        TweenMax.to(imgEnfermedad, 1, {scale:2,delay:1});
                        TweenMax.to(imgEnfermedad, 1, {left:335, top:1062, scale:1.15, delay:2});
                    }
                    else{
                        TweenMax.to(imgEnfermedad, 1, {scale:2,delay:1});
                        TweenMax.to(imgEnfermedad, 1, {left:541, top:1062, scale:1.15, delay:2});
                    }
            }
            else{
                if(numEnfermedad==0){
                    TweenMax.to(imgEnfermedad, 1, {scale:2,delay:1});
                    TweenMax.to(imgEnfermedad, 1, {left:200, top:1060, scale:1.15, delay:2});
                }
                else if(numEnfermedad==1){   
                        TweenMax.to(imgEnfermedad, 1, {scale:2,delay:1});
                        TweenMax.to(imgEnfermedad, 1, {left:412, top:1062, scale:1.15, delay:2});
                    }
            }
                
            setTimeout(eliminarIconos.bind(null, obejetivosAnim), 1500);

            coincide = false;
            numEnfermedad++;
        }
        else{
            //Reorganizar imgs            
            var left;
            var top;
            for(var i=0;i<obejetivosAnim.length;i++){                
                left = niveles[nivel].sintomas[obejetivosAnim[i].indice-1].x;
                top = niveles[nivel].sintomas[obejetivosAnim[i].indice-1].y;
                TweenMax.to(obejetivosAnim[i].id, 1, {left:left, top:top, scale:1, delay:1});
            }
        }
        obejetivosAnim = [];
        sintomas = [];
        cont = 0;        
        botones = [];
    }
}

function eliminarIconos(array){ 
    for(var j=0;j<3;j++)
        array[j].dom.style.display="none";
}

function asignarCoordenadas(img, container){
    var x;
    var y;
    for(var i=0;i<img.length;i++){        
        x = Math.round(anchoContainer/2 + radio * Math.cos(angulo) - parseInt(img[i].imagen.style.width, 10)/2);
        y = Math.round(((altoContainer/2)-25) + radio * Math.sin(angulo) - parseInt(img[i].imagen.style.height, 10)/2);    
        img[i].x = x;
        img[i].y = y;
        img[i].imagen.style.left = x + 'px';
        img[i].imagen.style.top = y + 'px';
        container.appendChild(img[i].imagen);
        angulo += step;
    }    
}

//nivel 1
function crearNivel1(){    
    if(!generado1){
        numEnfermedad=0;

        niveles[0].enfermedades[0] = {};
        niveles[0].enfermedades[0].sintoma1 = 5;
        niveles[0].enfermedades[0].sintoma2 = 7;
        niveles[0].enfermedades[0].sintoma3 = 8;
        niveles[0].enfermedades[0].id = "n1e1";
        niveles[0].enfermedades[0].icono = "img/niveles/Nivel1/iconoenfermedad-srinvertida.png";
        niveles[0].enfermedades[1] = {};
        niveles[0].enfermedades[1].sintoma1 = 10;
        niveles[0].enfermedades[1].sintoma2 = 3;
        niveles[0].enfermedades[1].sintoma3 = 4;
        niveles[0].enfermedades[1].id = "n1e2";
        niveles[0].enfermedades[1].icono = "img/niveles/Nivel1/icono-pato.png";

        var img1 = document.createElement("img");    
        img1.setAttribute("src","img/niveles/Nivel1/icono-cos.png");      
        img1.setAttribute("id","s1n1");
        img1.setAttribute("onClick","formarEnfermedad(1,'s1n1', 0)");
        img1.style.position = 'absolute';  
        img1.style.width = '125px';
        img1.style.height = '125px';
        niveles[0].sintomas[0].imagen = img1;

        var img2 = document.createElement("img");    
        img2.setAttribute("src","img/niveles/Nivel1/icono-cre.png");    
        img2.setAttribute("id","s2n1");
        img2.setAttribute("onClick","formarEnfermedad(2,'s2n1',0)");
        img2.style.position = 'absolute';    
        img2.style.width = '125px';
        img2.style.height = '125px';
        niveles[0].sintomas[1].imagen = img2;

        var img3 = document.createElement("img");    
        img3.setAttribute("src","img/niveles/Nivel1/icono-de.png");    
        img3.setAttribute("id","s3n1");
        img3.setAttribute("onClick","formarEnfermedad(3,'s3n1',0)");
        img3.style.position = 'absolute';    
        img3.style.width = '125px';
        img3.style.height = '125px';
        niveles[0].sintomas[2].imagen = img3;

        var img4 = document.createElement("img");    
        img4.setAttribute("src","img/niveles/Nivel1/icono-hi.png");    
        img4.setAttribute("id","s4n1");
        img4.setAttribute("onClick","formarEnfermedad(4,'s4n1',0)");
        img4.style.position = 'absolute';    
        img4.style.width = '125px';
        img4.style.height = '125px';
        niveles[0].sintomas[3].imagen = img4;

        var img5 = document.createElement("img");   
        img5.setAttribute("src","img/niveles/Nivel1/icono-in.png");    
        img5.setAttribute("id","s5n1");
        img5.setAttribute("onClick","formarEnfermedad(5,'s5n1',0)");
        img5.style.position = 'absolute';    
        img5.style.width = '125px';
        img5.style.height = '125px';
        niveles[0].sintomas[4].imagen = img5;

        var img6 = document.createElement("img");    
        img6.setAttribute("src","img/niveles/Nivel1/icono-ma.png");    
        img6.setAttribute("id","s6n1");
        img6.setAttribute("onClick","formarEnfermedad(6,'s6n1',0)");
        img6.style.position = 'absolute';    
        img6.style.width = '125px';
        img6.style.height = '125px';
        niveles[0].sintomas[5].imagen = img6;

        var img7 = document.createElement("img");
        img7.setAttribute("src","img/niveles/Nivel1/icono-nu.png");    
        img7.setAttribute("id","s7n1");
        img7.setAttribute("onClick","formarEnfermedad(7,'s7n1',0)");
        img7.style.position = 'absolute';    
        img7.style.width = '125px';
        img7.style.height = '125px';
        niveles[0].sintomas[6].imagen = img7;

        var img8 = document.createElement("img");
        img8.setAttribute("src","img/niveles/Nivel1/icono-par.png");
        img8.setAttribute("id","s8n1");
        img8.setAttribute("onClick","formarEnfermedad(8,'s8n1',0)");
        img8.style.position = 'absolute';    
        img8.style.width = '125px';
        img8.style.height = '125px';
        niveles[0].sintomas[7].imagen = img8;

        var img9 = document.createElement("img");    
        img9.setAttribute("src","img/niveles/Nivel1/icono-pul.png");    
        img9.setAttribute("id","s9n1");
        img9.setAttribute("onClick","formarEnfermedad(9,'s9n1',0)");
        img9.style.position = 'absolute';    
        img9.style.width = '125px';
        img9.style.height = '125px';
        niveles[0].sintomas[8].imagen = img9;

        var img10 = document.createElement("img");    
        img10.setAttribute("src","img/niveles/Nivel1/icono-si.png");    
        img10.setAttribute("id","s10n1");
        img10.setAttribute("onClick","formarEnfermedad(10,'s10n1',0)");
        img10.style.position = 'absolute';    
        img10.style.width = '125px';
        img10.style.height = '125px';
        niveles[0].sintomas[9].imagen = img10;
        
        asignarCoordenadas(niveles[0].sintomas, container1);
        generado1 = true;
    }
}

//nivel 2
function crearNivel2(){
    if(!generado2){
        numEnfermedad=0;

        niveles[1].enfermedades[0] = {};    
        niveles[1].enfermedades[0].sintoma1 = 9;
        niveles[1].enfermedades[0].sintoma2 = 1;
        niveles[1].enfermedades[0].sintoma3 = 6;
        niveles[1].enfermedades[0].id = "n2e1";
        niveles[1].enfermedades[0].icono = "img/niveles/Nivel2/icono-inmu.png";
        niveles[1].enfermedades[1] = {};
        niveles[1].enfermedades[1].sintoma1 = 10;
        niveles[1].enfermedades[1].sintoma2 = 2;
        niveles[1].enfermedades[1].sintoma3 = 5;
        niveles[1].enfermedades[1].id = "n2e2";
        niveles[1].enfermedades[1].icono = "img/niveles/Nivel2/iconoenfermedad-narcolepsiacataplejia.png";
        niveles[1].enfermedades[2] = {};
        niveles[1].enfermedades[2].sintoma1 = 7;
        niveles[1].enfermedades[2].sintoma2 = 3;
        niveles[1].enfermedades[2].sintoma3 = 4;
        niveles[1].enfermedades[2].id = "n2e3";
        niveles[1].enfermedades[2].icono = "img/niveles/Nivel2/iconoenfermedad-cuellocorto.png";

        var img1 = document.createElement("img");    
        img1.setAttribute("src","img/niveles/Nivel2/icono-abs.png");      
        img1.setAttribute("id","s1n2");
        img1.setAttribute("onClick","formarEnfermedad(1,'s1n2',1)");
        img1.style.position = 'absolute';
        img1.style.width = '125px';
        img1.style.height = '125px';
        niveles[1].sintomas[0].imagen = img1;

        var img2 = document.createElement("img");    
        img2.setAttribute("src","img/niveles/Nivel2/icono-alucinaciones.png");    
        img2.setAttribute("id","s2n2");
        img2.setAttribute("onClick","formarEnfermedad(2,'s2n2',1)");
        img2.style.position = 'absolute';    
        img2.style.width = '125px';
        img2.style.height = '125px';
        niveles[1].sintomas[1].imagen = img2;

        var img3 = document.createElement("img");    
        img3.setAttribute("src","img/niveles/Nivel2/icono-bajaimplantacion.png");    
        img3.setAttribute("id","s3n2");
        img3.setAttribute("onClick","formarEnfermedad(3,'s3n2',1)");
        img3.style.position = 'absolute';    
        img3.style.width = '125px';
        img3.style.height = '125px';
        niveles[1].sintomas[2].imagen = img3;

        var img4 = document.createElement("img");    
        img4.setAttribute("src","img/niveles/Nivel2/icono-cardiopatia.png");    
        img4.setAttribute("id","s4n2");
        img4.setAttribute("onClick","formarEnfermedad(4,'s4n2',1)");
        img4.style.position = 'absolute';    
        img4.style.width = '125px';
        img4.style.height = '125px';
        niveles[1].sintomas[3].imagen = img4;

        var img5 = document.createElement("img");   
        img5.setAttribute("src","img/niveles/Nivel2/icono-cataplejia.png");    
        img5.setAttribute("id","s5n2");
        img5.setAttribute("onClick","formarEnfermedad(5,'s5n2',1)");
        img5.style.position = 'absolute';    
        img5.style.width = '125px';
        img5.style.height = '125px';
        niveles[1].sintomas[4].imagen = img5;

        var img6 = document.createElement("img");    
        img6.setAttribute("src","img/niveles/Nivel2/icono-infeccionresp.png");    
        img6.setAttribute("id","s6n2");
        img6.setAttribute("onClick","formarEnfermedad(6,'s6n2',1)");
        img6.style.position = 'absolute';    
        img6.style.width = '125px';
        img6.style.height = '125px';
        niveles[1].sintomas[5].imagen = img6;

        var img7 = document.createElement("img");
        img7.setAttribute("src","img/niveles/Nivel2/icono-limitacion.png");    
        img7.setAttribute("id","s7n2");
        img7.setAttribute("onClick","formarEnfermedad(7,'s7n2',1)");
        img7.style.position = 'absolute';    
        img7.style.width = '125px';
        img7.style.height = '125px';
        niveles[1].sintomas[6].imagen = img7;

        var img8 = document.createElement("img");
        img8.setAttribute("src","img/niveles/Nivel2/icono-par.png");
        img8.setAttribute("id","s8n2");
        img8.setAttribute("onClick","formarEnfermedad(8,'s8n2',1)");
        img8.style.position = 'absolute';    
        img8.style.width = '125px';
        img8.style.height = '125px';
        niveles[1].sintomas[7].imagen = img8;

        var img9 = document.createElement("img");    
        img9.setAttribute("src","img/niveles/Nivel2/icono-retrasodllo.png");    
        img9.setAttribute("id","s9n2");
        img9.setAttribute("onClick","formarEnfermedad(9,'s9n2',1)");
        img9.style.position = 'absolute';    
        img9.style.width = '125px';
        img9.style.height = '125px';
        niveles[1].sintomas[8].imagen = img9;

        var img10 = document.createElement("img");    
        img10.setAttribute("src","img/niveles/Nivel2/icono-somnolencia.png");
        img10.setAttribute("id","s10n2");
        img10.setAttribute("onClick","formarEnfermedad(10,'s10n2',1)");
        img10.style.position = 'absolute';    
        img10.style.width = '125px';
        img10.style.height = '125px';
        niveles[1].sintomas[9].imagen = img10;
        
        asignarCoordenadas(niveles[1].sintomas, container2);
        generado2 = true;
    }
}

//NIVEL 3
function crearNivel3(){
    if(!generado3){
        numEnfermedad=0;

        niveles[2].enfermedades[0] = {};    
        niveles[2].enfermedades[0].sintoma1 = 9;
        niveles[2].enfermedades[0].sintoma2 = 7;
        niveles[2].enfermedades[0].sintoma3 = 6;
        niveles[2].enfermedades[0].icono = "img/niveles/Nivel3/iconoenfermedad-hipotonia.png";
        niveles[2].enfermedades[1] = {};
        niveles[2].enfermedades[1].sintoma1 = 4;
        niveles[2].enfermedades[1].sintoma2 = 2;
        niveles[2].enfermedades[1].sintoma3 = 5;
        niveles[2].enfermedades[1].icono = "img/niveles/Nivel3/iconoenfermedad-debilidadcintura.png";
        niveles[2].enfermedades[2] = {};
        niveles[2].enfermedades[2].sintoma1 = 3;
        niveles[2].enfermedades[2].sintoma2 = 8;
        niveles[2].enfermedades[2].sintoma3 = 10;
        niveles[2].enfermedades[2].icono = "img/niveles/Nivel3/iconoenfermedad-medula.png";

        var img1 = document.createElement("img");    
        img1.setAttribute("src","img/niveles/Nivel3/icono-cardiopatia.png");      
        img1.setAttribute("id","s1n3");
        img1.setAttribute("onClick","formarEnfermedad(1,'s1n3',2)");
        img1.style.position = 'absolute';  
        img1.style.width = '125px';
        img1.style.height = '125px';
        niveles[2].sintomas[0].imagen = img1;

        var img2 = document.createElement("img");    
        img2.setAttribute("src","img/niveles/Nivel3/icono-cardiorespiratorio.png");    
        img2.setAttribute("id","s2n3");
        img2.setAttribute("onClick","formarEnfermedad(2,'s2n3',2)");
        img2.style.position = 'absolute';    
        img2.style.width = '125px';
        img2.style.height = '125px';
        niveles[2].sintomas[1].imagen = img2;

        var img3 = document.createElement("img");    
        img3.setAttribute("src","img/niveles/Nivel3/icono-debilidadinferiores.png");    
        img3.setAttribute("id","s3n3");
        img3.setAttribute("onClick","formarEnfermedad(3,'s3n3',2)");
        img3.style.position = 'absolute';
        img3.style.width = '125px';
        img3.style.height = '125px';
        niveles[2].sintomas[2].imagen = img3;

        var img4 = document.createElement("img");    
        img4.setAttribute("src","img/niveles/Nivel3/icono-degenmuscular.png");    
        img4.setAttribute("id","s4n3");
        img4.setAttribute("onClick","formarEnfermedad(4,'s4n3',2)");
        img4.style.position = 'absolute';    
        img4.style.width = '125px';
        img4.style.height = '125px';
        niveles[2].sintomas[3].imagen = img4;

        var img5 = document.createElement("img");   
        img5.setAttribute("src","img/niveles/Nivel3/icono-dificultadcaminar.png");    
        img5.setAttribute("id","s5n3");
        img5.setAttribute("onClick","formarEnfermedad(5,'s5n3',2)");
        img5.style.position = 'absolute';
        img5.style.width = '125px';
        img5.style.height = '125px';
        niveles[2].sintomas[4].imagen = img5;

        var img6 = document.createElement("img");    
        img6.setAttribute("src","img/niveles/Nivel3/icono-escoliosis.png");    
        img6.setAttribute("id","s6n3");
        img6.setAttribute("onClick","formarEnfermedad(6,'s6n3',2)");
        img6.style.position = 'absolute';    
        img6.style.width = '125px';
        img6.style.height = '125px';
        niveles[2].sintomas[5].imagen = img6;

        var img7 = document.createElement("img");
        img7.setAttribute("src","img/niveles/Nivel3/icono-insufrespiratoria.png");    
        img7.setAttribute("id","s7n3");
        img7.setAttribute("onClick","formarEnfermedad(7,'s7n3',2)");
        img7.style.position = 'absolute';    
        img7.style.width = '125px';
        img7.style.height = '125px';
        niveles[2].sintomas[6].imagen = img7;

        var img8 = document.createElement("img");
        img8.setAttribute("src","img/niveles/Nivel3/icono-parestesia.png");
        img8.setAttribute("id","s8n3");
        img8.setAttribute("onClick","formarEnfermedad(8,'s8n3',2)");
        img8.style.position = 'absolute';    
        img8.style.width = '125px';
        img8.style.height = '125px';
        niveles[2].sintomas[7].imagen = img8;

        var img9 = document.createElement("img");    
        img9.setAttribute("src","img/niveles/Nivel3/icono-temblor.png");    
        img9.setAttribute("id","s9n3");
        img9.setAttribute("onClick","formarEnfermedad(9,'s9n3',2)");
        img9.style.position = 'absolute';    
        img9.style.width = '125px';
        img9.style.height = '125px';
        niveles[2].sintomas[8].imagen = img9;

        var img10 = document.createElement("img");    
        img10.setAttribute("src","img/niveles/Nivel3/icono-visionnublada.png");    
        img10.setAttribute("id","s10n3");
        img10.setAttribute("onClick","formarEnfermedad(10,'s10n3',2)");
        img10.style.position = 'absolute';    
        img10.style.width = '125px';
        img10.style.height = '125px';
        niveles[2].sintomas[9].imagen = img10;
        
        asignarCoordenadas(niveles[2].sintomas, container3);
        generado3 = true;
    }
}
//nivel 4
function crearNivel4(){
    if(!generado4){
        numEnfermedad=0;

        niveles[3].enfermedades[0] = {};    
        niveles[3].enfermedades[0].sintoma1 = 10;
        niveles[3].enfermedades[0].sintoma2 = 6;
        niveles[3].enfermedades[0].sintoma3 = 1;
        niveles[3].enfermedades[0].icono = "img/niveles/Nivel4/iconoenfermedad-cabezacaida.png";
        niveles[3].enfermedades[1] = {};
        niveles[3].enfermedades[1].sintoma1 = 9;
        niveles[3].enfermedades[1].sintoma2 = 8;
        niveles[3].enfermedades[1].sintoma3 = 7;
        niveles[3].enfermedades[1].icono = "img/niveles/Nivel4/iconoenfermedad-deformidadhuesos.png";
        niveles[3].enfermedades[2] = {};
        niveles[3].enfermedades[2].sintoma1 = 2;
        niveles[3].enfermedades[2].sintoma2 = 3;
        niveles[3].enfermedades[2].sintoma3 = 4;
        niveles[3].enfermedades[2].icono = "img/niveles/Nivel4/iconoenfermedad-debilidadpulmonar.png";

        var img1 = document.createElement("img");    
        img1.setAttribute("src","img/niveles/Nivel4/icono-debilidadhablar.png");      
        img1.setAttribute("id","s1n4");
        img1.setAttribute("onClick","formarEnfermedad(1,'s1n4',3)");
        img1.style.position = 'absolute';  
        img1.style.width = '125px';
        img1.style.height = '125px';
        niveles[3].sintomas[0].imagen = img1;

        var img2 = document.createElement("img");    
        img2.setAttribute("src","img/niveles/Nivel4/icono-dificultadbrazos.png");    
        img2.setAttribute("id","s2n4");
        img2.setAttribute("onClick","formarEnfermedad(2,'s2n4',3)");
        img2.style.position = 'absolute';    
        img2.style.width = '125px';
        img2.style.height = '125px';
        niveles[3].sintomas[1].imagen = img2;

        var img3 = document.createElement("img");    
        img3.setAttribute("src","img/niveles/Nivel4/icono-dificultadtragar.png");    
        img3.setAttribute("id","s3n4");
        img3.setAttribute("onClick","formarEnfermedad(3,'s3n4',3)");
        img3.style.position = 'absolute';    
        img3.style.width = '125px';
        img3.style.height = '125px';
        niveles[3].sintomas[2].imagen = img3;

        var img4 = document.createElement("img");    
        img4.setAttribute("src","img/niveles/Nivel4/icono-dolorarticular.png");    
        img4.setAttribute("id","s4n4");
        img4.setAttribute("onClick","formarEnfermedad(4,'s4n4',3)");
        img4.style.position = 'absolute';    
        img4.style.width = '125px';
        img4.style.height = '125px';
        niveles[3].sintomas[3].imagen = img4;

        var img5 = document.createElement("img");   
        img5.setAttribute("src","img/niveles/Nivel4/icono-kcardiopatia.png");
        img5.setAttribute("id","s5n4");
        img5.setAttribute("onClick","formarEnfermedad(5,'s5n4',3)");
        img5.style.position = 'absolute';    
        img5.style.width = '125px';
        img5.style.height = '125px';
        niveles[3].sintomas[4].imagen = img5;

        var img6 = document.createElement("img");    
        img6.setAttribute("src","img/niveles/Nivel4/icono-parpadocaido.png");    
        img6.setAttribute("id","s6n4");
        img6.setAttribute("onClick","formarEnfermedad(6,'s6n4',3)");
        img6.style.position = 'absolute';    
        img6.style.width = '125px';
        img6.style.height = '125px';
        niveles[3].sintomas[5].imagen = img6;

        var img7 = document.createElement("img");
        img7.setAttribute("src","img/niveles/Nivel4/icono-perdidaaudicion.png");    
        img7.setAttribute("id","s7n4");
        img7.setAttribute("onClick","formarEnfermedad(7,'s7n4',3)");
        img7.style.position = 'absolute';    
        img7.style.width = '125px';
        img7.style.height = '125px';
        niveles[3].sintomas[6].imagen = img7;

        var img8 = document.createElement("img");
        img8.setAttribute("src","img/niveles/Nivel4/icono-piernasenx.png");
        img8.setAttribute("id","s8n4");
        img8.setAttribute("onClick","formarEnfermedad(8,'s8n4',3)");
        img8.style.position = 'absolute';    
        img8.style.width = '125px';
        img8.style.height = '125px';
        niveles[3].sintomas[7].imagen = img8;

        var img9 = document.createElement("img");    
        img9.setAttribute("src","img/niveles/Nivel4/icono-sufrecorazon.png");    
        img9.setAttribute("id","s9n4");
        img9.setAttribute("onClick","formarEnfermedad(9,'s9n4',3)");
        img9.style.position = 'absolute';    
        img9.style.width = '125px';
        img9.style.height = '125px';
        niveles[3].sintomas[8].imagen = img9;

        var img10 = document.createElement("img");    
        img10.setAttribute("src","img/niveles/Nivel4/icono-visiondoble.png");    
        img10.setAttribute("id","s10n4");
        img10.setAttribute("onClick","formarEnfermedad(10,'s10n4',3)");
        img10.style.position = 'absolute';    
        img10.style.width = '125px';
        img10.style.height = '125px';
        niveles[3].sintomas[9].imagen = img10;
        
        asignarCoordenadas(niveles[3].sintomas, container4);
        generado4 = true;
    }
}

//NIVEL 5
function crearNivel5(){
    if(!generado5){
        numEnfermedad=0;

        niveles[4].enfermedades[0] = {};    
        niveles[4].enfermedades[0].sintoma1 = 2;
        niveles[4].enfermedades[0].sintoma2 = 7;
        niveles[4].enfermedades[0].sintoma3 = 8;
        niveles[4].enfermedades[0].icono = "img/niveles/Nivel5/iconoenfermedad-ceguera.png";
        niveles[4].enfermedades[1] = {};
        niveles[4].enfermedades[1].sintoma1 = 10;
        niveles[4].enfermedades[1].sintoma2 = 1;
        niveles[4].enfermedades[1].sintoma3 = 5;
        niveles[4].enfermedades[1].icono = "img/niveles/Nivel5/iconoenfermedad-anillo.png";
        niveles[4].enfermedades[2] = {};
        niveles[4].enfermedades[2].sintoma1 = 9;
        niveles[4].enfermedades[2].sintoma2 = 3;
        niveles[4].enfermedades[2].sintoma3 = 6;
        niveles[4].enfermedades[2].icono = "img/niveles/Nivel5/iconoenfermedad-hemisferioscerebros.png";

        var img1 = document.createElement("img");    
        img1.setAttribute("src","img/niveles/Nivel5/icono-acidezestomacal.png");      
        img1.setAttribute("id","s1n5");
        img1.setAttribute("onClick","formarEnfermedad(1,'s1n5',4)");
        img1.style.position = 'absolute';  
        img1.style.width = '125px';
        img1.style.height = '125px';
        niveles[4].sintomas[0].imagen = img1;

        var img2 = document.createElement("img");    
        img2.setAttribute("src","img/niveles/Nivel5/icono-ampollascara.png");    
        img2.setAttribute("id","s2n5");
        img2.setAttribute("onClick","formarEnfermedad(2,'s2n5',4)");
        img2.style.position = 'absolute';    
        img2.style.width = '125px';
        img2.style.height = '125px';
        niveles[4].sintomas[1].imagen = img2;

        var img3 = document.createElement("img");    
        img3.setAttribute("src","img/niveles/Nivel5/icono-ausenciariñon.png");    
        img3.setAttribute("id","s3n5");
        img3.setAttribute("onClick","formarEnfermedad(3,'s3n5',4)");
        img3.style.position = 'absolute';    
        img3.style.width = '125px';
        img3.style.height = '125px';
        niveles[4].sintomas[2].imagen = img3;

        var img4 = document.createElement("img");    
        img4.setAttribute("src","img/niveles/Nivel5/icono-cataplejia.png");    
        img4.setAttribute("id","s4n5");
        img4.setAttribute("onClick","formarEnfermedad(4,'s4n5',4)");
        img4.style.position = 'absolute';    
        img4.style.width = '125px';
        img4.style.height = '125px';
        niveles[4].sintomas[3].imagen = img4;

        var img5 = document.createElement("img");   
        img5.setAttribute("src","img/niveles/Nivel5/icono-dificultadtragar2.png");    
        img5.setAttribute("id","s5n5");
        img5.setAttribute("onClick","formarEnfermedad(5,'s5n5',4)");
        img5.style.position = 'absolute';    
        img5.style.width = '125px';
        img5.style.height = '125px';
        niveles[4].sintomas[4].imagen = img5;

        var img6 = document.createElement("img");    
        img6.setAttribute("src","img/niveles/Nivel5/icono-hinchazoncara.png");    
        img6.setAttribute("id","s6n5");
        img6.setAttribute("onClick","formarEnfermedad(6,'s6n5',4)");
        img6.style.position = 'absolute';    
        img6.style.width = '125px';
        img6.style.height = '125px';
        niveles[4].sintomas[5].imagen = img6;

        var img7 = document.createElement("img");
        img7.setAttribute("src","img/niveles/Nivel5/icono-inflamacionmedula.png");    
        img7.setAttribute("id","s7n5");
        img7.setAttribute("onClick","formarEnfermedad(7,'s7n5',4)");
        img7.style.position = 'absolute';    
        img7.style.width = '125px';
        img7.style.height = '125px';
        niveles[4].sintomas[6].imagen = img7;

        var img8 = document.createElement("img");
        img8.setAttribute("src","img/niveles/Nivel5/icono-inflamnerviooptico.png");
        img8.setAttribute("id","s8n5");
        img8.setAttribute("onClick","formarEnfermedad(8,'s8n5',4)");
        img8.style.position = 'absolute';    
        img8.style.width = '125px';
        img8.style.height = '125px';
        niveles[4].sintomas[7].imagen = img8;

        var img9 = document.createElement("img");    
        img9.setAttribute("src","img/niveles/Nivel5/icono-retrasolenguaje.png");    
        img9.setAttribute("id","s9n5");
        img9.setAttribute("onClick","formarEnfermedad(9,'s9n5',4)");
        img9.style.position = 'absolute';    
        img9.style.width = '125px';
        img9.style.height = '125px';
        niveles[4].sintomas[8].imagen = img9;

        var img10 = document.createElement("img");    
        img10.setAttribute("src","img/niveles/Nivel5/icono-ulcerasestomacales.png");    
        img10.setAttribute("id","s10n5");
        img10.setAttribute("onClick","formarEnfermedad(10,'s10n5',4)");
        img10.style.position = 'absolute';    
        img10.style.width = '125px';
        img10.style.height = '125px';
        niveles[4].sintomas[9].imagen = img10;
        
        asignarCoordenadas(niveles[4].sintomas, container5);
        generado5 = true;
    }
}