import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Footer from "./component/Footer";
import MainSection from "./Component/MainSection";
import PopUp from "./Component/PopUp";

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

      {showPopup && <PopUp />}

      <main>
        <MainSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
