import './App.css';
import Contact from './Contact';
import Nav from './Nav';
import Home from './Home';
import Work from './Work';
import About from './About';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/work" element={<Work />}></Route>
        <Route exact path="/about" element={<About />}></Route>


        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
