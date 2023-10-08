import { Link } from "react-router-dom";
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';

const Login = () => {
    return (
        <div className="min-h-[70vh] max-w-6xl mx-auto grid items-center">
            <div>
                <h1 data-aos="fade-right" className="text-5xl text-center font-bold">Login <span className="text-rose-700">now!</span></h1>
                <div className="hero ">
                    <div className="hero-content flex-col-reverse lg:flex-row-reverse  gap-16">
                    <div  className="text-center lg:text-left">

<div data-aos="zoom-in" className=" mb-3 rounded  py-2 px-8 border border-gray-400 flex items-center gap-2 text-lg font-semibold">Google <AiOutlineGoogle size={25}/></div>
<div  data-aos="zoom-in" className="rounded py-2 px-8 border border-gray-400 flex items-center gap-2 text-lg font-semibold">FaceBook <GrFacebook/> </div>
</div>
                        <div data-aos="zoom-in" className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
                            <form className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Worning Masseges</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-rose-700 text-white">Login</button>
                                </div>

                            </form>
                            <p className="mt-6">Dont have an account ? <Link to="/register" className="font-semibold hover:underline text-rose-700 hover:text-rose-500">Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;