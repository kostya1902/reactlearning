import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Page1 from "../pages/page1";

export const routes = createBrowserRouter([
    {
        path: "/",element:<MainLayout/>,children:[
            {
                path:'page1',element:<Page1/>
            }
        ]
    }

])



