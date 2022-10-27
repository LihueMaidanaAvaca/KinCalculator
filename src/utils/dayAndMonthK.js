export default function dayAndMonthK(day, month) {  
  let d = parseInt(day)
  let m = parseInt(month)
    if(month === 1) {
      return d+54;
    } else if (month === 2) {
      return d+85;
    } else if (month === 3) {
      return d+113;
    } else if (m === 4) {
      return d+144;
    } else if (month === 5) {
      return d+174;
    } else if (month === 6) {
      return d+206;
    } else if (month === 7) {
      return d+236;
    } else if (month === 8) {
      return d+206;
    } else if (month === 9) {
      return d+37;
    } else if (month === 10) {
      return d+67;
    } else if (month === 11) {
      return d+98;
    } else if (month === 12) {
      return d+128;
    } 
      
  }