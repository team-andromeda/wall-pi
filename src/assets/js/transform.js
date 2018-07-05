export function run(dayBookings, venue, cDay) {

  console.log("Transform start");
  var dayBookings, startTime, EndTime;

  console.log(dayBookings);
    
  // Fix timezone, offset with +2
  for (let i = 0; i < dayBookings.value.length; i++) {
    let dateStart = new Date(dayBookings.value[i].start.dateTime);
    dateStart.setTime( dateStart.getTime() + (1 * 60 * 10000 * 24)); // +4

    let dateEnd = new Date(dayBookings.value[i].end.dateTime);
    dateEnd.setTime( dateEnd.getTime() + (1 * 60 * 10000 * 24)); // +4

    dayBookings.value[i].start.dateTime = dateStart.toISOString();
    dayBookings.value[i].end.dateTime = dateEnd.toString();
  }

  document.getElementById("details").innerHTML ="     "+ venue +" | "+ cDay ;

  var table = document.getElementById("bookings");


  var d = new Date();
  var hour= d.getHours();

  var min = d.getMinutes();
  if (min<10){
    min="0"+min;
  }
  var time = hour+":"+min;

  var checker=[];


  for (let n = 0; n < dayBookings.value.length; n++){
    var startTime,endMin,endHour;
      startTime=dayBookings.value[n].start.dateTime;
      var endTime=dayBookings.value[n].end.dateTime;
    for (let m = 0; m < 15; m++) {
      endTime = endTime.substr(1);
    }

    endTime = endTime.substr(0, 6);
    endHour=endTime.substr(0,3);
    endMin=endTime.substr(4,6);
      if (endHour>hour){
       
        //document.getElementById("verify").innerHTML = endTime + "||" + time;

       checker.push(startTime);
  

  }
 checker.sort();
 var things="",testing="";
  for (let n = 0; n < dayBookings.value.length; n++) {

    things=things+"||||"+checker[n];
  }


for (let v=0;v<checker.length;v++){
        

  for (let t = 0; t < dayBookings.value.length; t++) {
      // TODO(egeldenhuys): Filter for different locations, replace FILTER.
      if (dayBookings.value[t].location.uniqueId !== "FILTER") {
        var startTime = dayBookings.value[t].start.dateTime;

        if (startTime==checker[v]){
          EndTime,
            // startValue,
            // endValue;
            EndTime = dayBookings.value[t].end.dateTime;

          for (let j = 0; j < 11; j++) {
            startTime = startTime.substr(1);
          }

          startTime = startTime.substr(0, 5);

          for (let m = 0; m < 15; m++) {
            EndTime = EndTime.substr(1);
          }

          EndTime = EndTime.substr(0, 6);
          // document.getElementById("verify").innerHTML = EndTime;
          var booker, subject;
          booker = dayBookings.value[t].organizer.emailAddress.name;
          subject = dayBookings.value[t].subject;

 

          var row = table.insertRow(v+ 1);

          var cell1 = row.insertCell(0);
          cell1.style.fontSize = "22px";
          var cell2 = row.insertCell(1);
          cell2.style.fontSize = "22px";

          cell1.innerHTML = startTime + " - " + EndTime;
          cell1.style.color = "white";
          cell1.style.border = "solid black 1px";
          cell1.style.height = "70px";
          cell2.innerHTML = subject;
          cell2.style.color = "white";
          cell2.style.border = "solid black 1px";
          cell2.style.height = "70px";

          var et = dayBookings.value[t].end.dateTime;// end time
          for (let m = 0; m < 15; m++) {
            et = et.substr(1);
          }

          et = et.substr(0, 6);
         var eh = et.substr(0, 3);// end hour
         var em = et.substr(4, 6);//end minute

          var st = dayBookings.value[t].end.dateTime;// start time
          for (let m = 0; m < 15; m++) {
            sh = et.substr(1);
          }

         st  = st.substr(0, 6);
         var sh  = startTime.substr(0, 2);// start hour
         var sm = startTime.substr(3, 4);//start minute
         
          if (eh >= hour && hour>=sh ) {
          
            if (eh>hour){ 
              cell1.style.backgroundColor = "rgb(100,0,0)";
              cell1.style.height="100px";
              cell1.style.fontSize="35px";
              
              cell2.style.backgroundColor = "rgb(100,0,0)";
              cell2.style.height="100px";
              cell2.style.fontSize = "35px";
            }else{if (/*em>=min &&*/ min>=sm){
                cell1.style.backgroundColor = "rgb(100,0,0)";
      
               cell2.style.backgroundColor = "rgb(100,0,0)";
                }
          }
            
          } 

        }
      }
    }
  }

  if (checker.length==0){
    var body = document.getElementById("check");
        body.innerHTML="NO UPCOMING BOOKINGS TODAY";
        body.style.height="300px";
        body.style.backgroundColor="rgb(200,200,200)";
        body.style.fontSize="60px";
        body.style.color="rgb(200,0,0)";
        table.style.display="none";
        
  }
  console.log("Transform end");
}
