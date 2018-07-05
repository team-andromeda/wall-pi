export function run(dayBookings, username, venue, cDay) {

  console.log("Transform start");
  var dayBookings, startTime, EndTime;

  console.log(dayBookings);
    
  document.getElementById("details").innerHTML ="     "+ venue +" | "+ cDay ;

  var table = document.getElementById("bookings");


  var d = new Date();
  var hour= d.getHours();

  var min = d.getMinutes();
  if (min<10){
    min="0"+min;
  }
  var time = hour+":"+min;
  document.getElementById("verify").innerHTML = time;
  for (let t = 0; t < dayBookings.value.length; t++) {

    if (dayBookings.value[t].location.uniqueId !== 'lolwat') {
      var startTime = dayBookings.value[t].start.dateTime,
        EndTime,
        startValue,
        endValue;
      EndTime = dayBookings.value[t].end.dateTime;
      
      for (let j = 0; j < 11; j++) {
        startTime = startTime.substr(1);
      }

      startTime = startTime.substr(0, 5);

      for (let m = 0; m < 11; m++) {
        EndTime = EndTime.substr(1);
      }

      EndTime = EndTime.substr(0, 5);
      //document.getElementById("fiT").innerHTML = EndTime;
      var booker,subject;
      booker = dayBookings.value[t].organizer.emailAddress.name;
      subject =dayBookings.value[t].subject;
      

      var duration = endValue - startValue;
    
  
      //>>>>>>>>>>>>>

      var row = table.insertRow(t+1);


      var cell1 = row.insertCell(0);
          cell1.style.fontSize="22px";
      var cell2 = row.insertCell(1);
        cell2.style.fontSize = "22px";

      cell1.innerHTML = startTime+" - " +EndTime;
      cell1.style.color="white";
      cell1.style.border="solid black 1px";
      cell1.style.height="70px"
      cell2.innerHTML = subject;
      cell2.style.color= "white";
      cell2.style.border = "solid black 1px"
      cell2.style.height="70px"

      if (time >= startTime && time < EndTime) {
          cell1.style.backgroundColor="rgb(100,0,0)";
          cell2.style.backgroundColor = "rgb(100,0,0)";
      }
      
      //>>>>>>>>>>>>>>>>

    }



 
  }

  console.log("Transform end");
}
