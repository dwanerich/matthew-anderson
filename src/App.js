import './App.css';
import Contact from './Contact';
import Nav from './Nav';
import Work from './Work';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
            <Routes>
            <Route exact path="/" element={<Work/>}></Route>
            {/* <Route exact path="/book" element={<Book/>}></Route> */}

            <Route exact path="/contact" element={<Contact/>}></Route>
            </Routes>
      </div>
    </Router>
  );
}

export default App;
