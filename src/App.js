import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar_ from './Component/Navbar';
import Home from './Component/Home';
import Webapp from './Component/Webapp';
import Mobapp from './Component/Mobapp';
import Datascins from './Component/Datascins';
import Contact from './Component/Contact';
import Restapi from './Component/Restapi';
import Uiux from './Component/Uiux';
import Minisoft from './Component/Minisoft';
import Ds from './Component/Ds';
import NoMatch from './Component/NoMatch';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar_/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service/web" element={<Webapp/>} />
          <Route path="/service/mobile" element={<Mobapp/>} />
          <Route path="/service/data_science" element={<Datascins/>} />
          <Route path="/demo/restapi" element={<Restapi/>} />
          <Route path="/demo/uiux" element={<Uiux/>} />
          <Route path="/demo/minisoft" element={<Minisoft/>} />
          <Route path="/demo/ds" element={<Ds/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
