export function run(e,t,l){console.log(e),console.log("Transform start"),console.log(e),require("moment");for(let M=0;M<e.value.length;M++){let t=new Date(e.value[M].start.dateTime);console.log("REAL = "+e.value[M].start.dateTime),console.log("START = "+t.toISOString());let l=new Date(e.value[M].end.dateTime);console.log("REAL = "+e.value[M].end.dateTime.toString()),console.log("END = "+l.toISOString());let o=new Date(e.value[M].start.dateTime);o.setTime(o.getTime()+144e5);let s=new Date(e.value[M].end.dateTime);s.setTime(s.getTime()+144e5),e.value[M].start.dateTime=o.toISOString(),e.value[M].end.dateTime=s.toISOString(),console.log("Adjusted start = "+e.value[M].start.dateTime),console.log("Adjusted End = "+e.value[M].end.dateTime)}document.getElementById("details").innerHTML="     "+t+" | "+l;var o=document.getElementById("bookings"),s=new Date,n=s.getHours(),r=s.getMinutes();r<10&&(r="0"+r);var a=n+":"+r,i=[];for(let M=0;M<e.value.length;M++){var u,g;m=e.value[M].start.dateTime;var d=e.value[M].end.dateTime;for(let e=0;e<11;e++)d=d.substr(1),console.log(d);d=d.substr(0,5),console.log(d),g=d.substr(0,2),console.log(g),u=d.substr(3,6),g>n&&i.push(m),console.log(u)}i.sort();var v="";for(let M=0;M<e.value.length;M++)v=v+"||||"+i[M];for(let M=0;M<i.length;M++)for(let t=0;t<e.value.length;t++){var m;if("FILTER"!==e.value[t].location.uniqueId&&(m=e.value[t].start.dateTime)==i[M]){var c,T=e.value[t].end.dateTime;for(let e=0;e<11;e++)m=m.substr(1);m=m.substr(0,5);for(let e=0;e<11;e++)T=T.substr(1);T=T.substr(0,5),c=e.value[t].subject;var y=o.insertRow(M+1),b=y.insertCell(0);b.style.fontSize="22px";var f=y.insertCell(1);f.style.fontSize="22px",b.innerHTML=m+" - "+T,b.style.color="white",b.style.height="70px",f.innerHTML=c,f.style.color="white",f.style.height="70px";var h=e.value[t].end.dateTime;for(let e=0;e<15;e++)h=h.substr(1);var S=(h=h.substr(0,6)).substr(0,3),p=h.substr(4,6),I=e.value[t].end.dateTime;for(let e=0;e<15;e++)x=h.substr(1);I=I.substr(0,6);var x=m.substr(0,2),E=m.substr(3,4);S=g,p=u,console.log("EH: "+S+"/"+n),console.log("SH: "+x+"/"+n),console.log("SM:"+E+"/"+r),S>=n&&n>=x&&p>=r&&r>=E&&(b.style.backgroundColor="rgb(100,0,0)",b.style.height="100px",b.style.fontSize="30px",document.getElementById("verify").innerHTML=p,f.style.backgroundColor="rgb(100,0,0)",f.style.height="100px",f.style.fontSize="30px")}}if(0==i.length){var H=document.getElementById("check");H.innerHTML="NO UPCOMING BOOKINGS TODAY",H.style.height="300px",H.style.backgroundColor="rgb(200,200,200)",H.style.fontSize="60px",H.style.color="rgb(200,0,0)",o.style.display="none"}console.log("Transform end");var L=document.getElementById("time");L.innerHTML=a,L.style.fontSize="50px",L.style.fontStyle="Arial",L.style.color="rgb(200,0,0)"};