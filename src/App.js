import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Utilities/Navbar/Navbar";
import Footer from "./Components/Utilities/Footer/Footer";
import Notdefine from "./Components/Utilities/Notdefine/Notdefine";
import AllCategoriesPage from "./Pages/Allcategoriespage/AllCategoriesPage";
import AllProductsPage from "./Pages/Allproductspage/AllProductsPage";
import AllBrandsPage from "./Pages/AllBrandsPage/AllBrandsPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/CartPage/CartPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import ChangePassPage from "./Pages/AuthPages/ChangePassPage/ChangePassPage";
import LoginPage from "./Pages/AuthPages/LoginPage/LoginPage";
import RegisterPage from "./Pages/AuthPages/RegisterPage/RegisterPage";
import ResetPassPage from "./Pages/AuthPages/ResetPassPage/ResetPassPage";
import VerificationCodePage from "./Pages/AuthPages/VerificationCodePage/VerificationCodePage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import ManageOrders from "./Components/AdminComp/ManageOrders/ManageOrders";
import ManageProducts from "./Components/AdminComp/ManageProducts/ManageProducts";
import AddBrand from "./Components/AdminComp/AddBrand/AddBrand";
import AddCategorie from "./Components/AdminComp/AddCategorie/AddCategorie";
import AddProduct from "./Components/AdminComp/AddProduct/AddProduct";
import AddSubCategorie from "./Components/AdminComp/AddSubCategorie/AddSubCategorie";
import AddCoupon from "./Components/AdminComp/AddCoupon/AddCoupon";
import UserPage from "./Pages/UserPage/UserPage";
import UserOrders from "./Components/UserComp/UserOrders/UserOrders";
import FavProducts from "./Components/UserComp/FavProducts/FavProducts";
import UserAddresses from "./Components/UserComp/UserAddresses/UserAddresses";
import UserProfile from "./Components/UserComp/UserProfile/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/all-categories" element={<AllCategoriesPage />}></Route>
        <Route path="/all-products" element={<AllProductsPage />}></Route>
        <Route path="/all-brands" element={<AllBrandsPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/reset-pass" element={<ResetPassPage />}></Route>
        <Route path="/Verification-code" element={<VerificationCodePage />}></Route>
        <Route path="/new-pass" element={<ChangePassPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route path="" element={<ManageOrders />}></Route>
          <Route path="orders" element={<ManageOrders />}></Route>
          <Route path="products" element={<ManageProducts />}></Route>
          <Route path="add-brand" element={<AddBrand />}></Route>
          <Route path="add-categorie" element={<AddCategorie />}></Route>
          <Route path="add-subcategorie" element={<AddSubCategorie />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="add-coupon" element={<AddCoupon />}></Route>
        </Route>
        <Route path="/user" element={<UserPage />}>
          <Route path="" element={<UserOrders />}></Route>
          <Route path="user-orders" element={<UserOrders />}></Route>
          <Route path="fav-products" element={<FavProducts />}></Route>
          <Route path="user-addresses" element={<UserAddresses />}></Route>
          <Route path="user-profile" element={<UserProfile />}></Route>
        </Route>
        <Route path="*" element={<Notdefine />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
