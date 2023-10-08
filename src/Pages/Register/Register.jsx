import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="min-h-[70vh] max-w-6xl mx-auto grid items-center">
            <div>
            <h1 data-aos="fade-right" className="text-5xl text-center font-bold">Register <span className="text-rose-700">now!</span></h1>
            <div className="hero ">
                <div className="hero-content  flex-col-reverse lg:flex-row-reverse gap-16">
                    <div  className="text-center lg:text-left">

                        <div  data-aos="zoom-in" className=" mb-3 rounded  py-2 px-8 border border-gray-400 flex items-center gap-2 text-lg font-semibold">Google <AiOutlineGoogle size={25}/></div>
                        <div  data-aos="zoom-in" className="rounded py-2 px-8 border border-gray-400 flex items-center gap-2 text-lg font-semibold">FaceBook <GrFacebook/> </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
                        <form className="">
                            <div data-aos="fade-up" className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="new email" className="input input-bordered" required />
                            </div>
                            <div data-aos="fade-up" className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="new password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Worning Masseges</a>
                                </label>
                            </div>
                            <div data-aos="fade-up" className="form-control mt-6">
                                <button className="btn bg-rose-700 text-white">Register</button>
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