import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);


    const handlelogin = (e) => {
        e.preventDefault();
        // Code to handle registering the user
      }

    
    // hide / show password
    const handleshowpass=()=>{
        setShow(!show)
    }
  

    return (
        <form className='w-1/2 mx-auto mt-5' onSubmit={handlelogin}>
        <h2 className="text-center text-3xl my-5">Please Login</h2>
           <div className="form-group">
          <label>Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
  
        <div className="form-group relative">
          <label>Password:</label>
          <input  type={show ? "text" : "password"} id="password" value={password}  onChange={(e) => setPassword(e.target.value)} required/>
          <p className="cursor-pointer" onClick={handleshowpass}>
          { show ? <FaEyeSlash className='absolute top-11 right-2'/> : <FaEye className='absolute top-11 right-2'/>}
          </p>
        </div>
        <div className="button-group text-center my-7">
          <button type="submit" className="login-button ">Login</button>
        </div>
        </form>
    );
};

export default Login;