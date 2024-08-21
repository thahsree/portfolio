import Headroom from 'react-headroom';
import './App.css';
import Aboutme from "./components/About/Aboutme";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {

  

  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Home />
      <Aboutme />
      <Projects/>
      
    </>
  );
}

export default App;
