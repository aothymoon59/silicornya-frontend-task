import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
import HorizontalLinearStepper from "../pages/HorizentalStepper/HorizontalStepper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/register',
                element: <div className="mt-[100px] max-w-[1000px] items-center mx-auto px-5 text-inter">
                    <HorizontalLinearStepper />
                </div>
            }
            // ,
            // {
            //     path: '/register',
            //     element: <Register />
            // }
        ]
    },
]);

export default router