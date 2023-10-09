// import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from '../../AuthProvider/AuthProvider';

import { useContext, useState } from 'react';
import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const { createRegister, } = useContext(AuthContextProvider);
    const naviget = useNavigate()
    const [registerError, setRegisterError] = useState('');
    const [viewPassword, setViewPassword] = useState(false);

    // const [registerSuccess, setRegisterSuccess] = useState('')
    // email and password register
    const registerEvent = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value


        if (password.length < 6) {
            setRegisterError("Password must contain last 6 characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Must give an upper case letter.')
            return;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setRegisterError('Must include a special character')
            return;
        } 
       

        // reset error 
        setRegisterError('')
        // setRegisterSuccess('')

        // console.log(password, email)

        createRegister(email, password)
            .then(() => {
                e.target.reset()
                naviget("/")
                toast.success("Register Succsses Fully")
                // console.log(result.user)
                // setRegisterSuccess("Register Successfully")
            })
            .catch(error => {
                setRegisterError(error.message)
            })
    }

    return (
        <div className="min-h-[70vh] max-w-6xl mx-auto grid items-center">
            <div>
                <h1 data-aos="fade-right" className="text-5xl text-center font-bold">Register <span className="text-rose-700">now!</span></h1>
                <div className="hero ">
                    <div className="hero-content  flex-col-reverse lg:flex-row-reverse gap-16">

                        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
                            <form onSubmit={registerEvent}>
                                <div data-aos="fade-up" className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="new email" name='email'
                                        className="input input-bordered" required />
                                </div>
                                <div data-aos="fade-up" className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            required
                                            type={viewPassword ? "text" : "password"} // steat change condition
                                            placeholder="password"
                                            name="password"
                                            className="input input-bordered w-full" />
                                        
                                        <span className="text-xl absolute top-1/2 -translate-y-1/2 tr left-[80%] bottom-0 cursor-pointer" onClick={() => setViewPassword(!viewPassword)}>
                                            {
                                                viewPassword ? <span className="text-base">Hide</span> : <span className="text-base ">Show</span>
                                            }
                                        </span>
                                    </div>
                                    <label className="label">

                                        {
                                            registerError && <span className="text-red-600">{registerError}</span>
                                        }

                                    </label>
                                </div>
                                <div data-aos="fade-up" className="form-control mt-6">
                                    <button className="btn hover:bg-rose-500  bg-rose-700 text-white">Register</button>
                                </div>
                            </form>
                            <p data-aos="fade-up" className="mt-6">Already have an account ?<Link data-aos="fade-up" to="/login" className="font-semibold hover:underline text-rose-700 hover:text-rose-500">Login Here</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;