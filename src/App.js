import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Path from "./routepath/Path";
import * as View from "./routepath/ElementPath";
import Protected from "./components/AuthComponents/Protected";
import PrivateRoute from "./routepath/PrivateRoute";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      {/* protected routes */}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={Path.USER} element={<View.USER_PATH />} />
          <Route path={Path.WISHLIST} element={<View.WISHLIST_PATH />} />
          <Route path={Path.CHECKOUT} element={ <View.CHECKOUT_PATH/>} />
          <Route path={Path.CART} element={<View.CART_PATH />} />
        </Route>
      {/* protected routes */}

      {/* public routes */}
      {/* public routes */}
    
        <Route path={Path.HOME} element={<View.HOME_PATH />} />
        <Route path={Path.home} element={<View.HOME_PATH />} />
        <Route path={Path.LOGIN} element={<View.LOGIN_PATH />} />
        <Route path={Path.SHOP} element={<View.SHOP_PATH />} />
        
   
        <Route path={Path.REGISTER} element={<View.REGISTER_PATH />} />
        <Route path={Path.navbar} element={<View.NAVBAR_PATH />} />
        <Route
          path={`${Path.PRODUCT_DETAILS}/:id`}
          element={<View.PRODUCT_DETAIL_PATH />}
        />
   
        <Route path={Path.CONTACT} element={<View.CONTACT_PATH />} />
        <Route path="/loader" element={<Loader />} />
        {/* public routes */}
      </Routes>
    </>
  );
}

export default App;
