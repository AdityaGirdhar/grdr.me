import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className='light'>
      <div id="blob"></div>
      <div id="blur"></div>
      <Navbar/>
      <div className="body">
        <Home/>
      </div>
    </div>
  );
}

export default App;
