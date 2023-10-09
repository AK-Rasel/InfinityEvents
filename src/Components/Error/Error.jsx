import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="hero my-auto">
            <div className="text-center">
            <h1 className=" "></h1>
            <p>Pages not found</p>
            
            </div>


            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-9xl font-extrabold">4<span className="text-rose-700">0</span>4</h1>
      <p className="my-6 text-2xl font-medium"><span className="font-semibold text-3xl"> Oops,</span> Sorry There's NOTHINTG here ...</p>
      <Link to="/"><button className="btn bg-rose-700 text-white hover:bg-rose-600">Go Home</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Error;