import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleModes = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "success : ");
      (document.title = "Textpulator - Home")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success : ");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="Textpulator" modes={mode} toggleMode={toggleModes} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About modes={mode} />}></Route>
            <Route
              path="/"
              element={
                <Textform
                  heading="Enter text to analyse"
                  modes={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
