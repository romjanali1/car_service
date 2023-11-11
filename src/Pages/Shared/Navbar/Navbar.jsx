
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const hendelLogOut = () => {
    logOut()
    .then( () => {})
    
    .catch(error => console.log(error))
  }
  const navItems = <div className='text-1xl font-bold lg:flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        {user?.email ? <>
      <li><button onClick={hendelLogOut}>Log out</button></li>
      <li><Link to='/bookings'>Bookings</Link></li>
    </>
    : <li><Link to='/login'>Log in</Link></li>
      
    }
  </div>
    return (
        <div className="navbar bg-base-100 h-28">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}


      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img className='w-20' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end space-x-4 text-1xl font-bold">
  <button className="btn btn-outline btn-accent">Appointment</button>
    
  </div>
</div>
    );
};

export default Navbar;