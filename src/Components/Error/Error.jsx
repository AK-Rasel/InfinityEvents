import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center   max-h-screen my-auto">
            <h1 className="text-9xl font-extrabold ">4<span className="text-rose-700">0</span>4</h1>
            <p>Pages not found</p>
            <Link to="/"><button className="btn bg-rose-700 text-white hover:bg-rose-600">Go Home</button></Link>
        </div>
    );
};

export default Error;