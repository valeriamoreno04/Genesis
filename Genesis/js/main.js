var btnLvl1;
var sintomas;
var enfermedades;
var element;
var radio;
var angulo;
var step;
var altoContainer;
var anchoContainer;
var cont;
var iconos;
var obejetivosAnim;
var coordenadasOriginales;
var botones = [];


function init(){
	inicializarVariables();
	inicializarEventos();	
}

function inicializarVariables(){
    btnLvl1 = document.getElementById("btnLevel1");
    sintomas = [];
    element = document.querySelector("#div1");
    cont = 0;
    iconos = [];
    obejetivosAnim = new Array();
    coordenadasOriginales = new Array();
    
    enfermedades = new Array();
    enfermedades[0] = new Object();   
    enfermedades[0].sintoma1 = 5;
    enfermedades[0].sintoma2 = 7;
    enfermedades[0].sintoma3 = 8;
    enfermedades[0].icono = "img/sintomas/icono-sr.png";

    radio = 250;    
    anchoContainer = parseInt(getComputedStyle(element).width, 10);
    altoContainer = parseInt(getComputedStyle(element).height, 10);
    angulo = 0;
    step = (2*Math.PI)/10;
}

function inicializarEventos(){
    btnLvl1.addEventListener("click",crearSintomas);
}

function crearSintomas(evt){    
    var img1 = document.createElement("img");    
    img1.setAttribute("src","img/sintomas/icono-cos.png");      
    img1.setAttribute("class","sintoma1");
    img1.setAttribute("onClick","formarEnfermedad(1,'.sintoma1')");
    img1.style.position = 'absolute';  
    img1.style.width = '125px';
    img1.style.height = '125px';
    iconos.push(img1);

    var img2 = document.createElement("img");    
    img2.setAttribute("src","img/sintomas/icono-cre.png");    
    img2.setAttribute("class","sintoma2");
    img2.setAttribute("onClick","formarEnfermedad(2,'.sintoma2')");
    img2.style.position = 'absolute';    
    img2.style.width = '125px';
    img2.style.height = '125px';
    iconos.push(img2);

    var img3 = document.createElement("img");    
    img3.setAttribute("src","img/sintomas/icono-de.png");    
    img3.setAttribute("class","sintoma3");
    img3.setAttribute("onClick","formarEnfermedad(3,'.sintoma3')");
    img3.style.position = 'absolute';    
    img3.style.width = '125px';
    img3.style.height = '125px';
    iconos.push(img3);

    var img4 = document.createElement("img");    
    img4.setAttribute("src","img/sintomas/icono-hi.png");    
    img4.setAttribute("class","sintoma4");
    img4.setAttribute("onClick","formarEnfermedad(4,'.sintoma4')");
    img4.style.position = 'absolute';    
    img4.style.width = '125px';
    img4.style.height = '125px';
    iconos.push(img4);

    var img5 = document.createElement("img");   
    img5.setAttribute("src","img/sintomas/icono-in.png");    
    img5.setAttribute("class","sintoma5");
    img5.setAttribute("onClick","formarEnfermedad(5,'.sintoma5')");
    img5.style.position = 'absolute';    
    img5.style.width = '125px';
    img5.style.height = '125px';
    iconos.push(img5);

    var img6 = document.createElement("img");    
    img6.setAttribute("src","img/sintomas/icono-ma.png");    
    img6.setAttribute("class","sintoma6");
    img6.setAttribute("onClick","formarEnfermedad(6,'.sintoma6')");
    img6.style.position = 'absolute';    
    img6.style.width = '125px';
    img6.style.height = '125px';
    iconos.push(img6);

    var img7 = document.createElement("img");
    img7.setAttribute("src","img/sintomas/icono-nu.png");    
    img7.setAttribute("class","sintoma7");
    img7.setAttribute("onClick","formarEnfermedad(7,'.sintoma7')");
    img7.style.position = 'absolute';    
    img7.style.width = '125px';
    img7.style.height = '125px';
    iconos.push(img7);

    var img8 = document.createElement("img");
    img8.setAttribute("src","img/sintomas/icono-par.png");
    img8.setAttribute("class","sintoma8");
    img8.setAttribute("onClick","formarEnfermedad(8,'.sintoma8')");
    img8.style.position = 'absolute';    
    img8.style.width = '125px';
    img8.style.height = '125px';
    iconos.push(img8);

    var img9 = document.createElement("img");    
    img9.setAttribute("src","img/sintomas/icono-pul.png");    
    img9.setAttribute("class","sintoma9");
    img9.setAttribute("onClick","formarEnfermedad(9,'.sintoma9')");
    img9.style.position = 'absolute';    
    img9.style.width = '125px';
    img9.style.height = '125px';
    iconos.push(img9);

    var img10 = document.createElement("img");    
    img10.setAttribute("src","img/sintomas/icono-si.png");    
    img10.setAttribute("class","sintoma10");
    img10.setAttribute("onClick","formarEnfermedad(10,'.sintoma10')");
    img10.style.position = 'absolute';    
    img10.style.width = '125px';
    img10.style.height = '125px';
    iconos.push(img10);
    
    for(var i=0;i<10;i++){
        asignarCoordenadas(iconos[i]);
        element.appendChild(iconos[i]);
        coordenadasOriginales[i]=new Object();
        coordenadasOriginales[i].left = parseInt(iconos[i].style.left,10);
        coordenadasOriginales[i].top = parseInt(iconos[i].style.top,10);
    } 
    
}

function formarEnfermedad(indice, clase){
    var temp = new Object();
    temp.clase = clase;
    temp.indice = indice;
    obejetivosAnim.push(temp);
    if(sintomas[1]==undefined){
        //debugger;
        //console.log(indice);        
        sintomas.push(indice);
        botones.push(document.getElementsByClassName("sintoma"+indice)[0]);
        if(cont==0){            
            TweenMax.to(clase, 1, {left:279, top:615, scale:0.7});
            cont++;
        }else if(cont==1){
            TweenMax.to(clase, 1, {left:266, top:515, scale:0.7});
            cont++;
        }        
    }
    else{
        sintomas.push(indice);
        botones.push(document.getElementsByClassName("sintoma"+indice)[0]);
        //debugger;
        TweenMax.to(clase, 1, {left:362, top:551, scale:0.7});
        for(var i=0;i<enfermedades.length;i++){
            //debugger;
            if((enfermedades[i].sintoma1==sintomas[0]||
               enfermedades[i].sintoma1==sintomas[1]||
               enfermedades[i].sintoma1==sintomas[2])&&
               (enfermedades[i].sintoma2==sintomas[0]||
               enfermedades[i].sintoma2==sintomas[1]||
               enfermedades[i].sintoma2==sintomas[2])&&
               (enfermedades[i].sintoma3==sintomas[0]||
               enfermedades[i].sintoma3==sintomas[1]||
               enfermedades[i].sintoma3==sintomas[2])){
                   

                var imgEnfermedad = document.createElement("img");    
                imgEnfermedad.setAttribute("src", enfermedades[i].icono);
                imgEnfermedad.setAttribute("class","enfermedad");
                imgEnfermedad.style.position = 'absolute';
                imgEnfermedad.style.width = '125px';
                imgEnfermedad.style.height = '125px';
                imgEnfermedad.style.top = ((altoContainer/2 - 21) - parseInt(imgEnfermedad.style.width, 10)/2) + 'px';
                imgEnfermedad.style.left = ((anchoContainer/2 + 6) - parseInt(imgEnfermedad.style.height, 10)/2) + 'px';
                element.appendChild(imgEnfermedad);
                
                setTimeout(function(){
                
                TweenMax.to(".enfermedad", 1, {scale:2,delay:1});
                TweenMax.to(".enfermedad", 1, {left:412, top:1057, scale:1.15, delay:2});
                for(var j=0;j<3;j++){
                    botones[j].style.display="none";
                }
               },1500);
                //debugger;

                
                
            }
            else{
                //Reorganizar imgs
                //debugger;
                var left;
                var top;
                for(var i=0;i<obejetivosAnim.length;i++){
                    left = coordenadasOriginales[obejetivosAnim[i].indice-1].left;
                    top = coordenadasOriginales[obejetivosAnim[i].indice-1].top;
                    TweenMax.to(obejetivosAnim[i].clase, 1, {left:left, top:top, scale:1, delay:1});
                }
            }
        }
        obejetivosAnim = [];
        sintomas = [];
        cont = 0;
    }
}

function asignarCoordenadas(img){
    //debugger;    
    var x = Math.round(anchoContainer/2 + radio * Math.cos(angulo) - parseInt(img.style.width, 10)/2);
    var y = Math.round(((altoContainer/2)-25) + radio * Math.sin(angulo) - parseInt(img.style.height, 10)/2);
    //console.log(stringX);
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    angulo += step;
}