import "./App.css";
import Navbar from "./componants/Navbar";
import React, { useState} from "react";
// import React, { useState, BrowserRouter ,Routes, Route} from "react";
import TextForm from "./componants/TextForm";
import Alert from "./componants/Alert";
// import About from "./componants/About";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import About from "./componants/About";



function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [bc, setbc] = useState("primary");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  // const togglemodeblue = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042743";
  //     // showalert("Dark mode is enable", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showalert("Light mode is enable", "success");
  //   }
  // };
  const togglemodeblack = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#171414";
    setbc("primary");
  };
  const togglemodeblue = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#042743";
    // showalert("Dark mode is enable", "success");
    setbc("light");
  };
  const togglemodegreen = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#3c7d43";
    setbc("success");
  };
  const togglemodered = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#890e0e";
    setbc("warning");
  };
  const togglemodeyellow = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#cfdc09";
    setbc("danger");
  };
  const togglemodewhite = () => {
    setMode("light");
    document.body.style.backgroundColor = "#ffffff";
    setbc("primary");
  };
  return (
    <>
    
      {/*<Navbar title="Vivek" abouttext="About text" /> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        togglemodeblue={togglemodeblue}
        togglemodeblack={togglemodeblack}
        togglemodegreen={togglemodegreen}
        togglemodered={togglemodered}
        togglemodeyellow={togglemodeyellow}
        togglemodewhite={togglemodewhite}
      />

      <div className="container my-3">
        <BrowserRouter>
        <Routes>
            {/* <Route exact path="about">
              <About bc={bc} />
            </Route> */}
            <Route path="/about" element={<About bc={bc} />} />
            <Route path="/" element={ <TextForm
              showalert={showalert}
              heading="Enter text to analyze"
              mode={mode}
              bc={bc}
            />} />
            {/* <Route exact path="/">
            <TextForm
              showalert={showalert}
              heading="Enter text to analyze"
              mode={mode}
              bc={bc}
            />
             </Route> */}
             </Routes>
        </BrowserRouter>
          <Alert alert={alert} />
        
      </div>
  
     
    </>
  );
}
export default App;
