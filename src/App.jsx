import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className='light'>
      <Navbar/>
      <div className="body">
        <Home/>
      </div>
    </div>
  );
}

export default App;
