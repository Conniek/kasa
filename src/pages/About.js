import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import image from '../assets/background-home.png';
import Collapse from '../components/Collapse/Collapse';

function App() {
  return (
    <>
    <Header />
    <div className='container'>
        <Banner title="A propos" image={image} />
        <Collapse title="Fiabilité">test</Collapse>
        <Collapse title="Respect">  test</Collapse>
        <Collapse title="Service"> teeee </Collapse>
        <Collapse title="Sécurité"> teeee </Collapse>
    </div>
    <Footer />
    </>
  );
}

export default App;
