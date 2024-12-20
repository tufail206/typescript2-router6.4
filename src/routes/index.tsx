import { Route } from "react-router-dom";
import appPaths from "../utils/PathConstant";
import App from "../App";
import { LayoutComponent } from "../layout";

export const routers=(
    <Route path={appPaths.ROOT} element={<App/>}>
    <Route   element={<LayoutComponent/> }>
     
            <Route path={appPaths.PRODUCTS} lazy={() => import("../pages/products")}  />
            <Route path={appPaths.PRODUCTDETAILS} lazy={() => import("../pages/details")}  />
 

    </Route>

    </Route>
)