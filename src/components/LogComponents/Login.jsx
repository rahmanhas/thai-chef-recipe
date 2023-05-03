import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();

const Login = () => {
    const { signInUser,createUserGoogle } = useContext(AuthContext);
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
                console.log(loggedUser);
                navigate(from)
            })
            .catch(error => {
                console.log(error.message);
            })
        form.reset()
    }
    const handleGoogleLogIn =(event)=>{
        createUserGoogle(provider)
        .then(result=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from)
        })
        .catch(error=>console.log(error))
    }
    
    return (
        <div>
            <h2>Please login</h2>
            <Form className='flex flex-col justify-center items-center' onSubmit={handleLogin} >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <button onClick={handleGoogleLogIn} className='btn'><FaGoogle/>Login with Google</button>
                </div>
                <div>
                    <image><FaGithub/></image>
                </div>
                <div>
                    <p>New to Chef Recipe Hunter? <Link className='text-primary' to="/register">Please register</Link> </p>
                </div>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </Form>
        </div>
    );
};

export default Login;