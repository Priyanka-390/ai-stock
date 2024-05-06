
import { useEffect, useState } from 'react';
import './App.css';
import Backtop from './components/Backtop';
import Footer from './components/Footer';
import Gpusec from './components/Gpusec';
import Statistics from './components/Statistics';
import Preloader from './components/Preloader';
import Tradesdec from './components/Tradesdec';

function App() {
   const [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true);
    setTimeout(() => {
      setloder(false);
    }, 3000);
  }, []);
  return (
     <div className="overflow-x-clip">
      {loder ? (
        <div>
          <Preloader />
        </div>
      ) : (
    <div className="bg-[url(./assets/images/webp/bg-page.webp)]">
      <Gpusec />
            <Statistics />
            <Tradesdec/>
      <Footer />
      <Backtop/>
    </div>
    )}
    </div>
  );
}

export default App;
