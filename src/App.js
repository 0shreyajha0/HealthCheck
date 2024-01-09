import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import MainSection from "./Component/MainSection";
import PopUp from "./Component/PopUp";
import Footer from "./Component/Footer";

const App = () => {
  // const [showPopUp, setShowPopUp] = useState(false);

  // useEffect(() => {
  //   const storedUserName = localStorage.getItem("userName");
  //   if (!storedUserName) {
  //     setShowPopUp(true);
  //   }
  // }, []);

  return (
    <div className="App">
      <Header />
      {/* <PopUp/> */}
      <main>
        <MainSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
