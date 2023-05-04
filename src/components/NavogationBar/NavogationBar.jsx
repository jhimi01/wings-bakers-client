import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './NavogationBar.css'


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
              <svg xmlns="http://www.w3.org/2000/svg" className="md:h-8 md:w-8 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu gap-3 menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>

            </ul>
          </div>
          <a className="btn btn-ghost normal-case md:text-2xl text-xl font-bold text-white">Wigns Bakers</a>
        </div>

        {/* large page */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal text-xl font-bold gap-3 px-1">
          {/* <Navigate to='/' className={({ isActive }) => isActive ? "active" : ""}>Home</Navigate> */}
          <NavLink to='/home' className={({ isActive}) => isActive ? "text-gray-800 bg-white px-2" : "" }>Home</NavLink>
           
            <NavLink to='/blog' className={({ isActive}) => isActive ? "text-gray-800 bg-white px-2" : "" }>Blog</NavLink>
          </ul>
        </div>
        <div className="navbar-end">


        <div className="tooltip tooltip-left cursor-pointer" data-tip={user?.displayName}>
  
        {user?.photoURL && <img className={`rounded-full w-12 h-12 mr-3`} src={user.photoURL} />}
</div>
         {user ? <button className='bg-white py-2 px-5 text-xl flex items-center text-gray-600' onClick={handlelogOut} >LogOut</button> : <Link to='/login'><button className='bg-white py-2 px-5 text-xl flex items-center text-gray-600'>Login</button>
         </Link>}
        </div>
        
      </div>
       
    );
};

export default NavogationBar;