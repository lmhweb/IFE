var btn = document.getElementsByTagName("button")[0];
var theText = document.getElementsByTagName("span")[0];
btn.onclick=function(){
    if(theText.className=="transition-style"){
        theText.className=""
    }else{
        theText.className="transition-style"
    }
}