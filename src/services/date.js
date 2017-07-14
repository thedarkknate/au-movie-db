export class DateValueConverter {
  toView(date) {
    if (date) {
      var year = date.substr(0,4),
          month = date.substr(5,2),
          day = date.substr(8,2),
          monthLabel,
          dayLabel;

      switch(month) {
        case '01':
          monthLabel = 'January';
          break;
        case '02':
          monthLabel = 'February';
          break;
        case '03':
          monthLabel = 'March';
          break;
        case '04':
          monthLabel = 'April';
          break;
        case '05':
          monthLabel = 'May';
          break;
        case '06':
          monthLabel = 'June';
          break;
        case '07':
          monthLabel = 'July';
          break;
        case '08':
          monthLabel = 'August';
          break;
        case '09':
          monthLabel = 'September';
          break;
        case '10':
          monthLabel = 'October';
          break;
        case '11':
          monthLabel = 'November';
          break;
        case '12':
          monthLabel = 'December';
          break;
        default:
          monthLabel = '';
      }

      switch(day) {
        case '01':
          dayLabel = '1';
          break;
        case '02':
          dayLabel = '2';
          break;
        case '03':
          dayLabel = '3';
          break;
        case '04':
          dayLabel = '4';
          break;
        case '05':
          dayLabel = '5';
          break;
        case '06':
          dayLabel = '6';
          break;
        case '07':
          dayLabel = '7';
          break;
        case '08':
          dayLabel = '8';
          break;
        case '09':
          dayLabel = '9';
          break;
        default:
          dayLabel = day;
      }

      return `${monthLabel} ${dayLabel}, ${year}`;
    }
    return 'Unknown';
  }
}