const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.setAttribute("disabled",!0),r.removeAttribute("disabled")}),1e3)})),r.addEventListener("click",(()=>{clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.c0129b0e.js.map