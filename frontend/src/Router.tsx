import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StationsPage from './pages/StationsPage';
import SingleStationPage from './pages/SingleStationPage';

export default function Router(){
    const router = createBrowserRouter([{
        children:[
            {path:'/', Component:StationsPage},
            {path:'/stations/:id', Component:SingleStationPage}
        ]
    }])
    return <RouterProvider router={router} />;
}