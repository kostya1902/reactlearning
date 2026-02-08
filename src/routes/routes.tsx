import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Products from "../pages/products";
import Recipes from "../pages/recipes";
import Homepage from "../pages/homepage";
import ProductsDetails from "../components/ProductsComponents/ProductsDetails";

export const routes = createBrowserRouter([
    {
        path: "/",element:<MainLayout/>,children:[
            {index: true, element: <Homepage/>},
            {path: 'Products', element: <Products/>},
            {path: 'Products/:id', element: <ProductsDetails/>},
            {path:'Recipes',element:<Recipes/>}
        ]
    }








])



