import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home page/home.jsx';
import Suppliers from './components/homepage/explore/suppliers';
import Register from './pages/contactpage/register/Register.jsx';
import Login from './pages/contactpage/login/Login.jsx';
import SupplierRegister from './pages/contactpage/supplierRegister/SupplierRegister.jsx'
import Category from './pages/Category/Category.jsx'
import ViewDetails from './pages/viewdetails/ViewDetails.jsx';
import Searcher from './pages/categorypage/searcher/Searcher.jsx';
import PrivacyPolicy from './pages/privacy/PrivacyPolicy.jsx'
import Terms from './pages/terms/Terms.jsx'
import Blog from './pages/blogpage/blog/Blog.jsx';
import Read from './pages/blogpage/read/Read.jsx';
import Read1 from './pages/blogpage/read1/Read1.jsx'
import Contact from './pages/contact/Contact.jsx'
import ProfileSupplier from './pages/categorypage/userSupplier/profileSupplier.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSupplier } from './redux/actions/supplierAuthAction.js';
import { getUser } from './redux/actions/userAuthAction.js';
import SupplierLogin from './pages/contactpage/supplierLogin/SupplierLogin.jsx';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSupplier());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/viewdetails/:id" element={<ViewDetails />} />
          <Route path="/searcher" element={<Searcher />} />
          <Route path="/profilesupplier" element={<ProfileSupplier />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/creating-a-cozy-retreat-tips-for-designing-a-comfortable-living-space" element={<Read />} />
          <Route path="/why-work-zone-safety-is-important-for-everyone" element={<Read1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/supplier-register" element={<SupplierRegister />} />
          <Route path="/supplier-login" element={<SupplierLogin />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;