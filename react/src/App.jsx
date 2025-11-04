import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {


  // Class -1 
  const handleClick = () => {
    alert("Button Clicked");
  }

  const handleparamclick = (msg) =>{
    alert(msg);
  }


    // Class - 2 
  let n = 12;   // Number 
  let s = "vashu";    // String
  // Boolean , Null ,, Undefined values is not showing on the Dom because ye koi visible values nahi hote hain.
  let b = true;   // Boolean
  let nu = null;   // Null
  let u = undefined;   // Undefined
  // Array ki saari values concatinate hokar ek string ban kar show hoti hain.
  let arr = [<h3>Hello</h3> , 14 , true , "hii" , null , undefined , 67];
  // Object ko direct show nahi kar sakte hain kyuki wo ek complex data type hain. Hum uske andar ki specific value ko hi show kar sakte hain.
  let obj = {name: "Shivam" , age : 19};






  // Class - 3
  // Abb agar ham ham object ko Dom mai print nhi kar sakta hai , To ham JSON Data ---> Array of Object ko kese shoe kare ge uske liye ham map function ka use karenge.
  // JSON Data lo JSX mai onvert kar dete hai .
 const[users , setUsers] = useState( [
    {id: 1 , name: "Vashu" , age: 20},
    {id: 2 , name: "Shivam" , age: 19},
    {id: 3 , name: "Gupta" , age: 21},
    {id: 4 , name: "Ho" , age: 22},
  ]);



  const [userName , setUserName] = useState("Shivam")
  const ChangeHandler = () =>{
    if(userName === "Vashu")
      setUserName("Shivam");
    else
    setUserName("Vashu");
  }


  return (
    <>
      <div> App </div>
      <div> Hello World </div>


      <button onClick={handleClick}> Click Me </button>
      {/* // jab ham kuch bhi {} ke andar likhte hain to wo javascript hota hai orr react use turant execute kar deta hai, in this case agar ham {handleClick()} likhte to button click hone se phle hi alert show ho jata tha isliye hamne sirf function ka reference diya without (). */}


      <button onClick={() => handleparamclick("Vashu")}>Click again</button>
      {/* // jab hame ek esa function call karna hota hai jisme parameters hote hain to ham Anonymous arrow function ka use karte hain jisse ki jab button click ho tabhi wo function call ho. */}

      <h1>DataType</h1>
      <h3>Number = {n}</h3>
      <h3>String = {s}</h3>
      <h3>Boolean = {b}</h3>
      <h3>Null = {nu}</h3>
      <h3>Undefined = {u}</h3>
      <h3>Array = {arr}</h3>
      <h3>Object = {obj.name}</h3>




      <div>
        <h1>UserName</h1>
        <h3>{userName}</h3>
        <button onClick={ChangeHandler}>Change the Name </button>
      </div>

      
      <Create />
      <Read user={users} setUser={setUsers}/>
     
     





    </>
// <> </>  ---> Fragment is used to avoid adding extra divs in the DOM
  ); 
  
}

export default App;
export const x = "Hello";
export const y = "World";