const table=$("table");
const max=$("#max");
const colorP=$("#colorPicker");
const pixelSize=$("#input_pixelS");
const gridSize=$("#sizePicker");

gridSize.submit(function(e) {
    e.preventDefault();
});



pixelSize.change(function(){
    if(pixelSize.val()>=2){
         const pixelS=pixelSize.val();
         const pixelSi=parseInt(pixelS,10);
         const maxW=690/(pixelSi+3);
         const maxH=460/(pixelSi+3);
         max.text("Max Size is "+Math.floor(maxH)+"*"+Math.floor(maxW));
    }
});


function makeGrid(){
    table.children().remove();
    const width=$("#input_width").val();
    const height=$("#input_height").val();
    const pixelS=pixelSize.val();
    const pixelSi=parseInt(pixelS,10);
    let maxW=690/(pixelSi+3);
    let maxH=460/(pixelSi+3);
    if(!(pixelSize.val())){
         maxW=30;
         maxH=20;
    }
    if(width<=maxW&&height<=maxH){
         max.css("color","white");
         for(let i=0;i<height;i++){
              table.append("<tr></tr>");
              for(let k=0;k<width;k++){
                   $("tr").last().append("<td></td>");
              }
         }
         const cell=$("td");
         cell.css("width",pixelSize.val());
         cell.css("height",pixelSize.val());
         cell.on('mousedown mouseover',function(x){
         if(x.buttons==1 || x.buttons==3){
              x.preventDefault();
              let c=colorP.val();
              $(this).css("background-color",c);
              $(this).css("border-color",c);
         }
         }).on('mousedown mouseover',function(u){
              if(u.buttons==2){
                   u.preventDefault();
                   $(this).css("background-color","white");
                   $(this).css("border-color","#cecdca");
              }});
}
else{
    max.text("Max Size is "+Math.floor(maxH)+"*"+Math.floor(maxW));
    max.css("color","red");
}
}