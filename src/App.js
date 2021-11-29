import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/Home/About/About';
import Header from './pages/Home/Header/Header';
import Cover from './pages/Home/Cover/Cover';
import Projects from './pages/Home/Projects/Projects';
import ContactMe from './pages/Home/ContactMe/ContactMe';


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
          {/* <Route path="myProject/*" element={<MyProject />} /> */}
          <Route path="projects/*" element={<Projects />} />
          <Route path="contactMe/*" element={<ContactMe />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
