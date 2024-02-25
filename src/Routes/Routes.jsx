import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/checkout/:id',
          element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
          loader: ({params}) => fetch( `http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element: <PrivetRoute><Bookings></Bookings></PrivetRoute>,

        },
        {
          path: '/booking/:id',
          element: <Booking></Booking>,
          loader: ({params}) => fetch( `http://localhost:5000/services/${params.id}`)
        }

      ]
    },
  ]);

  export default router;