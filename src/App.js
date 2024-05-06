
import './App.css';
import Footer from './components/Footer';
import Gpusec from './components/Gpusec';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="bg-[url(./assets/images/webp/bg-page.webp)]">
      <Gpusec />
      <Statistics />
      <Footer/>
    </div>
  );
}

export default App;
