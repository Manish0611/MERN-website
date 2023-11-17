import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Review from "./component/testimonial/Review";
import Contact from "./component/contact/Contact";
import Vendors from "./component/service/vendors/vendors";
import Ambrosia from "./component/service/vendors/ambrosia/Ambrosia";
import VrindWoods from "./component/service/vendors/ambrosia/Vrindwoods";
import Markhotel from "./component/service/vendors/ambrosia/Markhotel";
import Hyatt from "./component/service/vendors/ambrosia/Hyatt";
import Kadamb from "./component/service/vendors/ambrosia/Kadamb";
import Jalsa from "./component/service/vendors/ambrosia/Jalsa";
import Caterers from "./component/service/Caterers/Caterers";
import Pradhan from "./component/service/Caterers/Pradhan/Pradhan";
import Milan from "./component/service/Caterers/Pradhan/Milan";
import Patel from "./component/service/Caterers/Pradhan/Patel";
import Kum from "./component/service/Caterers/Pradhan/Kumkum";
import Photo from "./component/service/Photography/photo";
import Lakshmi from "./component/service/Photography/lakshmi.jsx/laksmi";
import Flash from "./component/service/Photography/lakshmi.jsx/Flash";
import Bandhan from "./component/service/Photography/lakshmi.jsx/Bhandhan";
import Safar from "./component/service/Photography/lakshmi.jsx/safar";
import Card from "./component/service/Cards/Cards";
import Bandhancard from "./component/service/Cards/bandhancard/Bandhancard";
import Badhai from "./component/service/Cards/bandhancard/Badahai";
import Madam from "./component/service/Cards/bandhancard/madam";
import Indian from "./component/service/Cards/bandhancard/indian";
import Serverit from "./component/serverit/Serverit";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { Fragment } from "react";
import Service from "./component/service/Service";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/service/vendors" element={<Vendors/>} />
          <Route path="/service/vendors/Ambrosia" element={<Ambrosia/>} />
          <Route path="/service/vendors/vrindwoods" element={<VrindWoods/>} />
          <Route path="/service/vendors/markhotel" element={<Markhotel/>} />
          <Route path="/service/vendors/HyattCentric" element={<Hyatt/>} />
          <Route path="/service/vendors/KadambResort" element={<Kadamb/>} />
          <Route path="/service/vendors/Jalsa" element={<Jalsa/>} />
          <Route path="/service/Caterers" element={<Caterers/>} />
          <Route path="/service/Caterers/Pradhan" element={<Pradhan/>} />
          <Route path="/service/Caterers/Milan" element={<Milan/>} />
          <Route path="/service/Caterers/Patel" element={<Patel/>} />
          <Route path="/service/Caterers/Kum" element={<Kum/>} />
          <Route path="/service/photo" element={<Photo/>} />
          <Route path="/service/photo/lakshmi" element={<Lakshmi/>} />
          <Route path="/service/photo/Flash" element={<Flash/>} />
          <Route path="/service/photo/Bandhan" element={<Bandhan/>} />
          <Route path="/service/photo/safar" element={<Safar/>} />
          <Route path="/service/card" element={<Card/>} />
          <Route path="/service/card/bhandhancard" element={<Bandhancard/>} />
          <Route path="/service/card/badhai" element={<Badhai/>} />
          <Route path="/service/card/Mdam" element={<Madam/>} />
          <Route path="/service/card/indian" element={<Indian/>} />
          <Route path="/server" element={<Serverit/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
