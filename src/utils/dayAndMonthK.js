export default function dayAndMonthK(day, month) {  
  let tableOne = 0;
  
  switch (month) {
  case 1:
    tableOne = day+54;
    break;
  case 2:
    tableOne = day+85;
    break;
  case 3:
    tableOne = day+113;
    break;
  case 4:
    tableOne = day+144;
    break;
  case 5:
    tableOne = day+174;
    break;
  case 6:
    tableOne = day+206;
    break;
  case 7:
    tableOne = day+236; 
    break;
  case 8:
    tableOne = day+6;
    break;
  case 9:
    tableOne = day+37;
    break;
  case 10:
    tableOne = day+67;
    break;   
  case 11:
    tableOne = day+98;
    break;
  case 12:
    tableOne = day+128;
    break;
  default:
    tableOne = 'Lo lamentamos, por el momento no disponemos de ' + month + '.';
}

    return tableOne
}