import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';
import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const {googleLogin,login} = useContext(AuthContextProvider);
    const naviget = useNavigate()
    const loginEven = (e) => {
        
        e.preventDefault()
        const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
    login(email,password)
    .then(result => {
      e.target.reset()
      naviget("/")
      console.log(result.user)
    })
    .catch(error => console.error(error.message))
    }

     // Google Event
     const singInWithGoogleHandele = () => {
        googleLogin()
        .then(result => {
        naviget("/")
          console.log(result.user)
        })
        .catch(error => console.error(error))
        
      }
    return (
        <div className="min-h-[70vh] max-w-6xl mx-auto grid items-center">
            <div>
                <h1 data-aos="fade-right" className="text-5xl text-center font-bold">Login <span className="text-rose-700">now!</span></h1>
                <div className="hero ">
                    <div className="hero-content flex-col-reverse lg:flex-row-reverse  gap-16">
                        <div className="text-center lg:text-left">

                            <button onClick={singInWithGoogleHandele} data-aos="zoom-in" className=" mb-3 rounded  py-2 px-8 border border-gray-400 flex items-center gap-2 text-lg font-semibold">Google <AiOutlineGoogle size={25} /></button>
                            <div data-aos="zoom-in" className="rounded py-2 px-8 border border-gray-400 flex items-center gap-2 text-lg font-semibold">FaceBook <GrFacebook /> </div>
                        </div>
                        <div data-aos="zoom-in" className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
                            <form onSubmit={loginEven}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" 
                                    name="email"
                                    className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                    name="password"
                                    className="input input-bordered" required />
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