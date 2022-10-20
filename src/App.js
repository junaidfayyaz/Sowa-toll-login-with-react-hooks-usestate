import React, { useState } from 'react';
import './App.css';
import Bottomheader from './Components/Bottom-header/Bottomheader';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ImageSection from './Components/image-section/ImageSection';
import Slider from './Components/Image-Slider/Slider';
import Product from './Components/ProductItems/Product';
import TopBottom from './Components/TopBottom/TopBottom';
import Loginform  from './Components/Loginform/Loginform';

function App() {
  const adminuser = {
    email: "admin@srh.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (
      details.email === adminuser.email &&
      details.password === adminuser.password
    ) {
      console.log("logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("details do not match");
      setError("Details Do Not Match");
    }
  }
  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <Header />
          <Bottomheader />
          <Slider />
          <Product />
          <ImageSection />
          <TopBottom />
          <Footer />
        </div>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
