import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Photography from "./pages/Photography";
import AboutMe from "./pages/AboutMe";
import NavbarLogin from "./components/NavbarLogin";
import Footer from "./components/Footer";
import Design from "./pages/Design";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import { AuthProvider } from "./context/auth";

function App() {

    return (
      <AuthProvider>
        <div>
          <NavbarLogin/>
          <Routes>
          <Route path= "/" element={
            <Home />} />
          <Route path= "/photography" element={
            <Photography />} />
          <Route path= "/design" element={
            <Design />} />
          <Route path= "/signin" element={
          <Signin />} />
          <Route path= "/about" element={
          <AboutMe />} />
          <Route path= "/contact" element={
          <ContactMe />} />
          </Routes>
          <Footer/>
        </div>
      </AuthProvider>
    );

}

export default App
