
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wrapper from './Wrapper.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

   // HOC -  akk esa component jo apne props  mai akk component leta ho ya return akk component kart ho ya dono akk saath karta ho use HOC bolte hai , Wrapper is a Higer order component 

   // Wrapper component ke ander jo bhi component pass karte hai vo props object ke ander children naam ke key mai save hota hai, <Wrapper app={<App/>} /> akk tarika ye hai props ko pass karne ka orr <Wrapper>   <App/> </Wrapper> ham iss tarike se bhi props ko pass kar sakte hai.
    <Wrapper>
        <App/>
        <ToastContainer position="top-center"/>
    </Wrapper>
   

)
