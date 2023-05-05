import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const { createUser, profileUpdateNamePhoto, error, setError, setUser } = useContext(AuthContext);
    const handleRegister = event => {
        setError("")
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        if (email.trim() === "" || password.trim() === "") {
            setError("Please enter your email and password.");
            return;
        }
        if (password.length < 6) {
            setError("password must be higher than 6 characters");
            return
        }

        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const isAuthenticated = authenticateUser(email, password);
                const createdUser = result.user;
                profileUpdateNamePhoto(name, photoURL);
                form.reset()
                setError("")
            })
            .catch(error => {
                setError(error.message);
            })
        form.reset()
    }
    return (
        <div>
            <h2 className='text-6xl font-bold text-green-700 my-12'>Please Register</h2>
            <Form className='flex flex-col justify-center items-center' onSubmit={handleRegister} >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required />
                </div>
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
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photoURL" type="text" placeholder="Your Photo URL" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <p className='text-red-500 my-3'>{error}</p>
                </div>
                <div>
                    <p className='my-3'>Already a member of Chef Recipe Hunter? <Link className='text-primary' to="/login">Please Log In</Link> </p>
                </div>
                <input className='mt-3 mb-10 btn btn-primary bg-green-700 hover:bg-green-900 border-0' type="submit" value="Submit" />
            </Form>
        </div>
    );
};

export default Register;