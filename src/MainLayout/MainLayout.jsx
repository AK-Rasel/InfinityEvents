import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navber/>
            </div>
            <Outlet/>
            <div className="max-w-6xl mx-auto">
            <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;