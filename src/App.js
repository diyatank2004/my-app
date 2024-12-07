import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode has been Enabled","success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#092855";
      document.body.style.color="white";
      showAlert("Dark mode has been Enabled","success");
    }
  }
  return (
    <>
    <Router>
     <Navbar title="TextUtils" aboutText="About_TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below to analyze................." mode={mode}/>} />
    <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
