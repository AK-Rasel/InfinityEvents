import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div data-aos="fade-left">
      <div className="hero min-h-[90vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5  text-5xl font-bold"><span className="text-7xl ">Welcome</span> <br /> <span className="text-4xl">Our Infinity Events</span></h1>
          <p className="mb-5">We organize for all kinds of events, you can go to the event booking service</p>
          <Link to="/servises">
          <button className="btn bg-rose-700 text-white outline-none border-none hover:bg-rose-600">Our Services</button>
          </Link>
        </div>
      </div>
    </div>
    <div>
      
    </div>
    </div>
  );
};

export default Banner;