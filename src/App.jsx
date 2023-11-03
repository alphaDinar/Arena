import Home from './Pages/Player/Home';
import './Styles/App.css'
import {Routes, Route} from 'react-router-dom';
import Test from './Test';
import Dashboard from './Pages/Player/Dashboard';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      
      <Route path='/test' element={<Test/>} />
    </Routes>
  )
}

export default App
