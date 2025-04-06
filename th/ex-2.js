const romanToInt = function (s) {
  //Start coding here
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  // loop เช็คทุกตัว 
  // ถ้า ซ้าย น้อยกว่า ขวา ให้ ขวา - ซ้าย
  // ถ้า ซ้าย มากกว่า ขวา ให้ บวกซ้ายเข้าไปเลย
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (romanValue[s[i]] < romanValue[s[i+1]]) { // romanValue[s[i]]  คือ romanValue key ที่ [s[i]] เช่น [s[0]] ค่าที่อยู่ index 0 
      sum += (romanValue[s[i+1]] - romanValue[s[i]]) 
    } else {
      sum += romanValue[s[i]]
    }
  }
  return sum
}

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);

// const result2 = romanToInt("LVIII"); 
// การเข้าถึงValue object มีสองวิธีคือ . และ [] แต่ใน ex นี้ใช้ [] เพราะว่า
// romanValue.s[0] => ไม่ได้ เพราะ ไม่มี key ชื่อ s
// romanValue[s[0]] => ได้ เพราะ key คือ s index ที่ 0 => romanValue[L]