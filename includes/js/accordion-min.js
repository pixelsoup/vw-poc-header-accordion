const accordionFunction=(e,t)=>{document.addEventListener("click",(a=>{if(a.target.matches(e+" .js-accBtn"))if(a.target.parentElement.classList.contains("expanded"))a.target.parentElement.classList.remove("expanded");else{if(1==t){const t=document.querySelectorAll(e+" .js-accPanel");Array.prototype.forEach.call(t,(e=>{e.classList.remove("expanded")}))}a.target.parentElement.classList.add("expanded")}}))};accordionFunction("#js-navPrimaryList",!0);