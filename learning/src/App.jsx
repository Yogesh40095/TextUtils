import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MyForm from './components/MyForm'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('ligth');

  const [alert, setAlert]= useState(null);
  

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    }
    ,2000)

  }
  

  const darkMode = ()=>{
    if(mode === 'dark'){
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled","success");
    document.title = 'TextUtils - Dark Mode';
    // setInterval(()=>{
    //   document.title='Install textutile Now';
    // },1500);
    // setInterval(()=>{
    //   document.title='Alert: Install textutile Now';
    // },1000);
  
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = '#142c6e';
      showAlert("Dark mode has been enabled","success");
    }
  }
  
  

  return (
    <>
<Navbar title="TextUtils" aboutText="About us" mode={mode} darkMode={darkMode}/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
<MyForm showAlert={showAlert} head="Change Your Text" mode={mode}/>

</div>


    </>
  )
}

export default App
