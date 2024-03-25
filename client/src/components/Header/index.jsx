import { Link } from 'react-router-dom';
import Navbar from '../Navbar/index';
import './Header.css';

const Header = () => {
  return (
    <header className="text-dark mb-4 py-3 display-flex align-center" id="header-top">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

