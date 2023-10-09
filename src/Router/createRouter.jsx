import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import ServiceCardDetail from "../Pages/ServiceCardDetail/ServiceCardDetail";
import AllServises from "../Components/Services/AllEvents/AllServises";
import AboutsUs from "../Pages/AboutsUs/AboutsUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

import Loading from "../Components/Loading/Loging";
import Error from "../Components/Error/Error";

 const createRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/serviceCard/:id",
          element:<PrivetRouter><ServiceCardDetail/></PrivetRouter> ,
          loader:() => fetch("/public/eventData.json")
        },
        {
          path:"/abouts",
          element:<AboutsUs/>
        },
        {
          path:"/servises",
          element:<Loading><AllServises/></Loading> 
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
  ]); 
 export default createRouter