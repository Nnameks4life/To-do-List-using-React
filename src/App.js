import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import AboutUs from "./pages/about-us/AboutUs";
import NavBar from "./component/navbar/NavBar";
// import Footer from "./component/footer/Footer";
import ContactUs from "./pages/contact-us/ContactUs";
// import { Modal } from "./component/modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact Path="/" component={Landing} />
      <Route exact Path="/about" component={AboutUs} />
      <Route exact Path="/contact-us" component={ContactUs} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
