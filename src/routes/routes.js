import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Accommodation from '../pages/Accommodation';
import ErrorPage from "../pages/Error";
import propertiesDatas from "../data.json";

const CustomRouter = () => {

    const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/logement/:id",
        element: <Accommodation data={propertiesDatas} />,
    },
    ]);
    return (
        <RouterProvider router={router}>
        {/* You can add any additional global components or providers here */}
        </RouterProvider>
    );
}

export default CustomRouter;