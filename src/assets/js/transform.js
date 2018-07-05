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

  for (let t = 0; t < dayBookings.value.length; t++) {

    // TODO(egeldenhuys): Filter for different locations, replace FILTER.
    if (dayBookings.value[t].location.uniqueId !== 'FILTER') {
      var startTime = dayBookings.value[t].start.dateTime,
        EndTime,
        startValue,
        endValue;
      EndTime = dayBookings.value[t].end.dateTime;

      for (let j = 0; j < 11; j++) {
        startTime = startTime.substr(1);
      }

      startTime = startTime.substr(0, 5);
      //document.getElementById("siT").innerHTML = startTime;

      for (let m = 0; m < 11; m++) {
        EndTime = EndTime.substr(1);
      }

      EndTime = EndTime.substr(0, 5);
      //document.getElementById("fiT").innerHTML = EndTime;
      var booker,subject;
      booker = dayBookings.value[t].organizer.emailAddress.name;
      subject =dayBookings.value[t].subject;
      
      switch (startTime) {
        case '06:00':
          document.getElementById('six').innerHTML = subject;
          document.getElementById("six").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = -2;
          break;
        case '06:30':
          document.getElementById('SixT').innerHTML = subject;
          document.getElementById("SixT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = -1;
          break;
        case '07:00':
          document.getElementById('se').innerHTML = subject;
          document.getElementById("se").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 0;
          break;
        case '07:30':
          document.getElementById('seT').innerHTML = subject;
          document.getElementById("seT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 1;
          break;
        case '08:00':
          document.getElementById('ei').innerHTML = subject;
          document.getElementById("ei").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 2;
          break;
        case '08:30':
          document.getElementById('eiT').innerHTML = subject;
          document.getElementById("eiT").style.backgroundColor = "rgb(100, 0, 0)";         
          startValue = 3;
          break;
        case '09:00':
          document.getElementById('ni').innerHTML = subject;
          document.getElementById("ni").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 4;
          break;
        case '09:30':
          document.getElementById('niT').innerHTML = subject;
          document.getElementById("niT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 5;
          break;
        case '10:00':
          document.getElementById('te').innerHTML = subject;
          document.getElementById("te").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 6;
          break;
        case '10:30':
          document.getElementById('teT').innerHTML = subject;
          document.getElementById("teT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 7;
          break;
        case '11:00':
          document.getElementById('el').innerHTML = subject;
          document.getElementById("el").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 8;
          break;
        case '11:30':
          document.getElementById('el').innerHTML = subject;
          document.getElementById("elT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 9;
          break;
        case '12:00':
          document.getElementById('tw').innerHTML = subject;
          document.getElementById("tw").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 10;
          break;
        case '12:30':
          document.getElementById('twT').innerHTML = subject;
          document.getElementById("twT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 11;
          break;
        case '13:00':
          document.getElementById('on').innerHTML = subject;
          document.getElementById("on").style.backgroundColor = "rgb(100, 0, 0)";

          startValue = 12;
          break;
        case '13:30':
          document.getElementById('onT').innerHTML = subject;
          document.getElementById("onT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 13;
          break;
        case '14:00':
          document.getElementById('two').innerHTML = subject;
          document.getElementById("two").style.backgroundColor = "rgb(100, 0, 0)";

          startValue = 14;
          break;
        case '14:30':
          document.getElementById('twoT').innerHTML = subject;
          document.getElementById("twoT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 15;
          break;
        case '15:00':
          document.getElementById('th').innerHTML = subject;
          document.getElementById("th").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 16;
          break;
        case '15:30':
          document.getElementById('thT').innerHTML = subject;

          document.getElementById("thT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 17;
          break;
        case '16:00':
          document.getElementById('fo').innerHTML = subject;
          document.getElementById("fo").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 18;
          break;
        case '16:30':
          document.getElementById('foT').innerHTML = subject;
          document.getElementById("foT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 19;
          break;
        case '17:00':
          document.getElementById('fi').innerHTML = subject;
          document.getElementById("fi").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 20;
          break;
        case '17:30':
          document.getElementById('fiT').innerHTML = subject;
          document.getElementById("fiT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 21;
          break;
        case '18:00':
          document.getElementById('si').innerHTML = subject;
          document.getElementById("si").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 20;
          break;
        case '18:30':
          document.getElementById('siT').innerHTML = subject;
          document.getElementById("siT").style.backgroundColor = "rgb(100, 0, 0)";
          startValue = 21;
          break;
      }

      var ends = {
        '07:00': 0,
        '07:30': 1,
        '08:00': 2,
        '08:30': 3,
        '09:00': 4,
        '09:30': 5,
        '10:00': 6,
        '10:30': 7,
        '11:00': 8,
        '11:30': 9,
        '12:00': 10,
        '12:30': 11,
        '13:00': 12,
        '13:30': 13,
        '14:00': 14,
        '14:30': 15,
        '15:00': 16,
        '15:30': 17,
        '16:00': 18,
        '16:30': 19,
        '17:00': 20,
        '17:30': 21,
        '18:00': 22,
        '18:30': 23,
      };

      endValue = ends[EndTime];
      var duration = endValue - startValue;

   

      for (let g = startValue + 1; g < startValue + duration; g++) {
        switch (g) {
          case -1:
            document.getElementById('sixT').innerHTML = 'booked';
            document.getElementById("sixT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 0:
            document.getElementById('se').innerHTML = 'booked';
            document.getElementById("se").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 1:
            document.getElementById('seT').innerHTML = 'booked';
            document.getElementById("seT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 2:
            document.getElementById('ei').innerHTML = 'booked';
            document.getElementById("ei").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 3:
            document.getElementById('eiT').innerHTML = 'booked';
            document.getElementById("eiT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 4:
            document.getElementById('ni').innerHTML = 'booked';
            document.getElementById("ni").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 5:
            document.getElementById('niT').innerHTML = 'booked';
            document.getElementById("niT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 6:
            document.getElementById('te').innerHTML = 'booked';
            document.getElementById("te").style.backgroundColor = "rgb(50, 0, 0)"; 
            break;
          case 7:
            document.getElementById('teT').innerHTML = 'booked';
            document.getElementById("teT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 8:
            document.getElementById('el').innerHTML = 'booked';
            document.getElementById("el").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 9:
            document.getElementById('elT').innerHTML = 'booked';
            document.getElementById("elT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 10:
            document.getElementById('tw').innerHTML = 'booked';
            document.getElementById("tw").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 11:
            document.getElementById('twT').innerHTML = 'booked';
            document.getElementById("twT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 12:
            document.getElementById('on').innerHTML = 'booked';
            document.getElementById("on").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 13:
            document.getElementById('onT').innerHTML = 'booked';
            document.getElementById("onT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 14:
            document.getElementById('two').innerHTML = 'booked';
            document.getElementById("two").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 15:
            document.getElementById('twoT').innerHTML = 'booked';
            document.getElementById("twoT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 16:
            document.getElementById('th').innerHTML = 'booked';
            document.getElementById("th").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 17:
            document.getElementById('thT').innerHTML = 'booked';
            document.getElementById("thT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 18:
            document.getElementById('fo').innerHTML = 'booked';
            document.getElementById("fo").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 19:
            document.getElementById('foT').innerHTML = 'booked';
            document.getElementById("foT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 20:
            document.getElementById('fi').innerHTML = 'booked';
            document.getElementById("fi").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 21:
            document.getElementById('fiT').innerHTML = 'booked';
            document.getElementById("fiT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 22:
            document.getElementById('si').innerHTML = 'booked';
            document.getElementById("si").style.backgroundColor = "rgb(50, 0, 0)";
            break;
          case 23:
            document.getElementById('siT').innerHTML = 'booked';
            document.getElementById("siT").style.backgroundColor = "rgb(50, 0, 0)";
            break;
        }
      }
    }
  
  }


  console.log("Transform end");
}
