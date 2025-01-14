import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/home/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
       
    },

    {
        // Catch-all route for 404 errors
        path: "*",
        element: <h1>NOT FOUND</h1>
    },

]);

export default router;