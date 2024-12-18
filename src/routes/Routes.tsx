import App from '../App';
import { Component as Layout } from '../layout';
import appPaths from '../utils/PathConstant';
import { Route } from 'react-router-dom';



const appRoutes = (
    <Route
        path={appPaths.ROOT}
        element={<App />}  >
        <Route path={appPaths.LAYOUT}   element={<Layout/>} >
            <Route path={appPaths.PRODUCTS} index  lazy={()=>import("../pages/ProductPage")}  />
            <Route path={appPaths.PRODUCTDETAILS} index  lazy={()=>import("../pages/DetailsPage")}  />
        </Route>
       

       
    </Route>
);

export default appRoutes;