import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { auth } from './firebase'
import Weather from './Weather'
function App() {
  const [userName,setUserName]=useState("");
 useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    setUserName(user.displayName)
  }else setUserName("");
console.log(user)
})
 }, [])
  return(
   <div className="App">
<Router>
  <Routes>
    <Route path='/' element={<Home name={userName} />}/>
    <Route path='/login' element={< Login/>}/>
    <Route path='/signup' element={<Signup />}/>
  </Routes>
  </Router>
  <Weather/>
 </div>
)

}

export default App
