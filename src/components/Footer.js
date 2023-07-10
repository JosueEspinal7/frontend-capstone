import { Link } from 'react-router-dom';

import logo from '../assets/images/svg/logo.svg';
import Nav from './Nav';

const Footer = ({ className }) => {
  return (
    <footer className={className} style={{ color: 'white', backgroundColor: '#333333', padding: '2rem 0', width: '100%', marginTop: '10px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to='/'>
          <img src={logo} alt='Little Lemon' />
        </Link>
      </div>
      <div style={{ marginLeft: '100px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <section>
          <h4>Navigation</h4>
          <Nav />
        </section>
        <section>
          <h4>Contact</h4>
          <ul style={{ listStyleType: 'none', textAlign: 'left', marginLeft: 0 }}>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <h4>Social Media Links</h4>
          <ul style={{ listStyleType: 'none', textAlign: 'left', marginLeft: 0 }}>
            <li>
              <a href='https://facebook.com'>Facebook</a>
            </li>
            <li>
              <a href='https://instagram.com'>Instagram</a>
            </li>
            <li>
              <a href='https://twitter.com'>Twitter</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
