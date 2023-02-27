import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import StudentData from './Components/StudentData';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path='/' element= <Home /> ></Route>
          <Route path='/contact' element=<Contacts /> ></Route>
          <Route path='/studentData' element=<StudentData />></Route>
        </Routes>
        <NavBar></NavBar>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
