import { useState } from 'react';
import Dashboard from './component/Dasboard';
import Footer from './component/Footer';
import Header from './component/Header';

export type TypeProps = {
  darkMode: boolean,
  handleDarkModeToggle : ()=> void,

}
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-full  -z-40">
      <Header darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle}/>
      <Dashboard />
      <Footer/>
    
    </div>
  );
}

export default App;
