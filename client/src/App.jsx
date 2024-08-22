import { BrowserRouter,useLocation } from "react-router-dom";
import {  ToastContainer } from 'react-toastify';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes";
import "./App.scss";



function App() {
  return (
    <BrowserRouter>
    
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const location = useLocation();
  const noNavFooterRoutes = ['/signin', '/signup']; // Add other routes that should not have Navbar and Footer

  const shouldShowNavFooter = !noNavFooterRoutes.includes(location.pathname);

  return (
    <div className="app">
      {shouldShowNavFooter && <Navbar />}
      <ToastContainer /> 
      <AppRoutes />
     
      {shouldShowNavFooter && <Footer />}
    </div>
  );
};

export default App;
