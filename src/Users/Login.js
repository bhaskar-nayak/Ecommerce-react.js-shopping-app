import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const loginUser = (data) => {
        axios.post('http://localhost:9091/myapp/login', data)
            .then(response => {
                console.log('Login response:', response.data);
                const token = response.data.token;
                if (token) {
                    console.log('JWT Token:', token);  // Display token in console
                    localStorage.setItem('jwtToken', token);
                    navigate('/');  // Redirect to home after login
                }
            })
            .catch(error => {
                console.error('Error during login:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit(loginUser)} noValidate>
                        <div className="mb-3">
                            <label htmlFor='email' className='form-label'>Email Address</label>
                            <input type="email" className="form-control" id="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                })} />
                            {errors.email && <p className="text-danger">Invalid email</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"
                                {...register('password', { required: true })} />
                            {errors.password && <p className="text-danger">Please enter password</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mb-4">Login</button>
                        <div className="mt-3 mb-3">
                            <p>Don't have an account? <Link to="/register"><span><button className="p-1 mx-2 border-0 rounded-pill">Create one</button></span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;