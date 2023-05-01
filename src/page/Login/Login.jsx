import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

    const { logIn } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');


    const handlelogin = (e) => {
        e.preventDefault();
        logIn(email, password)
        .then((result) => {
            const loggedIn = result.user;
            console.log(loggedIn)
            setSucces('Successfully logged in')
            setEmail('')
            setPassword('')
            setError('')
        }).catch(error =>{
            console.log(error.message)
            setError(error.message)
            setSucces('')
        })
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
        {succes && <p style={{color: 'green'}}>{succes}</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        <div className="button-group text-center my-7">
          <button type="submit" className="login-button ">Login</button>
          <p className="my-4">Are you new here? <Link to='/register' className='text-blue-700 underline my-3'>Register</Link></p>
        </div>
        </form>
    );
};

export default Login;