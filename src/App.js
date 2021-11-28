import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/Home/About/About';
import Header from './pages/Home/Header/Header';
import ContactMe from './pages/Home/ContactMe/ContactMe';
import Cover from './pages/Home/Cover/Cover';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="cover/*" element={<Cover />} />
          <Route path="ContactMe/*" element={<ContactMe />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
