import Home from './Pages/Player/Home';
import './Styles/App.css'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Player/Dashboard';
import CreateRoom from './Pages/Player/CreateRoom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />


      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/createRoom' element={<CreateRoom/>} />
      <Route path='/test' element={<CreateRoom/>} />
    </Routes>
  )
}

export default App
