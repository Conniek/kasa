import './Footer.scss';
import logo from '../../assets/logo-footer.svg';


function Footer() {
  return (
      <footer>
        <div className='container'>
            <img src={logo}  alt="logo" />
            <div className='copyright'> © 2020 Kasa. All rights reserved</div>
        </div>
      </footer>
  );
}

export default Footer;