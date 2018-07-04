export function run(dayBookings) {

  console.log("Transform start");
  var dayBookings, startTime, EndTime;

  for (let t = 0; t < dayBookings.value.length; t++) {
    console.log("A");
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
      //document.getElementById("siT").innerHTML = startTime;

      for (let m = 0; m < 11; m++) {
        EndTime = EndTime.substr(1);
      }

      EndTime = EndTime.substr(0, 5);
      //document.getElementById("fiT").innerHTML = EndTime;
      var booker;
      booker = dayBookings.value[t].organizer.emailAddress.name;
      switch (startTime) {
        case '06:00':
          document.getElementById('six').innerHTML = booker;
          startValue = -2;
          break;
        case '06:30':
          document.getElementById('SixT').innerHTML = booker;
          startValue = -1;
          break;
        case '07:00':
          document.getElementById('se').innerHTML = booker;
          startValue = 0;
          break;
        case '07:30':
          document.getElementById('seT').innerHTML = booker;
          startValue = 1;
          break;
        case '08:00':
          document.getElementById('ei').innerHTML = booker;
          startValue = 2;
          break;
        case '08:30':
          document.getElementById('eiT').innerHTML = booker;
          startValue = 3;
          break;
        case '09:00':
          document.getElementById('ni').innerHTML = booker;
          startValue = 4;
          break;
        case '09:30':
          document.getElementById('niT').innerHTML = booker;
          startValue = 5;
          break;
        case '10:00':
          document.getElementById('te').innerHTML = booker;
          startValue = 6;
          break;
        case '10:30':
          document.getElementById('teT').innerHTML = booker;
          startValue = 7;
          break;
        case '11:00':
          document.getElementById('el').innerHTML = booker;
          startValue = 8;
          break;
        case '11:30':
          document.getElementById('elT').innerHTML = booker;
          startValue = 9;
          break;
        case '12:00':
          document.getElementById('tw').innerHTML = booker;
          startValue = 10;
          break;
        case '12:30':
          document.getElementById('twT').innerHTML = booker;
          startValue = 11;
          break;
        case '13:00':
          document.getElementById('on').innerHTML = booker;
          startValue = 12;
          break;
        case '13:30':
          document.getElementById('onT').innerHTML = booker;
          startValue = 13;
          break;
        case '14:00':
          document.getElementById('two').innerHTML = booker;
          startValue = 14;
          break;
        case '14:30':
          document.getElementById('twoT').innerHTML = booker;
          startValue = 15;
          break;
        case '15:00':
          document.getElementById('th').innerHTML = booker;
          startValue = 16;
          break;
        case '15:30':
          document.getElementById('thT').innerHTML = booker;
          startValue = 17;
          break;
        case '16:00':
          document.getElementById('fo').innerHTML = booker;
          startValue = 18;
          break;
        case '16:30':
          document.getElementById('foT').innerHTML = booker;
          startValue = 19;
          break;
        case '17:00':
          document.getElementById('fi').innerHTML = booker;
          startValue = 20;
          break;
        case '17:30':
          document.getElementById('fiT').innerHTML = booker;
          startValue = 21;
          break;
        case '18:00':
          document.getElementById('si').innerHTML = booker;
          startValue = 20;
          break;
        case '18:30':
          document.getElementById('siT').innerHTML = booker;
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

      document.getElementById('fiT').innerHTML = EndTime + ' ' + duration;

      for (let g = startValue + 1; g < startValue + duration; g++) {
        switch (g) {
          case -1:
            document.getElementById('sixT').innerHTML = 'booked';
            break;
          case 0:
            document.getElementById('se').innerHTML = 'booked';
            break;
          case 1:
            document.getElementById('seT').innerHTML = 'booked';
            break;
          case 2:
            document.getElementById('ei').innerHTML = 'booked';
            break;
          case 3:
            document.getElementById('eiT').innerHTML = 'booked';
            break;
          case 4:
            document.getElementById('ni').innerHTML = 'booked';
            break;
          case 5:
            document.getElementById('niT').innerHTML = 'booked';
            break;
          case 6:
            document.getElementById('te').innerHTML = 'booked';
            break;
          case 7:
            document.getElementById('teT').innerHTML = 'booked';
            break;
          case 8:
            document.getElementById('el').innerHTML = 'booked';
            break;
          case 9:
            document.getElementById('elT').innerHTML = 'booked';
            break;
          case 10:
            document.getElementById('tw').innerHTML = 'booked';
            break;
          case 11:
            document.getElementById('twT').innerHTML = 'booked';
            break;
          case 12:
            document.getElementById('on').innerHTML = 'booked';
            break;
          case 13:
            document.getElementById('onT').innerHTML = 'booked';
            break;
          case 14:
            document.getElementById('two').innerHTML = 'booked';
            break;
          case 15:
            document.getElementById('twoT').innerHTML = 'booked';
            break;
          case 16:
            document.getElementById('th').innerHTML = 'booked';
            break;
          case 17:
            document.getElementById('thT').innerHTML = 'booked';
            break;
          case 18:
            document.getElementById('fo').innerHTML = 'booked';
            break;
          case 19:
            document.getElementById('foT').innerHTML = 'booked';
            break;
          case 20:
            document.getElementById('fi').innerHTML = 'booked';
            break;
          case 21:
            document.getElementById('fiT').innerHTML = 'booked';
            break;
          case 22:
            document.getElementById('si').innerHTML = 'booked';
            break;
          case 23:
            document.getElementById('siT').innerHTML = 'booked';
            break;
        }
      }
    }
  
  }

  console.log("Transform end");
}
