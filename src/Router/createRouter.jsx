import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import ServiceCardDetail from "../Pages/ServiceCardDetail/ServiceCardDetail";

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
        }
      ]
    },
  ]); 
 export default createRouter