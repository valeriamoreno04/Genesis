var btnLvl1;
var sintomas;
var enfermedades;
var element;

window.onload = init;

function init(){
	inicializarVariables();
	inicializarEventos();	
}

function inicializarVariables(){
    btnLvl1 = document.getElementById("btnLevel1");
    sintomas = [];
    element = document.getElementById("div1");
    
    enfermedades = new Array();
    enfermedades[0] = new Object();   
    enfermedades[0].sintoma1 = 4;
    enfermedades[0].sintoma2 = 6;
    enfermedades[0].sintoma3 = 7;
    enfermedades[0].icono = "img/sintomas/icono-sr.png";
}

function inicializarEventos(){
    btnLvl1.addEventListener("click",crearSintomas);
}

function crearSintomas(evt){
    var a = document.createElement("a");
    var img = document.createElement("img");    
    img.setAttribute("src","img/sintomas/icono-cre.png");    
    a.appendChild(img);

    var a2 = document.createElement("a");
    var img2 = document.createElement("img");    
    img2.setAttribute("src","img/sintomas/icono-de.png");    
    a2.appendChild(img2);

    /*var a3 = document.createElement("a");
    var img3 = document.createElement("img");    
    img3.setAttribute("src","img/sintomas/icono-escu.png");    
    a.appendChild(img3);*/

    var a3 = document.createElement("a");
    var img3 = document.createElement("img");    
    img3.setAttribute("src","img/sintomas/icono-hi.png");    
    a3.appendChild(img3);

    var a4 = document.createElement("a");
    var img4 = document.createElement("img");    
    a4.setAttribute("onClick","formarEnfermedad(4)");
    img4.setAttribute("src","img/sintomas/icono-in.png");    
    a4.appendChild(img4);

    var a5 = document.createElement("a");
    var img5 = document.createElement("img");    
    img5.setAttribute("src","img/sintomas/icono-ma.png");    
    a5.appendChild(img5);

    var a6 = document.createElement("a");
    var img6 = document.createElement("img");   
    a6.setAttribute("onClick","formarEnfermedad(6)"); 
    img6.setAttribute("src","img/sintomas/icono-nu.png");    
    a6.appendChild(img6);

    var a7 = document.createElement("a");
    var img7 = document.createElement("img"); 
    a7.setAttribute("onClick","formarEnfermedad(7)");   
    img7.setAttribute("src","img/sintomas/icono-par.png");    
    a7.appendChild(img7);

    var a8 = document.createElement("a");
    var img8 = document.createElement("img");    
    img8.setAttribute("src","img/sintomas/icono-pul.png");    
    a8.appendChild(img8);

    var a9 = document.createElement("a");
    var img9 = document.createElement("img");    
    img9.setAttribute("src","img/sintomas/icono-si.png");    
    a9.appendChild(img9);

    /*var a11 = document.createElement("a");
    var img11 = document.createElement("img");    
    img11.setAttribute("src","img/sintomas/icono-sr.png");    
    a.appendChild(img11);*/
    
    element.appendChild(a);  
    element.appendChild(a2);  
    element.appendChild(a3);  
    element.appendChild(a4);  
    element.appendChild(a5);  
    element.appendChild(a6);  
    element.appendChild(a7);  
    element.appendChild(a8);  
    element.appendChild(a9);  
    //element.appendChild(a10);  
    //element.appendChild(a11);       
}

function formarEnfermedad(indice){
    if(sintomas[1]==undefined){
        console.log(indice);
        sintomas.push(indice);
    }
    else{
        sintomas.push(indice);
        for(var i=0;i<1;i++){
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
                element.appendChild(imgEnfermedad);
            }            
        }
        sintomas = [];
    }
}



(function() {

    var createNodes = function (numNodes, radius) {
      var nodes = [], 
          width = (radius * 2) + 50,
          height = (radius * 2) + 50,
          angle,
          x,
          y,
          i;
      for (i=0; i<numNodes; i++) {
       angle = (i / (numNodes/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                             // For a semicircle, we would use (i / numNodes) * Math.PI.
       x = (radius * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
       y = (radius * Math.sin(angle)) + (width/2); // Calculate the y position of the element.
       nodes.push({'id': i, 'x': x, 'y': y});
      }
      return nodes;
    }

    var createSvg = function (radius, callback) {
      d3.selectAll('svg').remove();
      var svg = d3.select('#canvas').append('svg:svg')
                 .attr('width', (radius * 2) + 50)
                 .attr('height', (radius * 2) + 50);
      callback(svg);
    }

    var createElements = function (svg, nodes, elementRadius) {
      element = svg.selectAll('circle')
                     .data(nodes)
                   .enter().append('svg:circle')
                     .attr('r', elementRadius)
                     .attr('cx', function (d, i) {
                       return d.x;
                     })
                     .attr('cy', function (d, i) {
                       return d.y;
                     });
    }

    var draw = function () {
      var numNodes = $("#numNodes").val() || 100;
      var radius = $("#radius").val() || 200;
      var nodes = createNodes(numNodes, radius);
      createSvg(radius, function (svg) {
        createElements(svg, nodes, 5);
      });
    }

   $(document).ready(function() {
       draw();
   });

   $("#radius, #numNodes").bind('keyup', function(e) {
       draw();
   });

   })();