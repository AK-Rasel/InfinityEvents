import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="min-h-[70vh] max-w-6xl mx-auto grid items-center">
            <div>
            <h1 className="text-5xl text-center font-bold">Register <span className="text-rose-700">now!</span></h1>
            <div className="hero ">
                <div className="hero-content  flex-col-reverse lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">

                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
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
                                <button className="btn bg-rose-700 text-white">Register</button>
                            </div>
                        </form>
                        <p className="mt-6">Already have an account ?<Link to="/login" className="font-semibold hover:underline text-rose-700 hover:text-rose-500">Login Here</Link></p>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;