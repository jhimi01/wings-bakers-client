import  { useContext, useState } from 'react';
import './Register.css'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate();
    const { createUser, googleSign, githubSign } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');
    let from =  "/";
  
    const handleRegister = (e) => {
      e.preventDefault();
      // Code to handle registering the user
      createUser(email, password)
      .then(result => {
        const register = result.user;
        console.log(register)
        setError('')
        setSucces('succesfully registered')
        navigate('/login')
      }).catch((err) => {
        console.log(err)
        setError(err.message)
        setSucces('')
      });
    }


    // Google signIn
    const handleGooglesignIn =()=>{
        googleSign()
        .then(result => {
            const googleLogin = result.user;
            console.log(googleLogin)
            navigate(from, { replace: true });
            setSucces('logged in successfully'); 
        }).catch((err) => {
            console.log(err.message)
        });
    }


    const handleGithubsignIn =()=>{
      githubSign()
      .then(result => {
        const githubLogin = result.user;
        console.log(githubLogin)
        setSucces('logged in successfully'); 
        navigate(from);
    }).catch((err) => {
        console.log(err.message)
    });
    }



    // hide / show password
    const handleshowpass=()=>{
        setShow(!show)
    }
  
    return (
      <form className='containeform' onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
  
        <div className="form-group">
          <label>Photo URL:</label>
          <input type="text" id="photoUrl" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required/>
        </div>
  
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
  
        <div className="button-group text-center">
          <button type="submit" className="register-button ">Register</button>
          <p className='my-4'>Do you already have an account? <Link to='/login' className='text-blue-700 underline'>Login</Link></p>
        </div>
        {succes && <p style={{color: 'green'}}>{succes}</p>}
        {error && <p style={{color: 'green'}}>{error}</p>}
        <div className="divider">OR</div>
  
        <div className="oauth-group flex flex-col gap-4">
          <button onClick={handleGooglesignIn} className="oauth-button flex items-center justify-center gap-3 text-gray-700 font-bold">Sign in with Google <FaGoogle></FaGoogle></button>

          <button onClick={handleGithubsignIn} className="oauth-button  flex items-center justify-center gap-3 text-gray-700 font-bold">Sign in with GitHub <FaGithub></FaGithub></button>
        </div>
      </form>
    );
}

export default Register;
