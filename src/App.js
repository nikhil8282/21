import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home page/home.jsx';
import Suppliers from './components/homepage/explore/suppliers';
import Signup from './pages/contactpage/signup/Signup.jsx';
import Login from './pages/contactpage/login/Login.jsx';
import Supplier from './pages/contactpage/supplier/Supplier.jsx'
// import Registration from './components/contact/Registration.jsx'
import Category from './pages/Category/Category.jsx'
import ViewDetails from './pages/viewdetails/ViewDetails.jsx';
import Searcher from './pages/categorypage/searcher/Searcher.jsx';
import PrivacyPolicy from './pages/privacy/PrivacyPolicy.jsx'
import Terms from './pages/terms/Terms.jsx'
import Blog from './pages/blogpage/blog/Blog.jsx';
import Read from './pages/blogpage/read/Read.jsx';
import Read1 from './pages/blogpage/read1/Read1.jsx'
import Contact from './pages/contact/Contact.jsx'
import AfLogged from './pages/categorypage/POPUP copy/AfLogged.jsx';
import Supplylogin from './pages/contactpage/supplierlogin/Supplylogin.jsx';
import ProfileSupplier from './pages/categorypage/userSupplier/profileSupplier.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSupplier } from './redux/actions/supplierAuthAction.js';
import { getUser } from './redux/actions/userAuthAction.js';
// import Button from './components/category/POPUP copy/Button.jsx';

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />

          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/viewdetails/:id" element={<ViewDetails />} />
          <Route path="/searcher" element={<Searcher />} />
          <Route path="/aflogged" element={<AfLogged />} />
          {/* <Route path="/button" element={<Button />} /> */}
          <Route path="/profilesupplier" element={<ProfileSupplier />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/creating-a-cozy-retreat-tips-for-designing-a-comfortable-living-space" element={<Read />} />
          <Route path="/why-work-zone-safety-is-important-for-everyone" element={<Read1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/supplylogin" element={<Supplylogin />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
