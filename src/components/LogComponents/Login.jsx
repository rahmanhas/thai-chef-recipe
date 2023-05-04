import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();
const provider = new GoogleAuthProvider();

const Login = () => {
    const { user, signInUser, createUserPopUp, setUser, error,setError } = useContext(AuthContext);
    setError("")
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, email, password);
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(from)
                setError("")
            })
            .catch(error => {
                if(error.message == "Firebase: Error (auth/user-not-found)"){
               
                    setError(error.message)
                }
                else{
                    setError(error.message)

                }})
                

                
        form.reset()
    }
    const handleGoogleLogIn = (event) => {
        createUserPopUp(provider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(from)
                setError("")
            })
            .catch(error => setError(error))
    }
    const handleGithubLogIn = event => {
        createUserPopUp(githubProvider)
            .then(result => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(from)
                setError("")
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <h2 className='text-6xl font-bold text-green-700 my-12'>Please login</h2>
            <Form className='flex flex-col justify-center items-center' onSubmit={handleLogin} >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div>
                    <p className='text-red-500 my-3'>{error}</p>
                </div>

                <div>
                    <p className='my-3'>New to Chef Recipe Hunter? <Link className='text-primary' to="/register">Please register</Link> </p>
                </div>
                <input className='my-3 btn btn-primary bg-green-700 hover:bg-green-900' type="submit" value="Submit" />
                <div>
                    <button onClick={handleGoogleLogIn} className='my-3 btn btn-outline btn-info'><FaGoogle />Login with Google</button>
                </div>
                <div>
                    <button onClick={handleGithubLogIn} className='mt-3 mb-10 btn btn-outline btn-warning'><FaGithub />Login with Github</button>
                </div>
            </Form>

        </div>
    );
};

export default Login;