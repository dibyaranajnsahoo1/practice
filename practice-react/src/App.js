// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Navbar from "./components/navbar/navbar";
import Textform from "./components/textform/textForm";
import Alert from './components/alert/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar titile="Dibya" register="/Register" mode={mode} togoleMode={toggleMode} name="Sahoo" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Textform head="Main Heading" showAlert={showAlert} mode={mode} />}
            />
            <Route
              exact
              path="/about"
              element={<About mode={mode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
