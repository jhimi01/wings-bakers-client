import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const NavogationBar = () => {

  const { user,logOut } = useContext(AuthContext);
  console.log(user)
 

  const handlelogOut=(e) => {
    e.preventDefault();
    logOut()
    .then(() => {})
    .catch(error => {
      console.log(error.message);
    })
  };

  

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
          {/* <Navigate to='/' className={({ isActive }) => isActive ? "active" : ""}>Home</Navigate> */}
          <NavLink to='/home' className={({ isActive}) => isActive ? "text-gray-800 bg-white px-2" : "" }>Home</NavLink>
            <NavLink to='/about' className={({ isActive}) => isActive ? "text-gray-800 bg-white px-2" : "" }>About</NavLink>
            <NavLink to='/blog' className={({ isActive}) => isActive ? "text-gray-800 bg-white px-2" : "" }>Blog</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
        {user?.photoURL && <img className={`rounded-full w-12 h-12 mr-3 `} src={user.photoURL} />}
         {user ? <button className='bg-white py-2 px-5 text-xl flex items-center text-gray-600' onClick={handlelogOut} >LogOut</button> : <Link to='/login'>
         <button
         className='bg-white py-2 px-5 text-xl flex items-center text-gray-600'>Login</button>
         </Link>}
        </div>
        
      </div>
       
    );
};

export default NavogationBar;