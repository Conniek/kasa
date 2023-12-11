
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import image from '../assets/background-home.png';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import properties from '../data.json';
import './Home.scss';

function Home() {
  
   return (
    <>
    <Header />
    <div className='container'>
        <Banner title="Chez vous, partout et ailleurs" image={image} />
        <div className='Home-Listing'>
            {properties && properties.map(({id,title,cover}) => (
                <Link to={`/logement/${id}`}><Card title={title} image={cover} key={id} /></Link>
            ))}
        </div>
    </div>
    <Footer />
    </>
 
  );
}

export default Home;
