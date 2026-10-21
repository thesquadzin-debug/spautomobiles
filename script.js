/* =====================================================================
   SP AUTOMOBILES - PAGE LOGIC
   Normal content changes (phone, address, models, slides) are done in
   config.js. Edit this file only to change how the page behaves.
   ===================================================================== */
var S=SP.shop;
var PHONE=S.whatsapp;
/* models in the internal format: name, engine, torque, type, groups, isNew, about */
var M=SP.models.map(function(o){return [o.name,o.engine,o.torque,o.type==="scooter"?"s":"m",o.groups,o.isNew?1:0,o.about]});
/* hero slides: look each name up in the model list */
var H=SP.heroSlides.map(function(n){return M.filter(function(x){return x[0]===n})[0]}).filter(Boolean);
var AC=SP.slideColours;
document.documentElement.style.setProperty("--dur",SP.slideSeconds+"s");
/* fill every element marked data-cfg="..." with the matching value from config.js */
[].forEach.call(document.querySelectorAll("[data-cfg]"),function(el){var v=S[el.getAttribute("data-cfg")];if(v!==undefined)el.textContent=v});
document.getElementById("t").innerHTML=SP.requests.map(function(r){return "<option>"+r+"</option>"}).join("");
document.title=S.name;

function parse(s){var r=/^([\d.]+)\s*(\S+)\s*(.*)$/.exec(s);return r?{v:r[1],u:r[2],r:r[3]}:{v:s,u:"",r:""}}
function unitTxt(u){var l=u.toLowerCase();return l==="nm"?"Nm":l==="kw"?"kW":l}
function pct(p){var v=parseFloat(p.v),l=p.u.toLowerCase(),d=l==="cc"?450:l==="km"?200:l==="nm"?40:l==="kw"?20:100;return Math.max(6,Math.min(100,Math.round(v/d*100)))}
function engLabel(p){return p.u.toLowerCase()==="km"?"Range":"Displacement"}
function torLabel(p){var l=p.u.toLowerCase();return l==="kw"?(/peak/i.test(p.r)?"Peak power":"Power"):"Torque"}
function ic(x){return '<svg viewBox="0 0 300 150" aria-hidden="true"><use href="#'+(x[3]==="s"?"s":"b")+'"/></svg>'}
function pad(n){return n<10?"0"+n:""+n}

var sls=document.getElementById("sls"),dots=document.getElementById("dots"),cnt=document.getElementById("cnt"),hero=document.getElementById("hero");
var cur=0,tm,reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function slide(x,i){
  var e=parse(x[1]),t=parse(x[2]);
  return '<div class="sl'+(i?'':' on')+'"><div>'
   +'<span class="tg">'+(x[5]?'New':'Hero')+'</span><h1>'+x[0]+'</h1><p class="ds">'+x[6]+'</p>'
   +'<div class="tele"><div><small>'+engLabel(e)+'</small><b>'+e.v+'<em>'+unitTxt(e.u)+'</em></b><i style="--p:'+pct(e)+'%"></i></div>'
   +'<div><small>'+torLabel(t)+'</small><b>'+t.v+'<em>'+unitTxt(t.u)+'</em></b><i style="--p:'+pct(t)+'%"></i>'+(t.r?'<span>'+t.r+'</span>':'')+'</div></div>'
   +'<p class="pr">'+S.priceNote+'</p>'
   +'<div class="cta"><a class="btn" href="#contact" data-m="'+x[0]+'">Book test ride</a><a class="btn o" href="#models">Explore range</a></div></div>'
   +'<div class="stage"><div class="floor"></div><div class="ring"></div><div class="ring r2"></div><div class="scan"></div>'+ic(x)+'</div></div>';
}
sls.innerHTML=H.map(slide).join("");
dots.innerHTML=H.map(function(_,i){return '<button aria-label="Slide '+(i+1)+'"'+(i?'':' class="on"')+'></button>'}).join("");
function setCnt(){cnt.innerHTML='<b>'+pad(cur+1)+'</b> / '+pad(H.length)}
setCnt();hero.style.setProperty("--a",AC[0]);

function go(n){
  cur=(n+H.length)%H.length;
  [].forEach.call(sls.children,function(s,i){s.classList.toggle("on",i===cur)});
  [].forEach.call(dots.children,function(d,i){d.classList.remove("on");if(i===cur){void d.offsetWidth;d.classList.add("on")}});
  hero.style.setProperty("--a",AC[cur]);setCnt();auto();
}
function auto(){clearInterval(tm);if(!reduce)tm=setInterval(function(){go(cur+1)},SP.slideSeconds*1000)}
document.getElementById("pv").onclick=function(){go(cur-1)};
document.getElementById("nx").onclick=function(){go(cur+1)};
dots.onclick=function(e){var b=e.target.closest("button");if(!b)return;var i=[].indexOf.call(dots.children,b);if(i>-1)go(i)};
auto();

var T=SP.tabs,tb=document.getElementById("tb"),gr=document.getElementById("gr"),rc=document.getElementById("rc"),sel=document.getElementById("m");
tb.innerHTML=T.map(function(t,i){return '<button'+(i?'':' class="on"')+' data-t="'+t+'">'+t+'</button>'}).join("");
function card(x){
  var e=parse(x[1]),t=parse(x[2]);
  return '<div class="mc">'+(x[5]?'<span class="nw">NEW</span>':'')+'<div class="im">'+ic(x)+'</div><div class="bd"><h3>'+x[0]+'</h3>'
   +'<div class="m"><div><span>'+engLabel(e)+'</span><b>'+e.v+' '+unitTxt(e.u)+'</b><i style="--p:'+pct(e)+'%"></i></div>'
   +'<div><span>'+torLabel(t)+'</span><b>'+t.v+' '+unitTxt(t.u)+'</b><i style="--p:'+pct(t)+'%"></i></div></div>'
   +'<p class="bl">'+x[6]+'</p>'
   +'<div class="rw"><span>Ask price</span><a href="#contact" data-m="'+x[0]+'">Enquire &rarr;</a></div></div></div>';
}
function draw(t){
  var L=M.filter(function(x){return x[4].indexOf(t)>-1});
  rc.textContent=pad(L.length)+" model"+(L.length===1?"":"s")+" · "+t;
  gr.innerHTML=L.map(card).join("");
}
function pick(t){[].forEach.call(tb.children,function(b){b.classList.toggle("on",b.dataset.t===t)});draw(t)}
draw("New Launch");
tb.onclick=function(e){var b=e.target.closest("button");if(b)pick(b.dataset.t)};
sel.innerHTML='<option>Not sure yet</option>'+M.map(function(x){return "<option>"+x[0]+"</option>"}).join("");
document.addEventListener("click",function(e){
  var a=e.target.closest("a[data-m]");if(a)sel.value=a.dataset.m;
  var l=e.target.closest("nav a[data-t]");if(l)pick(l.dataset.t);
});
var nv=document.getElementById("nv"),mt=document.getElementById("mt");
mt.onclick=function(){var o=nv.classList.toggle("on");mt.setAttribute("aria-expanded",o)};
nv.onclick=function(e){if(e.target.closest("a")){nv.classList.remove("on");mt.setAttribute("aria-expanded","false")}};

function copyText(txt,btn,label){
  function done(){var o=btn.textContent;btn.textContent="Copied";setTimeout(function(){btn.textContent=o},1400)}
  try{navigator.clipboard.writeText(txt).then(done,function(){sel2(txt,btn)})}catch(err){sel2(txt,btn)}
}
function sel2(txt,btn){
  var src=document.getElementById("ph"),r=document.createRange();
  r.selectNodeContents(src);var s=window.getSelection();s.removeAllRanges();s.addRange(r);
}
document.getElementById("cpn").onclick=function(){copyText(document.getElementById("ph").textContent,this)};
var fm=document.getElementById("fm"),wa=document.getElementById("wa");
function build(){
  var msg="Hello "+S.name+",\nName: "+document.getElementById("n").value+"\nPhone: "+document.getElementById("p").value+"\nModel: "+sel.value+"\nRequest: "+document.getElementById("t").value;
  wa.href="https://wa.me/"+PHONE+"?text="+encodeURIComponent(msg);
}
fm.addEventListener("input",build);fm.addEventListener("change",build);build();
wa.addEventListener("click",function(e){
  if(!fm.checkValidity()){e.preventDefault();fm.reportValidity();return}
  build();
});
fm.onsubmit=function(e){e.preventDefault();if(fm.checkValidity()){build();wa.click()}};
