(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),c=a.n(n),r=a("O40h"),s=a("q1tI"),i=a.n(s),l=a("zgjP"),o=a.n(l),m=a("I0qz"),u=function(e){var t=e.precio,a=t.PRICE,n=t.CHANGEPCTDAY,c=t.CHANGEPCT24HOUR;return i.a.createElement("div",{className:"card text-white bg-success mb-3"},i.a.createElement("div",{className:"card-header"},"Precio del Bitcoin"),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Precio Actual: ",a," "),i.a.createElement("div",{className:"d-md-flex justify-content-between"},i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Última Hora: ")," ",n," %"),i.a.createElement("p",{className:"card-text"},i.a.createElement("span",{className:"font-weight-bold"},"Últimas 24 horas: ")," ",c," %"))))},d=function(e){var t,a=e.noticia,n=a.urlToImage,c=a.url,r=a.title,s=a.description,l=a.source;return t=""!==n?i.a.createElement("img",{src:n,alt:r,className:"card-img-top"}):i.a.createElement("p",{className:"text-center my-5"},"Imagen No Disponible"),i.a.createElement("div",{className:"col-md-6 col-12 mb-4"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},t),i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},r),i.a.createElement("p",{className:"card-text"},s),i.a.createElement("p",{className:"card-text"},l.name),i.a.createElement("a",{href:c,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticia"))))},p=function(e){return i.a.createElement("div",{className:"row"},e.noticias.map(function(e){return i.a.createElement(d,{key:e.url,noticia:e})}))},E=a("pLtp"),v=a.n(E),N=function(e){var t=e.evento,a=t.name,n=t.url,c=t.description,r=a.text;r.length>100&&(r=r.substr(0,100)+"...");var s=c.text;return s&&(s=s.substr(0,250)+"..."),i.a.createElement("a",{href:n,target:"_blank",className:"list-group-item active text-light mb-1"},i.a.createElement("h3",{className:"mb-3"},r),i.a.createElement("p",{className:"mb-1"},s))},f=function(e){var t=e.eventos;return i.a.createElement("div",{className:"list-group"},v()(t).map(function(e){return i.a.createElement(N,{key:e,evento:t[e]})}))},b=function(e){return i.a.createElement(m.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"Precio del BitCoin"),i.a.createElement(u,{precio:e.precioBitcoin})),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("h2",null,"Noticias sobre BitCoin"),i.a.createElement(p,{noticias:e.noticiasBitcoin})),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h2",null,"Próximos Eventos BitCoin"),i.a.createElement(f,{eventos:e.eventosBitcoin}))))};b.getInitialProps=Object(r.default)(c.a.mark(function e(){var t,a,n,r,s,i,l,m,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,a.DISPLAY.BTC.USD;case 8:return n=e.sent,e.next=11,o()("https://newsapi.org/v2/everything?q=bitcoin&language=es&apiKey=1926f2bb78fb439896e11f22e100cd7c");case 11:return r=e.sent,e.next=14,r.json();case 14:return s=e.sent,e.next=17,s.articles;case 17:return i=e.sent,e.next=20,o()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=RHG53OLQY3DSVNYHIPMZ&locale=es_ES");case 20:return l=e.sent,e.next=23,l.json();case 23:return m=e.sent,e.next=26,m.events;case 26:return u=e.sent,e.abrupt("return",{precioBitcoin:n,noticiasBitcoin:i,eventosBitcoin:u});case 28:case"end":return e.stop()}},e)}));t.default=b},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("m/Gl").default||a("m/Gl"))}},[["vlRD","5d41","9da1"]]]);