import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navber/>
            </div>
            <Outlet/>
            <div data-aos="zoom-in" className="max-w-6xl mx-auto">
            <Footer/>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;