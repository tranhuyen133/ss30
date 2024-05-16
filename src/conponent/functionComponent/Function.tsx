import React, { useState } from 'react'

export default function Function() {
  const [name,setName]=useState<string>("hoa")

    /*
     Event :Sự kiện
     onClick
     onChange
     oninput
     onkeydowmn
     onkeyup
     .......



    */
   //nơi khai báo các hàm
   // dùng các từ khóa khai báo : let const var
   const HandleChange=()=>{
    console.log("đã gọi hàm handleChange");
    // đi xử lí
    // khi muốn cập nhật state(Name)
    setName("hồng");
    //khi setName thì component re-render lại 1 lần 
    
   }
   console.log("component render lại");
   
  return (
    <div>function 
      <p>{name}</p>
      <button onClick={HandleChange}>Click</button>
    </div>
  )
}
