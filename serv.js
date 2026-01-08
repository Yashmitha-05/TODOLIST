document.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.style.textDecoration = "line-through"
    }
});