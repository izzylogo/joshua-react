import './App.css';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';


function App() {


  return (
    <>
    <div className='App'>
      <Navbar/>
      <h1 style={{textAlign: 'center', marginTop: '140px'}}>Image Gallery</h1>
      <h2 style={{textAlign: 'center'}}>CSM CARS</h2>
      <Gallery/>
    </div>
    </>
  );
}

export default App;
