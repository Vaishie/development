import "./App.css";
import WhatIf from "./whatif";
import HeroSection from "./herosection";
import Header from "./header";
import Calculation from "./calculation";
import Hiw from "./hiw";
import Sim from "./sim";
import Cusrev from "./cusrev";
import Footer from "./footer";
import Quote from "./quote"

function App() {

  return (
    <>
    <div>
      {/* <WhatIf/> */}
      <Header/>
      <HeroSection/>
      <Calculation/> 
      <Hiw/>
      <Sim/>
      <Cusrev/>
      <Quote/>
      {/* <Footer/> */} 
      </div>
    </>
  );
}

export default App
