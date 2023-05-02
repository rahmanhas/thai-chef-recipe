import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
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
                    <image><FaGoogle/></image>
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