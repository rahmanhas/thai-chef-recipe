import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
            })
            .catch(error => {
                console.log(error.message);
            })
        form.reset()
    }
    return (
        <div>
            <h2>Please Register</h2>
            <Form className='flex flex-col justify-center items-center' onSubmit={handleRegister} >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
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
                    <p>Already a member of Chef Recipe Hunter? <Link className='text-primary' to="/login">Please Log In</Link> </p>
                </div>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </Form>
        </div>
    );
};

export default Register;