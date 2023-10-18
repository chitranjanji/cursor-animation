var cursor = document.querySelector("#cursor")
 window.addEventListener("mousemove",function(elem){
    cursor.style.left = elem.x+"px"
    cursor.style.top = elem.y+"px"
 })