export function run(e,t,r){var l;console.log("Transform start"),console.log(e);for(let C=0;C<e.value.length;C++){let t=new Date(e.value[C].start.dateTime);t.setTime(t.getTime()+144e5);let r=new Date(e.value[C].end.dateTime);r.setTime(r.getTime()+144e5),e.value[C].start.dateTime=t.toISOString(),e.value[C].end.dateTime=r.toString()}document.getElementById("details").innerHTML="     "+t+" | "+r;var s=document.getElementById("bookings"),o=new Date,n=o.getHours(),a=o.getMinutes();a<10&&(a="0"+a);var u=[];for(let C=0;C<e.value.length;C++){var i;v=e.value[C].start.dateTime;var g=e.value[C].end.dateTime;for(let e=0;e<15;e++)g=g.substr(1);i=(g=g.substr(0,6)).substr(0,3),g.substr(4,6),i>n&&u.push(v)}u.sort();var d="";for(let C=0;C<e.value.length;C++)d=d+"||||"+u[C];for(let C=0;C<u.length;C++)for(let t=0;t<e.value.length;t++){var v;if("FILTER"!==e.value[t].location.uniqueId&&(v=e.value[t].start.dateTime)==u[C]){l=e.value[t].end.dateTime;for(let e=0;e<11;e++)v=v.substr(1);v=v.substr(0,5);for(let e=0;e<15;e++)l=l.substr(1);var b;l=l.substr(0,6),b=e.value[t].subject;var y=s.insertRow(C+1),m=y.insertCell(0);m.style.fontSize="22px";var T=y.insertCell(1);T.style.fontSize="22px",m.innerHTML=v+" - "+l,m.style.color="white",m.style.height="70px",T.innerHTML=b,T.style.color="white",T.style.height="70px";var f=e.value[t].end.dateTime;for(let e=0;e<15;e++)f=f.substr(1);var h=(f=f.substr(0,6)).substr(0,3),c=(f.substr(4,6),e.value[t].end.dateTime);for(let e=0;e<15;e++)p=f.substr(1);c=c.substr(0,6);var p=v.substr(0,2),x=v.substr(3,4);h>=n&&n>=p&&(h>n?(m.style.backgroundColor="rgb(100,0,0)",m.style.height="100px",m.style.fontSize="35px",T.style.backgroundColor="rgb(100,0,0)",T.style.height="100px",T.style.fontSize="35px"):a>=x&&(m.style.backgroundColor="rgb(100,0,0)",T.style.backgroundColor="rgb(100,0,0)"))}}if(0==u.length){var S=document.getElementById("check");S.innerHTML="NO UPCOMING BOOKINGS TODAY",S.style.height="300px",S.style.backgroundColor="rgb(200,200,200)",S.style.fontSize="60px",S.style.color="rgb(200,0,0)",s.style.display="none"}console.log("Transform end")};