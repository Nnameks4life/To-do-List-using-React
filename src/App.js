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
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact-us" component={ContactUs} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
