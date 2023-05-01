import { Link } from "react-router-dom";


const NavogationBar = () => {
    return (
        
        <div className="navbar border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu gap-3 menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold text-white">Wigns Bakers</a>
        </div>

        {/* large page */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal text-xl gap-3 px-1">
          <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <button className='bg-white py-2 px-5 text-xl flex items-center text-gray-600'>Login</button>
        </div>
        
      </div>
       
    );
};

export default NavogationBar;