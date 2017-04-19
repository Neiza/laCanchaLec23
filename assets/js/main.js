 var container = document.getElementsByClassName("container")[0];

 function createDivs(nDiv){
   for (var i=0; i<nDiv; i++){
       var div = document.createElement("div");
       div.setAttribute("id","div"+(i+1))
       container.appendChild(div);
   }
 }

createDivs(7);
