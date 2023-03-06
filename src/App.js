import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Download from "./components/Download";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import ContactUs from "./components/ContactUs";


function App() {
  return (
      <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path='/Download' element={<Download />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

    </div>
      </Router>
  );
}

export default App;
