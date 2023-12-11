import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';


function Header() {
  return (
      <header>
        <div className="container">
            <img src={logo} className="Logo" alt="logo" />
            <ul>
                <li><Link to={'/'} className="nav-link"> Accueil </Link></li>
                <li><Link to={'/about'} className="nav-link">A propos</Link></li>
            </ul>
        </div>
      </header>
  );
}

export default Header;
