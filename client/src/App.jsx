
import './App.css';
import Aboutme from "./components/About/Aboutme";
import Contact from './components/Contact/Contact';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {


    // useEffect(() => {
    //   function handleContextMenu(e) {
    //     e.preventDefault(); // Prevents the default right-click menu from appearing
    //   }
  
    //   // Add the event listener to the component's root element
    //   const rootElement = document.getElementById('my-component');
    //   rootElement.addEventListener('contextmenu', handleContextMenu);
  
    //   // Remove the event listener when the component is unmounted
    //   return () => {
    //     rootElement.removeEventListener('contextmenu', handleContextMenu);
    //   };
    // }, [])
  

  return (
    <div id='my-component'>
      
      <Navbar />
      <Home />
      <Aboutme />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
