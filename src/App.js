import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        tp: type

      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#041033';
      showAlert("Dark Mode has been enabled", "success");
    }
  }

  const toggleModee = () => {
    setMode('dark');
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';

  }
  const toggleModee2 = () => {
    setMode('dark');
    document.body.style.backgroundColor = 'darkslategray';
  }
  const toggleModee3 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#024046';

  }
  const toggleModee4 = () => {
    setMode('dark');
    document.body.style.backgroundColor = 'darkcyan';
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleModee={toggleModee} toggleModee2={toggleModee2} toggleModee3={toggleModee3} toggleModee4={toggleModee4} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />
      </div>
      <About />
    </>
  );
}
export default App;




