export default function luhnAlg(value) {
  let checksum = 0;
  const cardnumbers = value.split('').map(Number);
  for (const [index, num] of cardnumbers.entries()) {
    if (index % 2 === 0) {
      const doubleNumber = num * 2;
      // Если удвоенное число больше 9, то вычитаем из него 9 и прибавляем к контрольной сумме
      // Если нет, то сразу прибавляем к контрольной сумме
      if (doubleNumber > 9) {
        checksum += doubleNumber - 9;
      } else {
        checksum += doubleNumber;
      }
      // doubleNumber > 9 ? checksum += doubleNumber - 9 : checksum += doubleNumber;
      // Если число стоит на чётной позиции, то прибавляем его к контрольной сумме
    } else {
      checksum += num;
    }
  }
  // Если контрольная сумма делится без остатка на 10, то номер карты правильный
  return checksum % 10 === 0;
}
