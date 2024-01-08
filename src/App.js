import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./components/Footer";
import MainSection from "./Components/MainSection";
import PopUp from "./Components/PopUp";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (!storedUserName) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="App">
      <Header />

      {showPopup && <Popup />}

      <main>
        <MainSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
