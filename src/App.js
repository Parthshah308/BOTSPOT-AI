
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Section from './components/Section';


function App() {
  return (
    <>
        <div className="top">
            <Navbar/>
            <Header/>
        </div>
        <About/>
        <Section/>
    </>
  );
}

export default App;
