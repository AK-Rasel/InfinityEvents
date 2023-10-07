import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import ServiceCardDetail from "../Pages/ServiceCardDetail/ServiceCardDetail";
import AllServises from "../Components/Services/AllEvents/AllServises";
import AboutsUs from "../Pages/AboutsUs/AboutsUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

 const createRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/serviceCard/:id",
          element:<ServiceCardDetail/>
        },
        {
          path:"/abouts",
          element:<AboutsUs/>
        },
        {
          path:"/servises",
          element:<AllServises/>
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