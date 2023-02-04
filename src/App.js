import './App.css';
import Contact from './Contact';
import Nav from './Nav';
import Home from './Home';
import Work from './Work'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/work" element={<Work/>}></Route>

            {/* <Route exact path="/book" element={<Book/>}></Route> */}

            <Route exact path="/contact" element={<Contact/>}></Route>
            </Routes>
      </div>
    </Router>
  );
}

export default App;
