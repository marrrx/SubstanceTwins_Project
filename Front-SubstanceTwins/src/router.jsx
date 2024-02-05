import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/unlogged_layout';
import Auth from './layouts/auth';
import Index from './views/Index';
import Login from './views/Login';
import Register from './views/Register';
// import Logged_layout from './layouts/logged_layout';
const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        children:[
            {
                index: true,
                element: <Index />
            }
        ]
    }
    ,
    {
        path:'/auth',
        element:<Auth />,
        children:[
            {
                index:true,
                element: <Login />
            },
            {
                path:'/auth/register',
                element: <Register />
            },
        ]
    }
    
    // {
    //     path: '/logged',
    //     element:<Logged_layout />,
    //     children:[
    //         {
    //             index: true,
    //             element: <Index />
    //         }
    //     ]
    // }

])
export default router 