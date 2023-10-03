
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white grid grid-cols-2 md:grid-cols-4">
  <nav>
    <Link to='/'>
      <img className='w-20' src={logo} alt="" />
    </Link>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </nav> 
  <nav>
    <header className="text-lg">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="text-lg">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="text-lg">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>    
    );
};

export default Footer;