import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Login from "./components/Login"
import Signup from "./components/Signup";


function App() {
  return (
    <div className="home_container">
    <NoteState>
    <Router>
    <Navbar/>
    {/* <Alert message={"sample alert messsage"}/> */}
    
    <Routes>
      
    <Route exact path="/" element={<Home/>} />
            
    <Route exact path="/about" element={<About/>} />

    <Route exact path="/login" element={<Login/>}  />
    
    <Route exact path="/signup"  element={<Signup/>}  />
            
    </Routes>

    </Router>
    </NoteState>
    
    </div>
  );
}

export default App;
