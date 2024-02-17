import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Servicesq";
import FAQ from "./component/FAQ";
import Contact from "./component/Contact";
import Cprt from "./component/Cpyright"; 
import Popup from "./component/Popup";
import WhatsAppIcon from "./component/Whatsapp";
import Facility from "./component/Facility";
import Why from "./component/Why";

function App() {
  return (
    <div>
      <WhatsAppIcon />
      <Popup />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Facility />
      <FAQ />
      <Why />
      <Contact />
      <Cprt />
    </div>
  );
}

export default App;
