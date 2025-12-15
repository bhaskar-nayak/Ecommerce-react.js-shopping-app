// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { lazy } from 'react';
import LazyWrapper from './LazyWrappers/LazyWrapper';
// import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

// Lazy-loaded components
const Register = lazy(() => import('./Users/Register'));
const Login = lazy(() => import('./Users/Login'));
const Home = lazy(() => import('./Home/Home'));
const ProductDetailsComp = lazy(() => import('./ProductComponents/ProductDetails.component'));
const ProductComponent = lazy(() => import('./ProductComponents/Product.component'));
const CartComponent = lazy(() => import('./ProductComponents/Cart.component'));
const PaymentComponent = lazy(() => import('./ProductComponents/Payment.component'));
const Logout = lazy(() => import('./Users/Logout'));

function App() {
  return (
    <div className="App">
      {/* <Breadcrumbs/> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <LazyWrapper fallbackText="Loading Home...">
              <Home />
            </LazyWrapper>
          }
        />
        <Route
          path="/product"
          element={
            <LazyWrapper fallbackText="Loading Products...">
              <ProductComponent />
            </LazyWrapper>
          }
        />
        <Route
          path="/product-details/:productId"
          element={
            <LazyWrapper fallbackText="Loading Product Details...">
              <ProductDetailsComp />
            </LazyWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <LazyWrapper fallbackText="Loading Cart...">
              <CartComponent />
            </LazyWrapper>
          }
        />
        <Route
          path="/checkout"
          element={
            <LazyWrapper fallbackText="Processing Payment...">
              <PaymentComponent />
            </LazyWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <LazyWrapper fallbackText="Loading Register...">
              <Register />
            </LazyWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <LazyWrapper fallbackText="Loading Login...">
              <Login />
            </LazyWrapper>
          }
        />
        <Route
          path="/logouts"
          element={
            <LazyWrapper fallbackText="Logging Out...">
              <Logout />
            </LazyWrapper>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
