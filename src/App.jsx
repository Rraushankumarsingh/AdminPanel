import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
// import AddProduct from './pages/AddProduct';
// import ProductList from './pages/ProductList';
// import Category from './pages/Category';
import SignInSide from './LogIn/SignInSide';
import './App.css';
import './assets/Global.css'
import { AddProduct } from './Pages/Product/AddProduct';
import { ProductList } from './Pages/Product/ProductList';
// import { Categories } from './Pages/Product/Categories';
import { NewOrder } from './Pages/Order/NewOrder';
import { OrderHistory } from './Pages/Order/OrderHistory';
import { InsertOffer } from './Pages/HotOffer/InsertOffer';
import { ViewOffer } from './Pages/HotOffer/ViewOffer';
import { User } from './Pages/Customer/User';
import { TrackOrder } from './Pages/Order/TrackOrder/TrackOrder';
import { OrderSummary } from './Pages/Order/TrackOrder/OrderSummary';
import { TrackDetails } from './Pages/Order/TrackOrder/TrackDetails';
import Header from './components/Header';
import { Addcategory } from './Pages/Product/Category/Addcategory';
import { CategoryList } from './Pages/Product/Category/CategoryList';
import { ProductDetails } from './Pages/Product/ProductDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route
          path="*"
          element={
            <div className="app">
            
              <Sidebar />
              
              <div className="main-content">
              <Header/>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path='/AddProduct' element={<AddProduct/>}/>
                 <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
                  <Route path='/ProductList' element={<ProductList/>}/>
                  <Route path='/Addcategory' element={<Addcategory/>}/>
                  <Route path='/CategoryList' element={<CategoryList/>}/>
                  {/* <Route path='/Categories' element={<Categories/>}/> */}
                  <Route path='/NewOrder' element={<NewOrder/>}/>
                  <Route path='/OrderHistory' element={<OrderHistory/>}/>
                  <Route path='/TrackOrder' element={<TrackOrder/>}/>
                  <Route path='/OrderSummary' element={<OrderSummary/>}/>
                  <Route path='/InsertOffer' element={<InsertOffer/>}/>
                  <Route path='/TrackDetails' element={<TrackDetails/>}/>
                  <Route path='/ViewOffer' element={<ViewOffer/>}/>
                  <Route path='/User' element={<User/>}/>


                  {/* <Route path="/products/add" element={<AddProduct />} />
                  <Route path="/products/list" element={<ProductList />} />
                  <Route path="/products/category" element={<Category />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} /> */}
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
