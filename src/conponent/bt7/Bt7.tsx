import React, { useState } from 'react';

export default function Bt7() {
  const [numbers, setNumbers] = useState<number[]>([]);
  /*
    các bước làm
    1.Tạo ra mảng rỗng để chúa cac phan tử 
    2.Tạo 1 button clich và bắt sự kiện click
    3.Tạo ra sự ngẫu nhiên Math.random
    4.push cái số ngẫu nhiên vào mảng
  */

  const handleClick = () => {
    // const arrNumber = [1,2,3,4,5];
    // setNumbers(arrNumber);
    //tạo ra số ngẫu nhiên
    let randomNumber= Math.floor(Math.random()*9);
    numbers.push(randomNumber);
    console.log(11111,numbers);


    setNumbers([...numbers])
    
  };
console.log("componet load lại");
/*
      Khi muốn load lại component (re-render)thì đi setState
      bắt buộc cái State phải khác cái ban đầu 
*/
  return (
    <div>Bt7:
      <p>Hiển thị mảng :(number)</p>
      <button onClick={handleClick}>addnumber</button>
    </div>
  );
}
