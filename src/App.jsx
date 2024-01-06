import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <dev >
      <BrowserRouter>
        <Routes>
          <Route path='/chatapp/login' element={<Login/>}/>
          <Route path='/chatapp/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </dev>
  )
}

export default App
