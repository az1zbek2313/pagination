import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Scroll from './pages/Scroll';
import Home1 from './pages/Home1';

function App() {

  return (
   <Routes>
      <Route element={<Home1/>} path='/'/>
      <Route element={<Home/>} path='/:id'/>
      <Route element={<Scroll/>} path='/scroll'/>
   </Routes>
  )
}

export default App
