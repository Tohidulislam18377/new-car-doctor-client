
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import MyBooking from "../pages/MyBooking/MyBooking";
import CheckOut from "../pages/CheckOut/CheckOut";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'booking',
                element:<MyBooking />
            },
            {
                path:'checkOut/:id',
                element:<PrivateRouter><CheckOut/></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'singUp',
                element: <SingUp />
            }
        ]
    }
]);

export default router;