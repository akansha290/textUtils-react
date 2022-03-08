
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const[mode,setMode] = useState('light');
  const [btnText,setBtnText] = useState("white");
  const [btnColor,setBtnColor] = useState("#33b0ec");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3D2C8D';
      setBtnText('white');
      setBtnColor('#1C0C5B');
      showAlert("Dark Mode has been enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText('white')
      setBtnColor('#33b0ec');
      showAlert("Dark Mode has been Routesed off","success");
    }
  }
  
  return (
    <>
      
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert} />
        <div className='container my-3'>
          <Routes> 
              <Route path="/about" element={<About mode={mode}/>}/>
              <Route path="/" element={
                <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} btnText = {btnText} btnColor={btnColor} showAlert={showAlert} />} />
          </Routes>

        {/* // <div className="container my-3 " >
        //   <TextForm heading="Enter the text to Analyse below" mode={mode} btnText = {btnText} btnColor={btnColor} showAlert={showAlert} />
        // </div> */}
        {/* { <About /> } */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
