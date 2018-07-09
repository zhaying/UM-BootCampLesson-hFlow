import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuAppBar from '../views/navbar/Navbar';
import Home from '../views/pages/Home';
import Products from '../views/pages/Products';
import Customers from '../views/pages/Customers';
import UseCases from '../views/pages/UseCases';
import Support from '../views/pages/Support';
import ContactUs from '../views/pages/ContactUs';
import Login from '../views/pages/Login';
import Resume from '../views/pages/Resume';
import DashboardPage from '../views/pages/Dashboard';



export default function LandingPage() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/customers" component={Customers} />
          <Route path="/use-cases" component={UseCases} />
          <Route path="/support" component={Support} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/resume" component={Resume} />
          <Route path="/dash" component={DashboardPage} />
        </main>
      </div>
    </Router>
  );
}
