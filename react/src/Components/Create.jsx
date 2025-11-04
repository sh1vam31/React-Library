import React, { useState } from 'react'

const Create = (props) => {
    console.log(props);

    const [fullName , setFullName] = useState("") 
    const [Age , setAge] = useState(18)
  
    const submitHnadler = (event) =>{
      event.preventDefault();  // ye line form ke default behaviour ko rok deti hai jisme form submit hone ke baad page reload ho jata hai.
      console.log("Form Submitted");
      const newUser = {fullName , Age};
      console.log(newUser);
    }

  return (
    <div>
        {/* Two Way Binding --> it is only for Form tag 
      jab bhi ham form mai kuch bhi typ ekarte hai to vo React kko nhi pata hota hai ki form mai kuch type hua hai , react ko pata chale ki form maikya likha hai orr ham usko baad nai use kar sakte hai to ham use state ka use karte hain .
      Jab ham form ke andar koi value input karte hain to wo value phle react ke state mai chali jati hain orr jab ham state ki value ko change karte hain to wo form mai show hoti hai . isliye ise two way binding kehte hain. 
      */}
         <form onSubmit={submitHnadler}>

           <input onChange={(event) => { setFullName(event.target.value);}}
              value = {fullName}
               type="text" placeholder="Full Name" />

          <input onChange={(event) => { setAge(event.target.value);}}
               value = {Age}
               type="number" placeholder="Age" />

        <button>Submit </button>
      </form>
    </div>
  )
}

export default Create