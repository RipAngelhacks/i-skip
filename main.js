javascript:window.dragElement=e=>{var t=0,n=0,o=0,i=0;function d(e){(e=e||window.event).preventDefault(),o=e.clientX,i=e.clientY,document.onmouseup=r,document.onmousemove=l}function l(d){(d=d||window.event).preventDefault(),t=o-d.clientX,n=i-d.clientY,o=d.clientX,i=d.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function r(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=d:e.onmousedown=d};var e=document.createElement("div");e.innerHTML='<div id="overloadPanel" style="width:300px; left: 1px; top: 1px; background-color: #282828; color: white; outline: white solid 1px; position:absolute; z-index: 99999;">\n    <h1 style="font-size: 32px;">iReady hack</h1><br><br><br>\n    <h4> WARNING: you can get banned for using this, also YOU HAVE TO GET 1 QUESTION RIGHT OR ELSE YOU WILL GET A 0 WITH THE QUESION SKIPPER ( 1 wrong = 0%, 1 wrong, 1 right = 50%, 1 right = 100%, ect...) </h4>\n    <h2 style="font-size: 25px; font-style: normal !important; color: white !important;">Question Skipper</h2><button id="skip" ">Skip current question</button><br><br>\n    <hr>This tool was created by <a href="https://github.com/wang-on-top/">wang</a>.<br><br>\n</div>',dragElement(e.firstElementChild),document.body.appendChild(e),document.getElementById("skip").addEventListener("click",(function(){if(document.getElementById("nav-forward")||html5Iframe.contentwindow.document.getElementById("nav-forward"))try{Object.values(document.getElementById("nav-forward"))[1].onClick()}catch{Object.values(html5Iframe.contentwindow.document.getElementById("nav-forward"))[1].onClick()}else alert("open a lesson")}));
