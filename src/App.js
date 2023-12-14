import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import Home from "./Components/Home";
import CartAndWishlist from "./Components/CartAndWishlist";
import Shop from "./Components/Shop";
import Compare from "./Components/Compare";
import Category from "./Components/Category";
import RegistrationForm from "./Components/RegistrationForm";
import LoginForm from "./Components/LoginForm";
import ProtectedRoute from "./Components/ProtectedRoutes";
import SearchComponent from "./Components/SearchComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartAndWishlist type="cart" />} />
        <Route path="/wishlist" element={<CartAndWishlist type="wishlist" />} />
        <Route path="/shop" element={<ProtectedRoute Component={Shop} />} />
        <Route path="/category" element={<ProtectedRoute Component={Category} />} />
        <Route path="/compare" element={<ProtectedRoute Component={Compare} />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/searchcomponent" element={<SearchComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
