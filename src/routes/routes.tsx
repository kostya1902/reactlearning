import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Homepage from "../pages/homepage";

export const routes = createBrowserRouter([
    {
        path: "/",element:<MainLayout/>,children:[
            {
                index: true, element: <Homepage/>
            },
            {
                path: 'page1', element: <Page1/>
            },
            {

                path:'page2',element:<Page2/>
            }
        ]
    }








])



